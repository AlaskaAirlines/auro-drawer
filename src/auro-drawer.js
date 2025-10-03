// Copyright (c) 2025 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { AuroFloater } from "./auro-floater.js";
import "./auro-drawer-content.js";
import { parseBreakpointToken } from "./util/breakpointParser.js";

const CONFIG = {
  backdrop: true,
  prefix: "auroDrawer",
};

/**
 * Auro-drawer provides users a way to implement an expandable drawer component.
 *
 * @element auro-drawer
 *
 * @slot - Default slot for the body content in drawer.
 * @slot header - Text to display as the header of the modal.
 * @slot footer - Used for action options, e.g. buttons.
 * @slot close - Used to replace the close button.
 *
 * @fires auroDrawer-toggled - Event fired when the drawer is toggled open or closed.
 *
 * @csspart drawer-backdrop - to style the backdrop behind the the content wrapper.
 * @csspart drawer-wrapper - to style the content wrapper.
 * @csspart drawer-header - to style the header.
 * @csspart drawer-content - to style the container of the drawer content.
 * @csspart drawer-footer - to style the footer.
 * @csspart close-button - to style the close button.
 */
export class AuroDrawer extends AuroFloater {
  constructor() {
    super("drawer");

    this.placement = "right";
    this.size = "lg";
    this.fullscreenBreakpoint = "sm";

    /**
     * @private
     */
    this.drawerBib = undefined;
  }

  // when `carryDown` is true, the value of the property will be passed down to `this.drawerBib` in `updated` cycle.
  static get properties() {
    return {
      ...AuroFloater.properties,

      /**
       * Defines the screen size breakpoint (`lg`, `md`, `sm`, or `xs`) at which the drawer switches to fullscreen mode on mobile.
       * When expanded, the drawer will automatically display in fullscreen mode if the screen size is equal to or smaller than the selected breakpoint.
       * @default sm
       */
      fullscreenBreakpoint: {
        type: String,
        reflect: true,
      },

      /**
       * Modal drawer restricts the user to take an action (no default close actions).
       * @default false
       */
      modal: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },

      /**
       * Sets the anchor placement for the bib. If true, bib will open based off its parent size and position.
       * @default false
       */
      nested: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Sets close icon to white for dark backgrounds.
       * @default false
       */
      onDark: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },

      /**
       * Sets the placement of drawer bib to `right`, `left`, `top`, `bottom`.
       * @default right
       */
      placement: {
        // 'left', 'right', 'top', 'bottom'
        type: String,
        carryDown: true,
      },

      /**
       * Sets the size of drawer bib to `sm`, `md`, `lg`.
       * @default lg
       */
      size: {
        // sm, md, lg
        type: String,
        carryDown: true,
      },

      /**
       * Unformatted drawer window, edge-to-edge fill for content.
       * @default false
       */
      unformatted: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },
    };
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

  /**
   * @ignore
   */
  get floaterConfig() {
    return {
      ...super.floaterConfig,
      ...CONFIG,
      placement: this.placement,
      fullscreenBreakpoint: parseBreakpointToken(this.fullscreenBreakpoint),
    };
  }

  /**
   * Sets the expanded state of the drawer.
   * Called by floatingUI.
   * @ignore
   * @param {boolean} value - Whether the drawer is expanded.
   */
  set expanded(value) {
    if (value) {
      this.drawerBib.setAttribute("stretch", "");
    } else {
      this.drawerBib.removeAttribute("stretch");
    }
  }

  /**
   * Gets the expanded state of the drawer.
   * @ignore
   * @returns {boolean} Whether the drawer is expanded.
   */
  get expanded() {
    return this.drawerBib.hasAttribute("stretch");
  }

  firstUpdated() {
    super.firstUpdated();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(
      this,
      "auro-drawer",
    );

    this.drawerBib = document.createElement("auro-drawer-content");
    this.drawerBib.addEventListener("close-click", () =>
      this.floater.hideBib(),
    );
    this.append(this.drawerBib);

    this.bib.setAttribute("exportparts", "backdrop:drawer-backdrop");

    this.setupAria();
  }

  /**
   * @private
   */
  setupAria() {
    if (this.triggerElement) {
      this.triggerElement.setAttribute("aria-haspopup", "dialog");
      this.triggerElement.setAttribute(
        "aria-controls",
        this.bib.getAttribute("id"),
      );

      this.bib.setAttribute("aria-label", this.triggerElement.textContent);
    }
    this.bib.setAttribute("role", "dialog");
    if (this.modal) {
      this.bib.setAttribute("aria-modal", "true");
    }
  }

  /**
   * @private
   * Updates an attribute on the drawer template element.
   * @param {string} attribute - The name of the attribute to update.
   * @param {string | boolean} value - The value to set the attribute to.
   */
  updateDrawerBibAttribute(attribute, value) {
    if (typeof value === "boolean" || typeof value === "undefined") {
      if (value) {
        this.drawerBib.setAttribute(attribute, "");
      } else {
        this.drawerBib.removeAttribute(attribute);
      }
    } else {
      this.drawerBib.setAttribute(attribute, value);
    }
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    [...this.children].forEach((slot) => {
      if (slot !== this.drawerBib) {
        this.drawerBib.append(slot);
      }
    });

    [...changedProperties.entries()].forEach(([entry]) => {
      if (AuroDrawer.properties[entry].carryDown) {
        this.updateDrawerBibAttribute(entry, this[entry]);
      }
    });

    if (changedProperties.has("isPopoverVisible")) {
      this.drawerBib.visible = this.isPopoverVisible;
    }

    if (changedProperties.has("triggerElement")) {
      this.setupAria();
    }
  }
}
