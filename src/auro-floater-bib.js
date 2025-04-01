import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

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

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-floater-bib');

    this.backdrop = this.shadowRoot.querySelector('.backdrop');
  }

  render() {
    return html`
      <div class="container">
        <div class="backdrop"></div>
        <slot></slot>
      </div>
    `;
  }
}
