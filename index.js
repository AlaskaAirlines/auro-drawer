import { AuroDrawer } from './src/auro-drawer.js';
import * as RuntimeUtils from '@aurodesignsystem/auro-library/scripts/utils/runtimeUtils.mjs';

RuntimeUtils.default.prototype.registerComponent('custom-drawer', AuroDrawer);
