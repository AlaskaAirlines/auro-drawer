export function initAriaLabelSlotExample() {
  const buttons = [
    document.querySelector("#openAriaLabelSlotDrawer"),
    document.querySelector("#closeAriaLabelSlotDrawer"),
  ];
  const drawer = document.querySelector("#ariaLabelSlotDrawer");

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener("click", () => {
    drawer.removeAttribute("open");
  });
}
