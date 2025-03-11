// Copyright (c) 2020 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// import { html } from "lit-element";
// import { classMap } from 'lit-html/directives/class-map';
import ComponentBase from './componentBase.js';
// Import touch detection lib
import styleCss from "./style-css.js";

import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * @attr {Boolean} left - Sets drawer box to open from the left
 */

// build the component class
export class AuroDrawer extends ComponentBase {
  // constructor() {
  //   super();
  // }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      // use custom accessors on base class
      open: {
        ...super.properties.open,
        noAccessor: true
      }
    };
  }

  static get styles() {
    return [
      super.styles,
      styleCss,
    ];
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-drawer"] - The name of element that you want to register to.
   *
   * @example
   * AuroDrawer.register("custom-drawer") // this will register this element to <custom-drawer/>
   *
   */
  static register(name = "auro-drawer") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDrawer);
  }
}
