// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroFloatingUI from "@aurodesignsystem/auro-library/scripts/runtime/floatingUI.mjs";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { AuroFloaterBib } from "./auro-floater-bib.js";
import drawerVersion from "./drawerVersion.js";

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
   * - `modal && !nested`: `showModal()` for native focus containment and top-layer rendering.
   * - `nested` or `!modal`: `showPopover()` to keep positional CSS intact
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

    if (nested) {
      this.bib.dialog.setAttribute("open", "");
    } else if (!modal) {
      this.bib.dialog.setAttribute("popover", "manual");
      this.bib.dialog.showPopover();
    } else {
      this.bib.dialog.removeAttribute("popover");
      this.bib.dialog.showModal();
    }
  }

  /**
   * Closes the native dialog.
   */
  hide(eventType = undefined) {
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
