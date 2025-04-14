// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import FloatingUI from './util/floatingUI.js';
import { AuroFloaterBib } from "./auro-floater-bib.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';
import drawerVersion from './drawerVersion.js';

// build the component class
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


    const tagPrefix = this.floaterConfig.prefix.replace(/[A-Z]/g, letter => `-${letter.toLowerCase()}`) + "-bib";
    /**
     * @private
     */
    this.floaterBibTag = AuroDependencyVersioning.prototype.generateTag(tagPrefix, drawerVersion, AuroFloaterBib);
  }

  /**
   * @ignore
   * The configuration for floaingUI.
   * @returns {object} Floater configuration object.
   */
  get floaterConfig() {
    return {
      prefix: 'auroFloater'
    };
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      /**
       * Sets state of drawer to open.
       * @default false
       */
      isPopoverVisible: {
        attribute: "open",
        type: Boolean,
        reflect: true
      },
      /**
       * The element to focus when the drawer is closed.
       */
      triggerElement: {
        attribute: false
      }
    };
  }

  firstUpdated() {
    this.floater = new FloatingUI(this, this.behavior);

    this.floater.configure(this, this.floaterConfig.prefix);
  }

  disconnectedCallback() {
    this.floater.disconnect();
  }

  updated(changedProperties) {
    this.floater.handleUpdate(changedProperties);

    if (changedProperties.has('triggerElement')) {
      this.floater.configure(this, this.floaterConfig.prefix);
    }

    if (changedProperties.has('isPopoverVisible')) {
      if (this.isPopoverVisible) {
        this.floater.showBib();
      } else {
        this.floater.hideBib();
      }
    }
  }

  /**
   * Handles the default slot change event and updates the content.
   *
   * This method retrieves all nodes assigned to the default slot of the event target and appends them
   * to the `bibContent` element. If a callback function `onSlotChange` is defined, it is invoked to
   * notify about the slot change.
   *
   * @private
   * @method handleDefaultSlot
   * @param {Event} event - The event object representing the slot change.
   * @fires Function#onSlotChange - Optional callback invoked when the slot content changes.
   */
  handleDefaultSlot(event) {
    const bib = this.shadowRoot.querySelector('#bib') || this.bib;
    [...event.target.assignedNodes()].forEach((node) => bib.append(node));
  }

  render() {
    return html`
      <slot @slotchange="${this.handleDefaultSlot}"></slot>
      <${this.floaterBibTag} id="bib"
      ?data-show=${this.isPopoverVisible}
      ?onBackdrop="${this.floaterConfig.backdrop}"></${this.floaterBibTag}>
    `;
  }
}
