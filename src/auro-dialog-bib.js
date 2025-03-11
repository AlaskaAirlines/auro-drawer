
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import styleCss from "./dialogBibStyles-css.js";
import tokensCss from "./tokens-css.js";

export class AuroDialogBib extends LitElement {
  static get properties() {
    return {
      visible: {
        type: Boolean,
        reflect: true,
      }
    };
  }
  static get styles() {
    return [
      tokensCss,
      styleCss,
    ];
  }

  render() {
    return html`
      <div class="header" part="dialog-header">
        <h1 class="heading heading--700 util_stackMarginNone--top" id="dialog-header">
          <slot name="header"></slot>
        </h1>
      </div>
      <div class="content" part="dialog-content">
        <slot></slot>
      </div>
      <div class="footer" id="footerWrapper" part="dialog-footer">
        <slot name="footer" id="footer"></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-dialog-bib")) {
  customElements.define("auro-dialog-bib", AuroDialogBib);
}

