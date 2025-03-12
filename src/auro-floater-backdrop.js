
import { LitElement } from "lit";

import styleCss from "./floaterBackdropStyles-css.js";
import tokensCss from "./tokens-css.js";

export class AuroFloaterBackdrop extends LitElement {
  static get styles() {
    return [
      styleCss,
      tokensCss,
    ];
  }
  
  static get properties() {
    return {
      visible: {
        type: Boolean,
        reflect: true
      },
      modal: {
        type: Boolean,
        reflect: true
      }
    };
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-floater-backdrop")) {
  customElements.define("auro-floater-backdrop", AuroFloaterBackdrop);
}

