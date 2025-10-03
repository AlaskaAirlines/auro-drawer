import { AuroDrawer } from "../../src/auro-drawer.js";

/**
 * @private
 */
class AuroDrawerWCA extends AuroDrawer {}

if (!customElements.get("auro-drawer")) {
  customElements.define("auro-drawer", AuroDrawerWCA);
}
