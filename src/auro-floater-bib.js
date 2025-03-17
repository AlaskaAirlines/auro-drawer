import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import colorCss from "./floaterBibColor-css.js";
import styleCss from "./floaterBibStyles-css.js";
import tokensCss from "./floaterBibTokens-css.js";

export class AuroFloaterBib extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this._mobileBreakpointValue = undefined;
  }

  static get styles() {
    return [
      colorCss,
      styleCss,
      tokensCss,
    ];
  }

  render() {
    return html`
      <div class="container">
        <slot></slot>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-floater-bib")) {
  customElements.define("auro-floater-bib", AuroFloaterBib);
}
