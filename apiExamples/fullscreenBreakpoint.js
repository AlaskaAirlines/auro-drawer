export function initFullscreenBreakpointExample() {
  const buttons = [
    document.querySelector("#openSmLg"),
    document.querySelector("#closeSmLg"),
  ];
  const drawer = document.querySelector("#smLgDrawer");

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener("click", () => {
    drawer.removeAttribute("open");
  });
}
