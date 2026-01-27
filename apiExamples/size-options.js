export function initSizeOptionsExample() {
  const defaultButtons = [
    document.querySelector("#openDefaultSize"),
    document.querySelector("#closeDefaultSize"),
  ];
  const defaultDrawer = document.querySelector("#defaultSizeDrawer");

  const mediumButtons = [
    document.querySelector("#openMediumSize"),
    document.querySelector("#closeMediumSize"),
  ];
  const mediumDrawer = document.querySelector("#mediumSizeDrawer");

  const smallButtons = [
    document.querySelector("#openSmallSize"),
    document.querySelector("#closeSmallSize"),
  ];
  const smallDrawer = document.querySelector("#smallSizeDrawer");

  defaultButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (defaultDrawer.hasAttribute("open")) {
        defaultDrawer.removeAttribute("open");
      } else {
        defaultDrawer.setAttribute("open", true);
      }
    });
  });

  mediumButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (mediumDrawer.hasAttribute("open")) {
        mediumDrawer.removeAttribute("open");
      } else {
        mediumDrawer.setAttribute("open", true);
      }
    });
  });

  smallButtons.forEach((button) => {
    button.addEventListener("click", () => {
      if (smallDrawer.hasAttribute("open")) {
        smallDrawer.removeAttribute("open");
      } else {
        smallDrawer.setAttribute("open", true);
      }
    });
  });
}
