import { initBasicExample, initDropdownExample } from "../apiExamples/floater.js";

import { AuroFloater } from '../src/auro-floater.js';
AuroFloater.register();

export function initExamples(initCount) {
  initCount = initCount || 0;

  try {
    initBasicExample();
    initDropdownExample();
  } catch (err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}

