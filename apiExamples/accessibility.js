export function initAccessibilityExample() {
  const button = document.querySelector("#openAccessibility");
  const drawer = document.querySelector("#unformattedMdDrawer");

  button.addEventListener("click", () => {
    if (drawer.hasAttribute("open")) {
      drawer.removeAttribute("open");
    } else {
      drawer.setAttribute("open", true);
    }
  });
}
