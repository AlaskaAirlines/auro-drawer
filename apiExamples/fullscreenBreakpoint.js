export function initFullscreenBreakpointExample() {
  const smLgButtons = [document.querySelector('#openSmLg'), document.querySelector('#closeSmLg')];
  const smLgDrawer = document.querySelector('#smLgDrawer');

  smLgButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (smLgDrawer.hasAttribute('open')) {
        smLgDrawer.removeAttribute('open');
      } else {
        smLgDrawer.setAttribute('open', true);
      }
    });
  });
}
