import AuroLibraryRuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

import { AuroFloater } from "./auro-floater.js";
import "./auro-tooltip-bib.js"

const CONFIG = {
    backdrop: false,
    flip: false,
    autoPlacement: false,
    offset: 0,
    hoverToggle: true,
  };

  export class AuroTooltip extends AuroFloater {

  constructor() {
    super('tooltip');

    this.placement = "bottom";
  }

  // function to define props used within the scope of this component
  static get properties() {
    return {
      ...super.properties,
      placement: {
        type: String,
        reflect: true
      },
    }
  }

  /**
   * This will register this element with the browser.
   * @param {string} [name="auro-tooltip"] - The name of element that you want to register to.
   *
   * @example
   * AuroTooltip.register("custom-tooltip") // this will register this element to <custom-tooltip/>
   *
   */
  static register(name = "auro-tooltip") {
    AuroLibraryRuntimeUtils.prototype.registerComponent(name, AuroTooltip);
  }

  get floaterConfig() {
    return {
      ...CONFIG,
      placement: this.placement,
    };
  }

  connectedCallback() {
    super.connectedCallback();

    AuroLibraryRuntimeUtils.prototype.handleComponentTagRename(this, 'auro-tooltip');
    this.tooltipBib = document.createElement('auro-tooltip-bib');
    this.append(this.tooltipBib);
  }

  updated(changedProperties) {
    super.updated(changedProperties);

    this.childNodes.forEach(slot => {
      if (slot !== this.tooltipBib) {
        this.tooltipBib.append(slot)
      }
    });

    if (changedProperties.has('placement')) {
      this.tooltipBib.setAttribute('placement', this.placement);
    }
  }
}
