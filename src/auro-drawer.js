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
 * A panel that slides in from an edge of the screen to show content or actions without leaving the page.
 *
 * **Key capabilities**
 *
 * - **Choose where it opens**: Set `placement` to `right`, `left`, `top`, or `bottom`.
 * - **Choose how large it is**: Set `size` to `sm`, `md`, or `lg`.
 * - **Fills small screens**: At the screen width set by `fullscreenBreakpoint` and smaller, the drawer fills the screen.
 * - **Requires an action**: Set `modal` so people can't dismiss the drawer with Escape or a click outside it.
 * - **Sits inside a container**: Set `nested` to open the drawer inside its parent instead of over the page.
 * - **Manages focus**: Focus moves into the drawer when it opens and returns to the trigger when it closes.
 *
 * **Example**
 *
 * ```html
 * <auro-drawer open>
 *   <span slot="header">Baggage rules</span>
 *   <div slot="content">Drawer content goes here.</div>
 * </auro-drawer>
 * ```
 * @summary A panel that slides in from any edge of the screen, with size, modal, and fullscreen options.
 * @customElement auro-drawer
 *
 * @slot - The drawer's body content. Appears in the same place as the `content` slot.
 * @slot content - The drawer's body content. Appears after the default slot's content.
 * @slot header - The heading text at the top of the drawer. Screen readers also announce it as the drawer's name. Not shown when `unformatted` is set.
 * @slot footer - Action buttons at the bottom of the drawer. Add a button that closes the drawer here when `modal` is set. Not shown when `unformatted` is set.
 * @slot close - Content that replaces the close button. Clicking it closes the drawer. Not shown when `modal` or `unformatted` is set.
 * @slot ariaLabel.drawer.close - Text that screen readers announce for the close button, for example "Close filters". Defaults to "Close".
 *
 * @fires auroDrawer-toggled - Fires when the drawer opens or closes. The event's `detail` has `expanded`, which is true when the drawer is open, and `eventType`, the reason the drawer changed, such as `disconnect` when the drawer is removed from the page. `eventType` is `unknown` when no reason is given.
 *
 * @csspart {deprecated} drawer-backdrop - Deprecated: Set `display: none` on this part and use the `--auro-drawer-backdrop-*` CSS custom properties instead. A decorative `<div>` behind the drawer that shows the default dimmed background.
 * @csspart drawer-wrapper - The container that wraps the drawer's header, content, and footer.
 * @csspart drawer-header - The `<h1>` that holds the `header` slot. Doesn't exist when `unformatted` is set.
 * @csspart drawer-content - The container for the default and `content` slots.
 * @csspart drawer-footer - The container for the `footer` slot. Doesn't exist when `unformatted` is set.
 * @csspart close-button - The button that closes the drawer. Doesn't exist when `modal` or `unformatted` is set, or when you use the `close` slot.
 *
 * @cssprop [--auro-drawer-backdrop-background=transparent] - Background of the `::backdrop` pseudo-element, which is transparent unless you set it. The default dimmed background comes from the deprecated `drawer-backdrop` part instead.
 * @cssprop [--auro-drawer-backdrop-filter=none] - `backdrop-filter` applied to the `::backdrop` pseudo-element, such as `blur(4px)`.
 * @cssprop [--auro-drawer-backdrop-opacity=1] - Opacity of the `::backdrop` pseudo-element.
 * @cssprop [--auro-drawer-backdrop-transition=opacity 0.3s ease] - Transition applied to the `::backdrop` pseudo-element.
 * @cssprop [--ds-auro-drawer-container-color=var(--ds-basic-color-surface-default)] - Background color of the drawer panel.
 * @cssprop [--ds-auro-drawer-text-color=var(--ds-basic-color-texticon-default)] - Color of the text inside the drawer.
 */
export class AuroDrawer extends AuroFloater {
  constructor() {
    super("drawer");

    this._initializeDefaults();
  }

  /**
   * @private
   * Sets the default values for the drawer's properties.
   */
  _initializeDefaults() {
    this.closeButtonAppearance = "default";
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
       * Sets the color of the close button. Use `inverse` for a light button on a dark drawer background.
       * @type {'default' | 'inverse'}
       * @default 'default'
       */
      closeButtonAppearance: {
        type: String,
        attribute: "close-button-appearance",
        carryDown: true,
        reflect: true,
      },

      /**
       * Sets the screen width at and below which the drawer fills the screen. Use `xs`, `sm`, `md`, or `lg`: the larger the breakpoint, the more screen sizes show a fullscreen drawer.
       * @type {'lg' | 'md' | 'sm' | 'xs'}
       * @default 'sm'
       */
      fullscreenBreakpoint: {
        type: String,
        reflect: true,
      },

      /**
       * Makes the drawer a modal that people must act on to dismiss. A modal drawer has no close button, and pressing Escape or clicking outside it doesn't close it, so add a button that closes it to the `footer` slot.
       */
      modal: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },

      /**
       * Opens the drawer inside its parent container instead of over the whole page.
       */
      nested: {
        type: Boolean,
        reflect: true,
      },

      /**
       * Deprecated: Use `closeButtonAppearance="inverse"` instead.
       * Makes the close button light for use on dark backgrounds.
       * @deprecated Use `closeButtonAppearance="inverse"` instead.
       */
      onDark: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },

      /**
       * Sets the edge of the screen the drawer slides in from. Use `right` (the default) or `left` for a side panel that fills the screen's height, and `top` or `bottom` for a panel that spans the full width.
       * @type {'right' | 'left' | 'top' | 'bottom'}
       * @default 'right'
       */
      placement: {
        type: String,
        carryDown: true,
      },

      /**
       * Sets how large the drawer is: its width for `left` and `right` placements, or its height for `top` and `bottom` placements. `sm` is the smallest, `md` is in the middle, and `lg` is the largest.
       * @type {'sm' | 'md' | 'lg'}
       * @default 'lg'
       */
      size: {
        type: String,
        carryDown: true,
      },

      /**
       * Removes the drawer's padding, header, footer, and close button so your content fills the drawer edge to edge. Because the `header`, `footer`, and `close` slots aren't shown, add your own heading, and add a way to close the drawer if it's `modal`.
       */
      unformatted: {
        type: Boolean,
        carryDown: true,
        reflect: true,
      },
    };
  }

  /**
   * Registers the element with the browser under a tag name.
   * @param {string} [name="auro-drawer"] - The tag name to register the element under.
   *
   * @example
   * AuroDrawer.register("custom-drawer"); // Registers the element as <custom-drawer>.
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
   * Sets whether the drawer fills its available space.
   * Called by floatingUI.
   * @ignore
   * @param {boolean} value - If true, the drawer fills its available space. If false, the drawer uses its normal size.
   */
  set expanded(value) {
    if (value) {
      this.drawerBib.setAttribute("stretch", "");
    } else {
      this.drawerBib.removeAttribute("stretch");
    }
  }

  /**
   * Checks whether the drawer fills its available space.
   * @ignore
   * @returns {boolean} True if the drawer fills its available space; false otherwise.
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
    this.drawerBib.triggerElement = this.triggerElement;
    this.drawerBib.addEventListener("close-click", () => {
      this.hide();
    });
    this.drawerBib.addEventListener("header-change", () => {
      this.updateBibLabel();
    });
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
    }
    // role="dialog" is provided natively by the <dialog> element — do not set it here.
    //
    // aria-modal is NOT, and the distinction matters: native modal semantics come
    // from how the dialog is opened, not from the element. Only `modal && !nested`
    // uses showModal(); `!modal && !nested` uses showPopover() (or dialog.show() on
    // browsers without the Popover API) and `nested` uses setAttribute("open"),
    // none of which is exposed as modal. auro-library's lockScroll() therefore sets aria-modal on the inner
    // <dialog> for any presentation that takes the page scroll lock, which is what
    // makes the dismissible drawer report its modality correctly. See auro-floater.js
    // show() for the three open paths.
  }

  /**
   * Gets the text that names the dialog for screen readers.
   * @private
   * @returns {string | undefined} The text of the header slot, or the text of the trigger element when the header has no text or the drawer is unformatted.
   */
  getBibLabel() {
    const headerText = this.unformatted
      ? undefined
      : this.drawerBib
          ?.querySelector(':scope > [slot="header"]')
          ?.textContent.trim();

    return headerText || super.getBibLabel();
  }

  /**
   * Sets the dialog's label from the header text, or from the trigger text when there's no header text.
   * @private
   */
  updateBibLabel() {
    if (this.bib) {
      this.bib.bibLabel = this.getBibLabel();
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
        this.updateDrawerBibAttribute(
          AuroDrawer.properties[entry].attribute || entry,
          this[entry],
        );
      }
    });

    if (changedProperties.has("isPopoverVisible")) {
      this.drawerBib.visible = this.isPopoverVisible;
      if (this.isPopoverVisible) {
        // Cancel any in-flight close animation when the drawer reopens.
        this.drawerBib.closing = false;
      } else if (changedProperties.get("isPopoverVisible") === true) {
        // Only trigger the close animation when transitioning open → closed,
        // not on initial render where the previous value is undefined.
        this.drawerBib.closing = true;
      }
    }

    if (changedProperties.has("triggerElement")) {
      if (this.drawerBib) {
        this.drawerBib.triggerElement = this.triggerElement;
      }
      this.setupAria();
    }

    this.updateBibLabel();
  }
}
