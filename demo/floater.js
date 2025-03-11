import { initBasicExample, initDropdownExample, initTooltipExample, initDialogExample } from "../apiExamples/floater.js";

import { AuroFloater } from '../src/auro-floater.js';
import { AuroDrawer } from '../src/auro-drawer.js';
import { AuroDialog } from '../src/auro-dialog.js';

AuroFloater.register();
AuroDrawer.register();
AuroDialog.register();

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    initBasicExample();
    initDropdownExample();
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

