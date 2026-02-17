// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroFloatingUI from "@aurodesignsystem/auro-library/scripts/runtime/floatingUI.mjs";

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
        reflect: true
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
  }

  disconnectedCallback() {
    if (this.floater) {
      this.floater.hideBib('disconnect');
      this.floater.disconnect();
    }
  }

  updated(changedProperties) {
    this.floater.handleUpdate(changedProperties);

    if (changedProperties.has("triggerElement")) {
      this.floater.configure(this, this.floaterConfig.prefix);
    }

    if (changedProperties.has("isPopoverVisible")) {
      if (this.isPopoverVisible) {
        this.floater.showBib();
      } else {
        this.floater.hideBib();
      }
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
