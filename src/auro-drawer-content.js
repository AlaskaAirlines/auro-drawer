
import { LitElement } from "lit";
import { html } from 'lit/static-html.js';

import colorCss from "./styles/drawerContentColor-css.js";
import styleCss from "./styles/drawerContentStyles-css.js";
import tokensCss from "./styles/drawerContentTokens-css.js";

import { AuroDependencyVersioning } from '@aurodesignsystem/auro-library/scripts/runtime/dependencyTagVersioning.mjs';

import { AuroButton } from '@aurodesignsystem/auro-button/src/auro-button.js';
import buttonVersion from './buttonVersion.js';

import { AuroIcon } from '@aurodesignsystem/auro-icon/src/auro-icon.js';
import iconVersion from './iconVersion.js';
import { FocusTrap } from "./util/FocusTrap.js";

export class AuroDrawerContent extends LitElement {
  constructor() {
    super();

    /*
    * @private
    */
    this.buttonTag = AuroDependencyVersioning.prototype.generateTag('auro-button', buttonVersion, AuroButton);

    /**
     * @private
     */
    this.iconTag = AuroDependencyVersioning.prototype.generateTag('auro-icon', iconVersion, AuroIcon);

    /**
     * @private
     */
    this.prevActiveElement = undefined;
  }

  static get properties() {
    return {
      visible: {
        type: Boolean,
        reflect: true,
      },
      modal: {
        type: Boolean,
        reflect: true
      },
      unformatted: {
        type: Boolean,
        reflect: true
      },
      onDark: {
        type: Boolean,
        reflect: true,
      }
    };
  }

  static get styles() {
    return [
      colorCss,
      tokensCss,
      styleCss,
    ];
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
    if (changedProperties.has('visible')) {
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
    <div class="wrapper" tabindex="-1" part="drawer-wrapper" @transitionend=${this.handleWrapperTransitionEnd}>
      ${this.unformatted ? '' : html`
        <div part="drawer-header" class="header">
            <h1 class="heading heading-lg util_stackMarginNone--top" id="drawer-header">
              <slot name="header"></slot>
            </h1>
        </div>
      `}
      ${this.modal ? '' :
        html`
        <div id="closeButton" @click="${this.handleCloseButtonClick}">
          <slot name="close">
            <${this.buttonTag} 
            part="close-button"
            variant="ghost"
            shape="circle"
            size="sm"
            ?onDark=${this.onDark} 
            aria-label="Close">
              <${this.iconTag} ?customColor="${this.onDark}" category="interface" name="x-lg"></${this.iconTag}>
              <span class="util_displayHiddenVisually">Close</span>
            </${this.buttonTag}>
          </slot>
        </div>
        `
      }
      <div part="drawer-content" class="content body-default">
        <slot></slot>
        <slot name="content"></slot>
      </div>
      ${this.unformatted ? '' : html`
        <div part="drawer-footer" class="footer" id="footerWrapper">
          <slot name="footer" id="footer"></slot>
        </div>
      `}
    </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-drawer-content")) {
  customElements.define("auro-drawer-content", AuroDrawerContent);
}

