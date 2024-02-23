// Copyright (c) 2024 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

/* eslint-disable no-underscore-dangle, jsdoc/no-undefined-types, lit-a11y/click-events-have-key-events, jsdoc/require-description-complete-sentence */

import { LitElement, html } from "lit";
import { classMap } from 'lit/directives/class-map.js';

import styleCss from "./style-css.js";
import styleUnformattedCss from './style-unformatted-css.js';
import closeIcon from '@alaskaairux/icons/dist/icons/interface/x-lg.mjs';

/* eslint-disable one-var, prefer-destructuring */

const ESCAPE_KEYCODE = 27,
  FOCUS_TIMEOUT = 50;

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-drawer appear above the page and require the user's attention.
 *
 * @attr {Boolean} modal - Modal drawer restricts the user to take an action (no default close actions)
 * @attr {Boolean} unformatted - Unformatted drawer window, edge-to-edge fill for content
 * @attr {Boolean} sm - Sets drawer box to small style. Adding both sm and lg will set the drawer to sm for desktop and lg for mobile.
 * @attr {Boolean} md - Sets drawer box to medium style. Adding both md and lg will set the drawer to md for desktop and lg for mobile.
 * @attr {Boolean} onDark - Sets close icon to white for dark backgrounds
 * @attr {Boolean} open - Sets state of drawer to open
 * @prop {HTMLElement} triggerElement - The element to focus when the drawer is closed. If not set, defaults to the value of document.activeElement when the drawer is opened.
 * @slot header - Text to display as the header of the modal
 * @slot content - Injects content into the body of the modal
 * @slot footer - Used for action options, e.g. buttons
 * @function toggleViewable - toggles the 'open' property on the element
 * @event toggle - Event fires when the element is closed
 * @csspart close-button - adjust position of the close X icon in the drawer window
 * @csspart drawer-overlay - apply CSS on the overlay of the drawer
 * @csspart drawer - apply CSS to the entire drawer
 * @csspart drawer-header - apply CSS to the header of the drawer
 * @csspart drawer-content - apply CSS to the content of the drawer
 * @csspart drawer-footer - apply CSS to the footer of the drawer
 */

export default class ComponentBase extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.dom = new DOMParser().parseFromString(closeIcon.svg, 'text/html');

    /**
     * @private
     */
    this.svg = this.dom.body.firstChild;

    this.modal = false;
    this.unformatted = false;
  }

  static get properties() {
    return {
      modal: { type: Boolean },
      unformatted: {
        type: Boolean,
        reflect: true
      },
      open: {
        type: Boolean,
        reflect: true
      },
      triggerElement: {
        attribute: false
      }
    };
  }

  firstUpdated() {
    const slot = this.shadowRoot.querySelector("#footer"),
      slotWrapper = this.shadowRoot.querySelector("#footerWrapper");

    this.drawer = this.shadowRoot.getElementById('drawer');

    if (!this.unformatted && slot.assignedNodes().length === 0) {
      slotWrapper.classList.remove("drawer-footer");
    }
  }

  /**
   * LitElement lifecycle method. Called after the DOM has been updated.
   * @param {Map<string, any>} changedProperties - Keys are the names of changed properties, values are the corresponding previous values.
   * @returns {void}
   */
  updated(changedProperties) {
    if (changedProperties.has('open')) {
      if (this.open) {
        this.openDrawer();
      } else {
        this.closeDrawer();
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.keydownEventHandler = this.handleKeydown.bind(this);
    window.addEventListener('keydown', this.keydownEventHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('keydown', this.keydownEventHandler);
  }

  /**
   * @private
   * @returns {void}
   */
  openDrawer() {
    this.defaultTrigger = document.activeElement;

    setTimeout(() => {
      this.focus();

      this.handleFocusLoss();
    }, FOCUS_TIMEOUT);
  }

  /**
   * @private
   * @returns {void}
   */
  closeDrawer() {
    this.dispatchToggleEvent();
  }

  /**
   * @private
   * @returns {void}
   */
  dispatchToggleEvent() {
    // replace with Event constructor once IE support dropped
    const toggleEvent = document.createEvent("HTMLEvents");

    toggleEvent.initEvent("toggle", true, false);
    this.dispatchEvent(toggleEvent);
  }

  /**
   * @private
   * @returns {void} Determines if dropdown bib should be closed on focus change.
   */
  handleFocusLoss() {
    const focusable = [...this.querySelectorAll('button, auro-button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')];

    const firstFocusableElement = focusable[0];
    const lastFocusableElement = focusable[focusable.length - 1];

    const closeButton = this.shadowRoot.getElementById('drawer-close');

    if (lastFocusableElement) {
      lastFocusableElement.addEventListener('focusout', () => {
        if (closeButton !== null) { // eslint-disable-line no-negated-condition
          closeButton.focus();
        } else {
          firstFocusableElement.focus();
        }
      });
    }
  }

  /**
   * @private
   * @returns {void}
   */
  handleOverlayClick() {
    if (this.open && !this.modal) {
      this.handleCloseButtonClick();
    }
  }

  /**
   * @private
   * @returns {void}
   */
  handleCloseButtonClick() {
    this.open = false;
  }

  /**
   * @private
   * @param {KeyboardEvent} event - The keyboard event containing the key and keyCode.
   * @returns {void}
   */
  handleKeydown({ key, keyCode }) {
    if (this.open && !this.modal && (key === 'Escape' || keyCode === ESCAPE_KEYCODE)) {
      this.open = false;
    }
  }

  /**
   * Focus the drawer.
   * @private
   * @returns {void}
   */
  focus() {
    if (this.open) {
      this.drawer.focus();
    }
  }

  static get styles() {
    return [
      styleCss,
      styleUnformattedCss
    ];
  }

  /**
   * @private
   * @returns {TemplateResult} - The close button template.
   */
  getCloseButton() {
    return this.modal
      ? html``
      : html`
        <button class="drawer-header--action" id="drawer-close" @click="${this.handleCloseButtonClick}" part="close-button">
          <span>${this.svg}</span>
          <span class="util_displayHiddenVisually">Close</span>
        </button>
      `;
  }

  render() {
    const classes = {
        'drawerOverlay': true,
        'drawerOverlay--modal': this.modal && this.open,
        'drawerOverlay--open': this.open,
        'util_displayHidden': !this.open
      },

      contentClasses = {
        'drawer': true,
        'drawer--open': this.open
      };

    return html`
      <div class="${classMap(classes)}" id="drawer-overlay" part="drawer-overlay" @click=${this.handleOverlayClick}></div>

      <div role="dialog" id="drawer" class="${classMap(contentClasses)}" part="drawer" aria-labelledby="drawer-header" tabindex="-1">
        ${this.unformatted
        ? html`
          <slot name="content"></slot>
          ${this.getCloseButton()}
        `
        : html`
          <div class="drawer-header" part="drawer-header">
            <h1 class="heading heading--700 util_stackMarginNone--top" id="drawer-header">
              <slot name="header">Default header ...</slot>
            </h1>
            ${this.getCloseButton()}
          </div>
          <div class="drawer-content" part="drawer-content">
            <slot name="content"></slot>
          </div>
          <div class="drawer-footer" id="footerWrapper" part="drawer-footer">
            <slot name="footer" id="footer"></slot>
          </div>
        `
      }
      </div>
    `;
  }
}
