import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroFloater } from "./auro-floater";
import "./auro-drawer-bib.js";

const CONFIG = {
  backdrop: true,
}
export class AuroDrawer extends AuroFloater {

  constructor() {
    super('drawer');

    this.placement = "right";
    this.size = 'lg';

    /**
     * @private
     */
    this.drawerBib = undefined;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      nested: {
        type: Boolean,
        reflect: true,
      },
      placement: {
        type: String,
        reflect: true
      },
      size: {
        type: String, // sm, md, lg
        reflect: true,
      },
      modal: {
        type: Boolean,
        reflect: true
      },
    }
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

  get floaterConfig() {
    return {
      ...CONFIG,
      placement: this.placement,
    };
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

    if (changedProperties.has('placement')) {
      this.drawerBib.setAttribute('placement', this.placement);
    }

    if (changedProperties.has('size')) {
      this.drawerBib.setAttribute('size', this.size);
    }

    if (changedProperties.has('isPopoverVisible')) {
      this.drawerBib.visible = this.isPopoverVisible;
      if (!this.isPopoverVisible) {
        this.dispatchEvent(new CustomEvent('toggle'));
      }
    }
  }
}
