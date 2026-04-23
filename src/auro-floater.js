// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroFloatingUI from "@aurodesignsystem/auro-library/scripts/runtime/floatingUI.mjs";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { AuroFloaterBib } from "./auro-floater-bib.js";
import drawerVersion from "./drawerVersion.js";

// Lazy-initialized once from the design-system token; shared across all instances.
let mobileBreakpointValue;

function getMobileBreakpoint() {
  if (!mobileBreakpointValue) {
    const raw = getComputedStyle(document.documentElement).getPropertyValue(
      "--ds-grid-breakpoint-md",
    );
    mobileBreakpointValue = Number(raw.replace("px", "").trim()) || 768;
  }
  return mobileBreakpointValue;
}

/**
 * @internal
 */
export class AuroFloater extends LitElement {
  constructor(behavior) {
    super();

    /**
     * @private
     */
    this.behavior = behavior;

    /**
     * @private
     */
    this.floater = undefined;

    const tagPrefix = `${this.floaterConfig.prefix.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}-bib`;

    /**
     * @private
     */
    this.floaterBibTag = AuroDependencyVersioning.prototype.generateTag(
      tagPrefix,
      drawerVersion,
      AuroFloaterBib,
    );

    /** @private */
    this._savedScrollY = undefined;
    /** @private */
    this._scrollLocked = false;
    /** @private */
    this._boundTouchMoveHandler = undefined;
    /** @private */
    this._boundResizeHandler = undefined;
  }

  /**
   * @ignore
   * The configuration for floaingUI.
   * @returns {object} Floater configuration object.
   */
  get floaterConfig() {
    return {
      prefix: "auroFloater",
    };
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       * @private
       * Sets state of drawer to open.
       * @default false
       */
      isPopoverVisible: {
        attribute: "open",
        type: Boolean,
        reflect: true,
      },

      /**
       * @private
       * The element to focus when the drawer is closed.
       */
      triggerElement: {
        attribute: false,
      },
    };
  }

  firstUpdated() {
    this.floater = new AuroFloatingUI(this, this.behavior);

    this.floater.configure(this, this.floaterConfig.prefix);

    // Handle Escape key via native dialog cancel event.
    // Always preventDefault in the bib; here we decide whether to actually close.
    this.bib.addEventListener("dialog-cancel", () => {
      if (this.modal) {
        return; // Modal drawers ignore Escape.
      }
      this.hide();
    });

    // Handle backdrop clicks — close unless this is a modal drawer.
    this.bib.addEventListener("dialog-backdrop-click", () => {
      if (this.modal) {
        return; // Modal drawers require an explicit action to close.
      }
      this.hide();
    });
  }

  disconnectedCallback() {
    if (this.floater) {
      this.hide("disconnect");
    }
    this._restorePageScroll();
    this._unlockTouchScroll();
    this._stopResizeWatch();
  }

  updated(changedProperties) {
    this.floater.handleUpdate(changedProperties);

    if (changedProperties.has("triggerElement")) {
      this.floater.configure(this, this.floaterConfig.prefix);

      // Use bibLabel + aria-labelledby on the <dialog> instead of aria-label
      // directly — iOS VoiceOver does not reliably read aria-label on <dialog>.
      this.bib.bibLabel = this.triggerElement?.textContent.trim();
    }

    if (changedProperties.has("isPopoverVisible")) {
      if (this.isPopoverVisible) {
        this.show();
      } else {
        this.hide();
      }
    }
  }

  /**
   * Opens the native dialog inside the bib.
   *
   * - `modal && !nested`: `showModal()` for native focus containment and top-layer
   *   rendering. Page scroll and touch scroll are locked on mobile for the duration.
   * - `nested` or `!modal`: `setAttribute('open','')` to keep positional CSS intact
   *   and allow free keyboard flow to background content (WCAG 2.1.2).
   */
  async show() {
    this.floater.showBib();
    if (!this.bib?.dialog) {
      await this.bib?.updateComplete;
    }
    if (!this.bib?.dialog) {
      return;
    }

    const nested = this.nested ?? false;
    const modal = this.modal ?? false;

    if (nested || !modal) {
      this.bib.dialog.setAttribute("popover", "manual");
      this.bib.dialog.showPopover();
      this._startResizeWatch();
    } else {
      if (document.body.offsetWidth < getMobileBreakpoint()) {
        this._lockTouchScroll();
        this._lockPageScroll();
      }
      this.bib.dialog.showModal();
    }
  }

  /**
   * Closes the native dialog and releases all scroll locks.
   */
  hide(eventType = undefined) {
    this._restorePageScroll();
    this._unlockTouchScroll();
    this._stopResizeWatch();

    if (this.bib?.dialog?.open) {
      setTimeout(() => {
        this.bib.dialog.close();
      }, 300);
    }
    this.floater.hideBib(eventType);

    if (eventType === "disconnect") {
      this.floater.disconnect();
    }
  }

  /**
   * Applies the position:fixed page-scroll lock (mobile only).
   * Requires `this._savedScrollY` to be set before calling.
   * @private
   */
  _lockPageScroll() {
    this._savedScrollY = window.scrollY;
    document.body.style.position = "fixed";
    document.body.style.top = `-${this._savedScrollY}px`;
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    this._scrollLocked = true;
  }

  /**
   * Restores page scroll locked by `_lockPageScroll`.
   * Safe to call multiple times — no-ops when no lock is active.
   * @private
   */
  _restorePageScroll() {
    if (this._scrollLocked) {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      window.scrollTo(0, this._savedScrollY || 0);
      this._savedScrollY = undefined;
      this._scrollLocked = false;
    }
  }

  /**
   * Locks page-level touch scroll while the drawer is open.
   * Walks composedPath() so scrollable children inside the dialog still scroll.
   * @private
   */
  _lockTouchScroll() {
    if (this._boundTouchMoveHandler) {
      return;
    }
    this._boundTouchMoveHandler = (e) => {
      const path = e.composedPath();
      const insideScrollable = path.some(
        (el) => el !== document && el.scrollHeight > el.clientHeight,
      );
      if (!insideScrollable) {
        e.preventDefault();
      }
    };
    document.addEventListener("touchmove", this._boundTouchMoveHandler, {
      passive: false,
    });
  }

  /**
   * Removes the touch-scroll lock.
   * @private
   */
  _unlockTouchScroll() {
    if (this._boundTouchMoveHandler) {
      document.removeEventListener("touchmove", this._boundTouchMoveHandler, {
        passive: false,
      });
      this._boundTouchMoveHandler = undefined;
    }
  }

  /**
   * Watches viewport width while the drawer is open and toggles the scroll
   * lock if the user crosses the mobile breakpoint (e.g. orientation change).
   * @private
   */
  _startResizeWatch() {
    if (this._boundResizeHandler) {
      return;
    }
    this._boundResizeHandler = () => {
      if (document.body.offsetWidth < getMobileBreakpoint()) {
        if (!this._scrollLocked) {
          this._lockPageScroll();
          this._lockTouchScroll();
        }
      } else {
        this._restorePageScroll();
        this._unlockTouchScroll();
      }
    };
    window.addEventListener("resize", this._boundResizeHandler);
  }

  /**
   * Removes the resize listener added by `_startResizeWatch`.
   * @private
   */
  _stopResizeWatch() {
    if (this._boundResizeHandler) {
      window.removeEventListener("resize", this._boundResizeHandler);
      this._boundResizeHandler = undefined;
    }
  }

  render() {
    return html`
      <${this.floaterBibTag} id="bib"
      ?data-show=${this.isPopoverVisible}
      ?onBackdrop="${this.floaterConfig.backdrop}">
        <slot></slot>
      </${this.floaterBibTag}>
    `;
  }
}
