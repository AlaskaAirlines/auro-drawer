import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import colorCss from "./styles/floaterBibColor.scss";
import styleCss from "./styles/floaterBibStyles.scss";
import tokensCss from "./styles/floaterBibTokens.scss";

export class AuroFloaterBib extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this._mobileBreakpointValue = undefined;
  }

  static get styles() {
    return [colorCss, styleCss, tokensCss];
  }

  firstUpdated() {
    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-floater-bib",
    );

    this.backdrop = this.shadowRoot.querySelector(".backdrop");
  }

  render() {
    return html`
      <div class="container">
        <div class="backdrop" part="backdrop"></div>
        <slot></slot>
      </div>
    `;
  }
}
