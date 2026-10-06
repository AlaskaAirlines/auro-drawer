import { initBasicExample } from "../apiExamples/basic";
import { initCustomExample } from "../apiExamples/custom";
import { AuroDrawer } from "../src/index";

AuroDrawer.register();
AuroDrawer.register("custom-drawer");

export function initExamples(initCount) {
  // biome-ignore lint/style/noParameterAssign: recursion counter
  initCount = initCount || 0;

  try {
    initBasicExample();
    initCustomExample();
  } catch (_err) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initExamples(initCount + 1);
      }, 100);
    }
  }
}
