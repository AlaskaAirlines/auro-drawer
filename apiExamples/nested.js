export function initNestedExample() {
  const buttons = [document.querySelector('#openNested'), document.querySelector('#closeNested')];
  const drawer = document.querySelector('#nestedDrawer');

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
