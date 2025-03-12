// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import FloatingUI from './util/flotingUI.js';

import "./auro-floater-bib.js";
import "./auro-floater-backdrop.js";

// build the component class
export class AuroFloater extends LitElement {

  constructor(behavior) {
    super();

    this.behavior = behavior;
  }

  get floaterConfig() {
    return {};
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

  connectedCallback() {
    super.connectedCallback();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-floater');
  }

  firstUpdated() {
    this.floater = new FloatingUI(this);
  }

  updated(changedProperties) {
    this.floater.handleUpdate(changedProperties);

    if (changedProperties.has('triggerElement') && this.triggerElement) {
      this.floater.configure(this, 'auroFloater');
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

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-floater"] - The name of element that you want to register to.
   * @example
   * AuroFloater.register("custom-floater") // this will register this element to <custom-floater/>
   */
  static register(name = "auro-floater") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroFloater);
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
