import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import colorCss from "./styles/floaterBibColor.scss";
import styleCss from "./styles/floaterBibStyles.scss";
import tokensCss from "./styles/floaterBibTokens.scss";

/**
 * @internal
 */
export class AuroFloaterBib extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this._mobileBreakpointValue = undefined;

    /**
     * @private
     * Bound reference to the touchmove handler so it can be removed later.
     */
    this._boundTouchMoveHandler = undefined;
  }

  static get properties() {
    return {
      /**
       * Text used to label the dialog for screen readers via aria-labelledby.
       */
      bibLabel: {
        type: String,
      },
    };
  }

  static get styles() {
    return [colorCss, styleCss, tokensCss];
  }

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-floater-bib",
    );

    this.dialog = this.shadowRoot.querySelector("dialog");

    // Always prevent native dialog close on Escape; re-dispatch as a composed
    // event so AuroDrawer can decide whether to honour it based on `modal`.
    this.dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
      this.dispatchEvent(
        new Event("dialog-cancel", { bubbles: true, composed: true }),
      );
    });

    // Re-dispatch keydown events that stopped at the dialog boundary so that
    // slotted consumer keyboard handlers outside the shadow DOM still receive them.
    this.dialog.addEventListener("keydown", (e) => {
      if (e.target !== this.dialog) {
        return;
      }
      this.dialog.dispatchEvent(
        new KeyboardEvent(e.type, { ...e, bubbles: true, composed: true }),
      );
    });

    // Clicks on the empty dialog area (outside the drawer panel) target the
    // dialog element directly; clicks inside the panel bubble up from a child.
    this.dialog.addEventListener("click", (e) => {
      if (e.target === this.dialog) {
        this.dispatchEvent(new Event("dialog-backdrop-click", { bubbles: true, composed: true }));
      }
    });
  }

  /**
   * Opens the dialog.
   *
   * - `modal && !nested`: uses `showModal()` for native focus containment and top-layer
   *   rendering. Page scroll and touch scroll are locked for the duration.
   * - `nested`: uses `setAttribute('open','')` to keep positional CSS intact.
   *   `showModal()` would promote the element to the top layer, breaking
   *   `position: absolute` anchoring used by nested drawers.
   * - `!modal && !nested`: uses `setAttribute('open','')` so keyboard focus can
   *   flow freely to background page content (WCAG 2.1.2 No Keyboard Trap).
   *
   * @param {{ nested?: boolean, modal?: boolean }} [options]
   */
  async showDialog({ nested = false, modal = false } = {}) {
    // firstUpdated() may not have run yet on initial render — wait for it.
    if (!this.dialog) {
      await this.updateComplete;
    }
    if (!this.dialog) {
      return;
    }

    if (nested || !modal) {
      // Non-modal and nested drawers: open without entering the top layer.
      this.dialog.setAttribute("open", "");
    } else {
      // Modal, non-nested: use showModal() for native focus containment and top-layer.
      // Lock page scroll for the entire duration the dialog is open.
      // Using position:fixed on <body> is the only reliable way to prevent
      // ALL scroll vectors — including VoiceOver three-finger swipe, which
      // bypasses both overflow:hidden and touchmove preventDefault.
      // We capture the current scrollY so we can restore position on close.
      this._savedScrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${this._savedScrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      this._scrollLocked = true;

      this.dialog.showModal();

      this._lockTouchScroll();
    }
  }

  /**
   * Closes the dialog and releases touch-scroll lock.
   */
  hideDialog() {
    // Restore scroll immediately — don't wait for dialog.close().
    this._restorePageScroll();
    this._unlockTouchScroll();

    if (this.dialog?.open) {
      setTimeout(() => {
        this.dialog.close();
      }, 300);
    }
  }

  /**
   * Restores page scroll that was locked during showDialog().
   * Safe to call multiple times — only acts when a lock is active.
   * @private
   */
  _restorePageScroll() {
    if (this._scrollLocked) {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
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

  render() {
    return html`
      <dialog class="container" aria-labelledby="dialogLabel">
        <span id="dialogLabel" class="util_displayHiddenVisually" aria-hidden="true">${this.bibLabel || ""}</span>
        <div class="backdrop" part="backdrop"></div>
        <slot></slot>
      </dialog>
    `;
  }
}
