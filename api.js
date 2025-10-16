import { initAccessibilityExample } from "../apiExamples/accessibility";
import { initBasicExample } from "../apiExamples/basic";
import { initCloseButtonAppearanceExample } from "../apiExamples/closeButtonAppearance.js";
import { initCustomizedExample } from "../apiExamples/customizing.js";
import { initFullscreenBreakpointExample } from "../apiExamples/fullscreenBreakpoint";
import { initModalExample } from "../apiExamples/modal";
import { initNestedExample } from "../apiExamples/nested";
import { initPlacementExample } from "../apiExamples/placement.js";
import { initPopoverAndDropdownExample } from "../apiExamples/popoverAndDropdown";
import { initSizeOptionsExample } from "../apiExamples/sizeOptions";
import { initAriaLabelSlotExample } from "../apiExamples/ariaLabelSlot.js";

import "../src/registered.js";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: recursion counter
  initCount = initCount || 0;

  try {
    initBasicExample();
    initAccessibilityExample();
    initModalExample();
    initNestedExample();
    initPopoverAndDropdownExample();
    initSizeOptionsExample();
    initPlacementExample();
    initFullscreenBreakpointExample();
    initCustomizedExample();
    initAriaLabelSlotExample();
    initCloseButtonAppearanceExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
