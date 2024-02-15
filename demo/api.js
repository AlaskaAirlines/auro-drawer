import { toggleDrawer } from "../apiExamples/toggleDrawer";

export function initDrawerApiExamples(initCount) {
  initCount = initCount || 0;

  try {
    toggleDrawer();
  } catch (error) {
    if (initCount <= 20) {
      // setTimeout handles issue where content is sometimes loaded after the functions get called
      setTimeout(() => {
        initDrawerApiExamples(initCount + 1);
      }, 100);
    }
  }
}
