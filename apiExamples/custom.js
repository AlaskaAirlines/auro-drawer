export function initCustomExample() {
  const buttons = [document.querySelector('#openCustom'), document.querySelector('#closeCustom')];
  const drawer = document.querySelector('#defaultDrawer');

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      if (drawer.hasAttribute('open')) {
        drawer.removeAttribute('open');
      } else {
        drawer.setAttribute('open', true);
      }
    });
  });
}
