export function initCloseButtonAppearanceExample() {
  const buttons = [
    document.querySelector("#openInverseCloseButtonAppearance"),
    document.querySelector("#closeInverseCloseButtonAppearance"),
  ];
  const drawer = document.querySelector("#inverseCloseButtonAppearance");

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener("click", () => {
    drawer.removeAttribute("open");
  });
}
