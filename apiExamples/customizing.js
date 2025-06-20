export function initCustomizedExample() {
  const buttons = [document.querySelector('#openCustomized'), document.querySelector('#closeCustomized')];
  const drawer = document.querySelector('#customizedDrawer');

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener('click', () => {
    drawer.removeAttribute('open');
  });
}
