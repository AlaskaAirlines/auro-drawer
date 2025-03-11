
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import styleCss from "./floaterBibStyles-css.js";
import tokensCss from "./tokens-css.js";

export class AuroFloaterBib extends LitElement {
  static get styles() {
    return [
      styleCss,
      tokensCss,
    ];
  }
  
  static get properties() {
    return {
      visible: {
        attribute: "aria-expanded",
        reflect:true,
      }
    };
  }

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-floater-bib")) {
  customElements.define("auro-floater-bib", AuroFloaterBib);
}

