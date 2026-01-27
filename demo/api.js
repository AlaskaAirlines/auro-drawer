import { initUnformattedExample } from "../apiExamples/unformatted.js";
import { initBasicExample } from "../apiExamples/basic";
import { initCloseButtonAppearanceExample } from "../apiExamples/close-button-appearance.js";
import { initCustomizedExample } from "../apiExamples/customizing.js";
import { initFullscreenBreakpointExample } from "../apiExamples/fullscreen-breakpoint.js";
import { initModalExample } from "../apiExamples/modal";
import { initNestedExample } from "../apiExamples/nested";
import { initPlacementExample } from "../apiExamples/placement.js";
import { initPopoverAndDropdownExample } from "../apiExamples/popover-and-dropdown.js";
import { initSizeOptionsExample } from "../apiExamples/size-options.js";
import { initAriaLabelSlotExample } from "../apiExamples/aria-label-slot.js";

import "../src/registered.js";

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: recursion counter
  initCount = initCount || 0;

  try {
    initBasicExample();
    initCloseButtonAppearanceExample();
    initFullscreenBreakpointExample();
    initModalExample();
    initNestedExample();
    initPlacementExample();
    initSizeOptionsExample();
    initUnformattedExample();
    initAriaLabelSlotExample();
    initCustomizedExample();
    initPopoverAndDropdownExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
