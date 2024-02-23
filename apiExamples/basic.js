export function initBasicExample() {
  const buttons = [document.querySelector('#openBasic'), document.querySelector('#closeBasic')];
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
