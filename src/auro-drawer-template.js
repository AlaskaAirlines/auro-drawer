
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import colorCss from "./drawerTemplateColor-css.js";
import styleCss from "./drawerTemplateStyles-css.js";
import tokensCss from "./tokens-css.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';

export class AuroDrawerTemplate extends LitElement {
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

  render() {
    return html`
    <div class="wrapper">
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

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-drawer-template")) {
  customElements.define("auro-drawer-template", AuroDrawerTemplate);
}

