export function initPopoverAndDropdownExample() {
  const buttons = [
    document.querySelector("#openPopAndDrop"),
    document.querySelector("#closePopAndDrop"),
  ];
  const drawer = document.querySelector("#popover-drawer");

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener("click", () => {
    drawer.removeAttribute("open");
  });
}
