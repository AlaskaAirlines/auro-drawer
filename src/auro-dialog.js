import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroFloater } from "./auro-floater";
import "./auro-dialog-bib.js";

const CONFIG = {
  backdrop: true,
}
export class AuroDialog extends AuroFloater {

  constructor() {
    super('dialog');

    /**
     * @private
     */
    this.dialogBib = undefined;
    this.size = "lg";
  }
  
  static get properties() {
    return {
      ...super.properties,
      size: {
        type: String,
        reflect: true,
      },
      modal: {
        type: Boolean,
        reflect: true
      },
    };
  }

  get floaterConfig() {
    return CONFIG;
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-dialog"] - The name of element that you want to register to.
   *
   * @example
   *  AuroDialog.register("custom-dialog") // this will register this element to <custom-dialog/>
   *
   */
  static register(name = "auro-dialog") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name,  AuroDialog);
  }

  connectedCallback() {
    super.connectedCallback();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-dialog');

    this.dialogBib = document.createElement('auro-dialog-bib');
    this.append(this.dialogBib);

  }

  updated(changedProperties) {
    super.updated(changedProperties);

    [...this.children].forEach(slot => {
      if (slot !== this.dialogBib) {
        this.dialogBib.append(slot)
      }
    });

    if (this.size === 'sm') {
      this.dialogBib.setAttribute('sm', '');
    } else {
      this.dialogBib.removeAttribute('sm');
    }

    if (this.size === 'md') {
      this.dialogBib.setAttribute('md', '');
    } else {
      this.dialogBib.removeAttribute('md');
    }

    this.dialogBib.visible = this.isPopoverVisible;
  }
}
