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
      // Skip already-composed events (real user keystrokes cross shadow boundaries
      // natively) and events whose target is not the dialog itself.
      if (e.target !== this.dialog || e.composed) {
        return;
      }
      // { ...e } only spreads own enumerable properties; KeyboardEvent properties
      // (key, code, modifiers) are non-enumerable prototype getters and are silently
      // dropped, leaving the re-dispatched event with no key information. Enumerate
      // them explicitly so consumer handlers can detect which key was pressed.
      this.dispatchEvent(
        new KeyboardEvent(e.type, {
          key: e.key,
          code: e.code,
          location: e.location,
          altKey: e.altKey,
          ctrlKey: e.ctrlKey,
          metaKey: e.metaKey,
          shiftKey: e.shiftKey,
          repeat: e.repeat,
          isComposing: e.isComposing,
          bubbles: e.bubbles,
          cancelable: e.cancelable,
          composed: true,
        }),
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
        <span id="dialogLabel" class="util_displayHiddenVisually">${this.bibLabel || ""}</span>
        <div class="backdrop" part="backdrop"></div>
        <slot></slot>
      </dialog>
    `;
  }
}
