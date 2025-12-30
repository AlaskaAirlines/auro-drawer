export function initUnformattedExample() {
  const buttons = [
    document.querySelector("#openUnformatted"),
    document.querySelector("#closeUnformatted"),
  ];
  const drawer = document.querySelector("#unformattedDrawer");

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener("click", () => {
    drawer.removeAttribute("open");
  });
}
