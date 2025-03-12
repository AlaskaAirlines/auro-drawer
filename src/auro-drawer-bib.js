
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import styleCss from "./drawerBibStyles-css.js";
import tokensCss from "./tokens-css.js";

export class AuroDrawerBib extends LitElement {
  static get properties() {
    return {
      visible: {
        type: Boolean,
        reflect: true,
      },
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
    <div class="wrapper">
      <div class="header" part="drawer-header">
        <h1 class="heading heading--700 util_stackMarginNone--top" id="drawer-header">
          <slot name="header"></slot>
        </h1>
      </div>
      <div class="content" part="drawer-content">
        <slot></slot>
      </div>
      <div class="footer" id="footerWrapper" part="drawer-footer">
        <slot name="footer" id="footer"></slot>
      </div>
    </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-drawer-bib")) {
  customElements.define("auro-drawer-bib", AuroDrawerBib);
}

