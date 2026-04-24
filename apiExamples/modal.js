export function initModalExample() {
  if (initModalExample._initialized) {
    return;
  }
  const defaultButtons = [
    document.querySelector("#openDefaultModal"),
    document.querySelector("#closeDefaultModal"),
  ];
  const defaultDrawer = document.querySelector("#defaultModalDrawer");

  const mediumButtons = [
    document.querySelector("#openMediumModal"),
    document.querySelector("#closeMediumModal"),
  ];
  const mediumDrawer = document.querySelector("#mediumModalDrawer");

  const smallButtons = [
    document.querySelector("#openSmallModal"),
    document.querySelector("#closeSmallModal"),
  ];
  const smallDrawer = document.querySelector("#smallModalDrawer");

  if (
    !defaultButtons[0] ||
    !defaultButtons[1] ||
    !defaultDrawer ||
    !mediumButtons[0] ||
    !mediumButtons[1] ||
    !mediumDrawer ||
    !smallButtons[0] ||
    !smallButtons[1] ||
    !smallDrawer
  ) {
    return;
  }

  defaultDrawer.triggerElement = defaultButtons[0];
  defaultButtons[1].addEventListener("click", () => {
    defaultDrawer.removeAttribute("open");
  });

  mediumDrawer.triggerElement = mediumButtons[0];
  mediumButtons[1].addEventListener("click", () => {
    mediumDrawer.removeAttribute("open");
  });

  smallDrawer.triggerElement = smallButtons[0];
  smallButtons[1].addEventListener("click", () => {
    smallDrawer.removeAttribute("open");
  });

  initModalExample._initialized = true;
}
