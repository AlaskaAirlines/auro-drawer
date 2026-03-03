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
  }

  /**
   * Opens the dialog.
   * Uses showModal() for standard/modal drawers (native focus containment, top-layer).
   * Uses setAttribute('open') for nested drawers to keep positional CSS intact.
   * @param {{ nested?: boolean }} [options]
   */
  async showDialog({ nested = false } = {}) {
    // firstUpdated() may not have run yet on initial render — wait for it.
    if (!this.dialog) {
      await this.updateComplete;
    }
    if (!this.dialog) {
      return;
    }

    if (nested) {
      this.dialog.setAttribute("open", "");
    } else {
      // Prevent browser scroll-to-dialog jump before showing.
      const { documentElement } = document;
      const prevOverflow = documentElement.style.overflow;
      documentElement.style.overflow = "hidden";
      this.dialog.showModal();
      documentElement.style.overflow = prevOverflow;

      this._lockTouchScroll();
    }
  }

  /**
   * Closes the dialog and releases touch-scroll lock.
   */
  hideDialog() {
    if (!this.dialog || !this.dialog.open) {
      return;
    }
    setTimeout(() => {
      this.dialog.close();
    }, 300);
    this._unlockTouchScroll();
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
        <slot></slot>
      </dialog>
    `;
  }
}
