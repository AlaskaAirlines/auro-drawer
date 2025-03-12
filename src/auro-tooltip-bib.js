
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import styleCss from "./tooltipBibStyles-css.js";
import tokensCss from "./tokens-css.js";

export class AuroTooltipBib extends LitElement {
  static get styles() {
    return [
      styleCss,
      tokensCss,
    ];
  }

  render() {
    return html`
      <div><slot></slot></div>
      `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-tooltip-bib")) {
  customElements.define("auro-tooltip-bib", AuroTooltipBib);
}
