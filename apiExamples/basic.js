export function initBasicExample() {
  const buttons = [
    document.querySelector("#openBasic"),
    document.querySelector("#closeBasic"),
  ];
  const drawer = document.querySelector("#defaultDrawer");

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener("click", () => {
    drawer.removeAttribute("open");
  });
}
