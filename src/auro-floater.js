// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import FloatingUI from './util/floatingUI.js';
import "./auro-floater-bib.js";

// build the component class
export class AuroFloater extends LitElement {

  constructor(behavior) {
    super();

    this.behavior = behavior;
  }

  get floaterConfig() {
    return {
      prefix: 'auroFloater'
    };
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      isPopoverVisible: {
        attribute: "open",
        type: Boolean,
        reflect: true
      },
      triggerElement: {
        attribute: false
      }
    };
  }

  firstUpdated() {
    this.floater = new FloatingUI(this);

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
      <auro-floater-bib id="bib"
      ?aria-expanded="${this.isPopoverVisible}"
      ?onBackdrop="${this.floaterConfig.backdrop}"></auro-floater-bib>
    `;
  }
}
