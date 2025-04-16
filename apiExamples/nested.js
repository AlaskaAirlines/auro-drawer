export function initNestedExample() {
  const buttons = [document.querySelector('#openNested'), document.querySelector('#closeNested')];
  const drawer = document.querySelector('#nestedDrawer');

  drawer.triggerElement = buttons[0];
  buttons[1].addEventListener('click', () => {
    drawer.removeAttribute('open');
  });
}
