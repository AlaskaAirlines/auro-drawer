import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";
import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import { FocusTrap } from "@aurodesignsystem/auro-library/scripts/runtime/FocusTrap/FocusTrap.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";
import { LitElement } from "lit";
import { html } from "lit/static-html.js";
import buttonVersion from "./buttonVersion.js";
import iconVersion from "./iconVersion.js";

import colorCss from "./styles/drawerContentColor.scss";
import styleCss from "./styles/drawerContentStyles.scss";
import tokensCss from "./styles/drawerContentTokens.scss";

/**
 * @internal
 */
export class AuroDrawerContent extends LitElement {
  constructor() {
    super();

    this.closeButtonAppearance = "default";

    /**
     * @private
     */
    this.runtimeUtils = new AuroLibraryRuntimeUtils();

    /*
     * @private
     */
    this.buttonTag = AuroDependencyVersioning.prototype.generateTag(
      "auro-button",
      buttonVersion,
      AuroButton,
    );

    /**
     * @private
     */
    this.iconTag = AuroDependencyVersioning.prototype.generateTag(
      "auro-icon",
      iconVersion,
      AuroIcon,
    );

    /**
     * @private
     */
    this.prevActiveElement = undefined;
  }

  static get properties() {
    return {
      /**
       * Defines whether the close button should be light colored for use on dark backgrounds.
       * @property {'default', 'inverse'}
       * @default 'default'
       */
      closeButtonAppearance: {
        type: String,
        attribute: "close-button-appearance",
        reflect: true,
      },

      modal: {
        type: Boolean,
        reflect: true,
      },

      onDark: {
        type: Boolean,
        reflect: true,
      },

      unformatted: {
        type: Boolean,
        reflect: true,
      },

      visible: {
        type: Boolean,
        reflect: true,
      },

      closing: {
        type: Boolean,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [colorCss, tokensCss, styleCss];
  }

  handleCloseButtonClick() {
    this.dispatchEvent(new CustomEvent("close-click"));
  }

  updated(changedProperties) {
    if (changedProperties.has("visible")) {
      if (this.visible) {
        // Reset CSS animation so it replays each time the drawer opens
        const wrapper = this.shadowRoot.querySelector(".wrapper");
        if (wrapper) {
          wrapper.style.animation = "none";
          // Force reflow to restart the animation
          void wrapper.offsetHeight; // eslint-disable-line no-void
          wrapper.style.animation = "";
        }

        if (!this.focusTrap) {
          this.focusTrap = new FocusTrap(this);
        }
        this.prevActiveElement = this.triggerElement || document.activeElement;
        // Move focus to the first focusable element inside the drawer.
        // rAF lets showModal()'s native focus assignment settle before we override.
        requestAnimationFrame(() => {
          this.focusTrap?.focusFirstElement();
        });
      } else {
        // Native dialog.close() fires after a 300ms delay (see auro-floater-bib hideDialog).
        // Defer focus restoration so it runs after the dialog releases focus.
        const target = this.prevActiveElement;
        this.prevActiveElement = undefined;
        setTimeout(() => target?.focus(), 350);

        if (this.focusTrap) {
          this.focusTrap.disconnect();
          this.focusTrap = null;
        }
      }
    }

    if (changedProperties.has("closing") && this.closing) {
      // Reset closing state after animation completes
      setTimeout(() => {
        this.closing = false;
      }, 300);
    }
  }

  render() {
    return html`
      <!-- Hidden slot for close button aria-label -->
      <slot name="ariaLabel.drawer.close" hidden @slotchange=${this.requestUpdate}></slot>

      <div class="wrapper" tabindex="-1" part="drawer-wrapper">
        ${
          this.unformatted
            ? ""
            : html`
          <div class="header-row">
              <h1 class="heading heading-lg util_stackMarginNone--top" id="drawer-header" part="drawer-header">
                <slot name="header"></slot>
              </h1>
            ${
              this.modal
                ? ""
                : html`
              <div id="closeButton" @click="${this.handleCloseButtonClick}">
                <slot name="close">
                  <${this.buttonTag}
                  part="close-button"
                  variant="ghost"
                  shape="circle"
                  size="sm"
                  aria-label="${this.runtimeUtils.getSlotText(this, "ariaLabel.drawer.close") || "Close"}"
                  appearance="${this.onDark ? "inverse" : this.closeButtonAppearance}">
                  <${this.iconTag} ?customColor="${this.onDark || this.closeButtonAppearance === "inverse"}" category="interface" name="x-lg"></${this.iconTag}>
                  </${this.buttonTag}>
                </slot>
              </div>
              `
            }
          </div>
        `
        }
        <div part="drawer-content" class="content body-default">
          <slot></slot>
          <slot name="content"></slot>
        </div>
        ${
          this.unformatted
            ? ""
            : html`
          <div part="drawer-footer" class="footer" id="footerWrapper">
            <slot name="footer" id="footer"></slot>
          </div>
        `
        }
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-drawer-content")) {
  customElements.define("auro-drawer-content", AuroDrawerContent);
}
