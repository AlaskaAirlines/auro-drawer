import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroFloater } from "./auro-floater";
import "./auro-drawer-bib.js";

export class AuroDrawer extends AuroFloater {

  constructor() {
    super();

    this.behavior = "drawer";

    /**
     * @private
     */
    this.drawerBib = undefined;
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

  connectedCallback() {
    super.connectedCallback();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-drawer');

    this.drawerBib = document.createElement('auro-drawer-bib');
    this.append(this.drawerBib);

  }

  updated(changedProperties) {
    super.updated(changedProperties);

    [...this.children].forEach(slot => {
      if (slot !== this.drawerBib) {
        this.drawerBib.append(slot)
      }
    });

    this.drawerBib.setAttribute('placement', this.placement);
    this.drawerBib.visible = this.isPopoverVisible;
  }
}
