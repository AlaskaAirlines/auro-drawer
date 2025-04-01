
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import colorCss from "./drawerContentColor-css.js";
import styleCss from "./drawerContentStyles-css.js";
import tokensCss from "./drawerContentTokens-css.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';


const INTERACTIVE_ELEMENT_TAG = [
  'auro-dropdown',
  'auro-button',
  'auro-combobox',
  'auro-input',
  'auro-counter',
  'auro-menu',
  'auro-select',
  'auro-datepicker',
];

export class AuroDrawerContent extends LitElement {
  constructor() {
    super();

    /*
    * @private
    */
   this.buttonTag = AuroDependencyVersioning.prototype.generateTag('auro-button', buttonVersion, AuroButton);

   /**
    * @private
    */
   this.iconTag = AuroDependencyVersioning.prototype.generateTag('auro-icon', iconVersion, AuroIcon);

   /**
    * @private
    */
   this.prevActiveElement = undefined;

   /**
    * @private
    */
   this.focusables = undefined;

   /**
    * @private
    */
   this.focusIndex = 0;

   this.focus = this.focus.bind(this);
  }

  static get properties() {
    return {
      visible: {
        type: Boolean,
        reflect: true,
      },
      modal: {
        type: Boolean,
        reflect: true
      },
      unformatted: {
        type: Boolean,
        reflect: true
      },
      onDark: {
        type: Boolean,
        reflect: true,
      }
    };
  }
  static get styles() {
    return [
      colorCss,
      tokensCss,
      styleCss,
    ];
  }

  handleCloseButtonClick() {
    this.dispatchEvent(new CustomEvent("close-click"));
  }

  handleKeydown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      if (this.focusables.length >= 2) {
        if (event.shiftKey) {
          this.focusIndex--;
          if (this.focusIndex < 0) {
            this.focusIndex += this.focusables.length;
          }
        } else {
          this.focusIndex++;
          if (this.focusIndex >= this.focusables.length) {
            this.focusIndex %= this.focusables.length;
          }
        }
      }
      this.focusables[this.focusIndex].focus();
    }
  }

  focus() {
    let query = "";
    INTERACTIVE_ELEMENT_TAG.forEach(tag => query += `${tag}, [${tag}], `);
    this.focusables = [...this.querySelectorAll(query + 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];

    const closeButton = this.shadowRoot.getElementById('closeButton');
    if (closeButton) {
      this.focusables.push(closeButton);
    }

    this.focusIndex = 0;

    this.shadowRoot.querySelector('.wrapper').focus();
  }

  handleWrapperFocus() {
    this.focusables[this.focusIndex].focus();
  }

  handleWrapperTransitionEnd() {
    if (this.visible) {
      this.focus();
    }
  }

  updated(changedProperties) {
    if (changedProperties.has('visible')) {
      if (this.visible) {
        this.prevActiveElement = document.activeElement;
        if (this.prevActiveElement === document.body && this.triggerElement) {
          this.prevActiveElement = this.triggerElement;
        }
        this.prevActiveElement.blur();
      } else {
        if (this.prevActiveElement) {
          this.prevActiveElement.focus();
          this.prevActiveElement = undefined;
        }
      }
    }
  }

  render() {
    return html`
    <div class="wrapper" tabindex="-1" @keydown=${this.handleKeydown} @focus=${this.handleWrapperFocus} @transitionend=${this.handleWrapperTransitionEnd}>
      ${this.unformatted ? '' : html`
        <div class="header" part="drawer-header">
            <h1 class="heading heading--700 util_stackMarginNone--top" id="drawer-header">
              <slot name="header"></slot>
            </h1>
        </div>
      `}
      ${this.modal ? '' : 
        html`
        <${this.buttonTag} variant="flat" ?onDark=${this.onDark} id="closeButton" @click="${this.handleCloseButtonClick}" part="close-button">
          <${this.iconTag} customColor category="interface" name="x-lg"></${this.iconTag}>
          <span class="util_displayHiddenVisually">Close</span>
        </${this.buttonTag}>
        `
      }
      <div class="content" part="drawer-content">
        <slot></slot>
        <slot name="content"></slot>
      </div>
      ${this.unformatted ? '' : html`
        <div class="footer" id="footerWrapper" part="drawer-footer">
          <slot name="footer" id="footer"></slot>
        </div>
      `}
    </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-drawer-content")) {
  customElements.define("auro-drawer-content", AuroDrawerContent);
}

