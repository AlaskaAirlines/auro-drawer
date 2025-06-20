import { initBasicExample } from "../apiExamples/basic";
import { initAccessibilityExample } from "../apiExamples/accessibility";
import { initFullscreenBreakpointExample } from "../apiExamples/fullscreenBreakpoint";
import { initModalExample } from "../apiExamples/modal";
import { initNestedExample } from '../apiExamples/nested';
import { initPopoverAndDropdownExample } from "../apiExamples/popoverAndDropdown";
import { initSizeOptionsExample } from "../apiExamples/sizeOptions";
import { initPlacementExample } from "../apiExamples/placement.js";
import { initCustomizedExample } from "../apiExamples/customizing.js";
import '../index.js';

export function initExamples(initCount) {
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
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

