// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement } from "lit";
import { html } from 'lit/static-html.js';
import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import FloatingUI from './util/flotingUI.js';

import "./auro-floater-bib.js";
import "./auro-drawer-bib.js";

// build the component class
export class AuroFloater extends LitElement {

  constructor() {
    super();
    this.placement = "right";
    /**
     * @private
     */
    this.floaterConfig = {
      placement: 'bottom-start',
      flip: true,
      autoPlacement: false,
      offset: 0,
      fullscreenBreakpoint: "576px",
    };
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      placement: {
        type: String,
        reflect: true
      },
      behavior: {
        type: String,
        reflect: true
      },
      modal: {
        type: Boolean,
        reflect: true
      },
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

    this.floater = new FloatingUI();    
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
      <slot name="trigger"></slot>
      <slot @slotchange="${this.handleDefaultSlot}"></slot>
      <slot name="header" @slotchange="${this.handleDefaultSlot}"></slot>
      <slot name="footer" @slotchange="${this.handleDefaultSlot}"></slot>
      ${ this.behavior === 'drawer' ? 
        html`<auro-drawer-bib id="bib"
        .placement=${this.placement}>
        </auro-drawer-bib>` 
        : html`<auro-floater-bib id="bib"></auro-floater-bib>`}
      
    `;
  }
}
