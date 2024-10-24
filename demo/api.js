import { initBasicExample } from "../apiExamples/basic";
import { initAccessibilityExample } from "../apiExamples/accessibility";
import { initDecoupledExample } from "../apiExamples/decoupled";
import { initEditCloseButtonExample } from "../apiExamples/editCloseButton";
import { initModalExample } from "../apiExamples/modal";
import { initPopoverAndDropdownExample } from "../apiExamples/popoverAndDropdown";
import { initSizeOptionsExample } from "../apiExamples/sizeOptions";
import { initSlideOptionsExample } from "../apiExamples/slideOptions";
import '../index.js';

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    initBasicExample();
    initAccessibilityExample();
    initDecoupledExample();
    initEditCloseButtonExample();
    initModalExample();
    initPopoverAndDropdownExample();
    initSizeOptionsExample();
    initSlideOptionsExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

