export function initPopoverAndDropdownExample() {
  const buttons = [document.querySelector('#openPopAndDrop'), document.querySelector('#closePopAndDrop')];
  const drawer = document.querySelector('#popover-drawer');

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
