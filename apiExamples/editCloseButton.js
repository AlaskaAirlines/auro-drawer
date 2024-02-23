export function initEditCloseButtonExample() {
  const button = document.querySelector('#openEditDrawer');
  const drawer = document.querySelector('#unformattedCustomMdDrawer');

  button.addEventListener('click', () => {
    if (drawer.hasAttribute('open')) {
      drawer.removeAttribute('open');
    } else {
      drawer.setAttribute('open', true);
    }
  });
}
