import { initBasicExample, initDropdownExample, initTooltipExample, initDialogExample } from "../apiExamples/floater.js";

import { AuroDrawer } from '../src/auro-drawer.js';
import { AuroDialog } from '../src/auro-dialog.js';
import { AuroTooltip } from "../src/auro-tooltip.js";
import { AuroDropdown } from "../src/auro-dropdown.js";

AuroDrawer.register();
AuroDialog.register();
AuroDropdown.register();
AuroTooltip.register();

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    initBasicExample();
    // initDropdownExample();
    initTooltipExample();
    initDialogExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

