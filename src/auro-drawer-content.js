import { LitElement } from "lit";
import { html } from "lit/static-html.js";

import { AuroButton } from "@aurodesignsystem/auro-button/class";
import { AuroIcon } from "@aurodesignsystem/auro-icon/class";

import { AuroDependencyVersioning } from "@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs";
import AuroLibraryRuntimeUtils from "@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs";

import { FocusTrap } from "./util/FocusTrap.js";
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

    this.closeButtonAppearance = 'default';

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
        attribute: 'close-button-appearance',
        reflect: true
      },

      modal: {
        type: Boolean,
        reflect: true
      },

      onDark: {
        type: Boolean,
        reflect: true
      },

      unformatted: {
        type: Boolean,
        reflect: true
      },
      
      visible: {
        type: Boolean,
        reflect: true
      }
    };
  }

  static get styles() {
    return [colorCss, tokensCss, styleCss];
  }

  handleCloseButtonClick() {
    this.dispatchEvent(new CustomEvent("close-click"));
  }

  handleWrapperTransitionEnd() {
    if (!this.visible) return;
    if (!this.focusTrap) return;
    this.focusTrap.focusFirstElement();
  }

  updated(changedProperties) {
    if (changedProperties.has("visible")) {
      if (this.visible) {
        if (!this.focusTrap) {
          this.focusTrap = new FocusTrap(this);
        }
        this.prevActiveElement = document.activeElement;
        if (this.prevActiveElement === document.body && this.triggerElement) {
          this.prevActiveElement = this.triggerElement;
        }
      } else {
        if (this.prevActiveElement) {
          this.prevActiveElement.focus();
          this.prevActiveElement = undefined;
        }

        if (this.focusTrap) {
          this.focusTrap.disconnect();
          this.focusTrap = null;
        }
      }
    }
  }

  firstUpdated() {
    super.firstUpdated();
  }

  render() {
    return html`
      <!-- Hidden slot for close button aria-label -->
      <slot name="ariaLabel.drawer.close" hidden @slotchange=${this.requestUpdate}></slot>

      <div class="wrapper" tabindex="-1" part="drawer-wrapper" @transitionend=${this.handleWrapperTransitionEnd}>
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
                  aria-label="${this.runtimeUtils.getSlotText(this, 'ariaLabel.drawer.close') || 'Close'}"
                  appearance="${this.onDark ? 'inverse' : this.closeButtonAppearance}">
                  <${this.iconTag} ?customColor="${this.onDark || this.closeButtonAppearance === 'inverse'}" category="interface" name="x-lg"></${this.iconTag}>
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
