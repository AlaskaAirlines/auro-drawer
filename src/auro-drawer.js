import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroFloater } from "./auro-floater";
import "./auro-drawer-template.js";
import { parseBreakpointToken } from "./util/breakpointParser.js";

const CONFIG = {
  backdrop: true,
  prefix: 'auroDrawer'
}

export class AuroDrawer extends AuroFloater {

  constructor() {
    super('drawer');

    this.placement = "right";
    this.size = 'lg';
    this.fullscreenBreakpoint = "sm";

    /**
     * @private
     */
    this.drawerBib = undefined;
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      unformatted: {
        type: Boolean,
        carryDown: true,
        reflect: true
      },
      nested: {
        type: Boolean,
        reflect: true,
      },
      /**
       * @private
       */
      placement: {
        type: String,
        carryDown: true,
        // reflect: true
      },
      /**
       * @private
       */
      size: {
        type: String, // sm, md, lg
        carryDown: true,
      },
      onDark: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },
      modal: {
        type: Boolean,
        carryDown: true,
        reflect: true
      },
      left: {
        type: Boolean,
        reflect: true
      },
      sm: {
        type: Boolean,
        reflect: true
      },
      md: {
        type: Boolean,
        reflect: true,
      },
      /**
       * Defines the screen size breakpoint (`lg`, `md`, `sm`, or `xs`) at which the dropdown switches to fullscreen mode on mobile.
       * When expanded, the dropdown will automatically display in fullscreen mode if the screen size is equal to or smaller than the selected breakpoint.
       * @default sm
       */
      fullscreenBreakpoint: {
        type: String,
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
      fullscreenBreakpoint: parseBreakpointToken(this.fullscreenBreakpoint),
    };
  }

  set expanded(value) {
    if (value) {
      this.drawerBib.setAttribute('stretch', "");
    } else {
      this.drawerBib.removeAttribute('stretch');
    }
  }

  firstUpdated() {
    super.firstUpdated();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-drawer');

    this.drawerBib = document.createElement('auro-drawer-template');
    this.drawerBib.addEventListener('close-click', () => this.floater.hideBib());
    this.append(this.drawerBib);

  }

  updateDrawerBibAttribute(attribute, value) {
    if (typeof value === 'boolean' || typeof value === 'undefined') {
      if (value) {
        this.drawerBib.setAttribute(attribute, "");
      } else {
        this.drawerBib.remove(attribute);
      }
    } else {
      this.drawerBib.setAttribute(attribute, value);
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    [...this.children].forEach(slot => {
      if (slot !== this.drawerBib) {
        this.drawerBib.append(slot)
      }
    });

    changedProperties.entries().forEach(([entry]) => {
      if (AuroDrawer.properties[entry].carryDown) {
        this.updateDrawerBibAttribute(entry, this[entry]);
      }
    })

    this.placement = this.left ? 'left': 'right';
    if (this.sm) {
      this.size = 'sm';
    } else if (this.md) {
      this.size = "md";
    }

    if (changedProperties.has('isPopoverVisible')) {
      this.drawerBib.visible = this.isPopoverVisible;
      if (!this.isPopoverVisible) {
        this.dispatchEvent(new CustomEvent('toggle'));
      }
    }
  }
}
