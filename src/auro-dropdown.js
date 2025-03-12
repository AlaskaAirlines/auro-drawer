import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroFloater } from "./auro-floater";

const CONFIG = {
    backdrop: false,
    placement: 'bottom-start',
    flip: true,
    autoPlacement: false,
    offset: 0,
    fullscreenBreakpoint: "576px",
  };

  /**
   * @element auro-dropdown
   * @summary An Auro dropdown component.
   * 
   * @attr {Boolean} onDark - Sets close icon to white for dark backgrounds
   * @slot - Injects content into the body of the modal
   * @slot header - Text to display as the header of the modal
   * @slot footer - Used for action options, e.g. buttons
   * @event toggle - Event fires when the element is closed
   * @csspart close-button - adjust position of the close X icon in the drawer window
   */
  export class AuroDropdown extends AuroFloater {

  constructor() {
    super('dropdown');
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-dropdown"] - The name of element that you want to register to.
   *
   * @example
   * AuroDropdown.register("custom-dropdown") // this will register this element to <custom-dropdown/>
   *
   */
  static register(name = "auro-dropdown") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroDropdown);
  }

  get floaterConfig() {
    return CONFIG;
  }

  connectedCallback() {
    super.connectedCallback();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-dropdown');
  }
}
