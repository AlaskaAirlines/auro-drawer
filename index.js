import { AuroDrawer } from './src/auro-drawer';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-drawer') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroDrawer {});
  }
}

export { registerComponent }
