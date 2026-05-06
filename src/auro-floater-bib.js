import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import colorCss from "./styles/floaterBibColor.scss";
import styleCss from "./styles/floaterBibStyles.scss";
import tokensCss from "./styles/floaterBibTokens.scss";

/**
 * @internal
 */
export class AuroFloaterBib extends LitElement {
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
        this.dispatchEvent(
          new Event("dialog-backdrop-click", { bubbles: true, composed: true }),
        );
      }
    });
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
