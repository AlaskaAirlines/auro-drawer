export function initCustomExample() {
  const buttons = [document.querySelector('#openCustom'), document.querySelector('#closeCustom')];
  const drawer = document.querySelector('#customDrawer');

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener('click', () => {
    drawer.removeAttribute('open');
  });
}
