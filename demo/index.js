import { toggleDrawer } from "../apiExamples/toggleDrawer";

export function initDrawerIndexExamples(initCount) {
  initCount = initCount || 0;

  try {
    toggleDrawer();
  } catch (error) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initDrawerIndexExamples(initCount + 1);
      }, 100);
    }
  }
}
