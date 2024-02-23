export function initDecoupledExample() {
  const smLgButtons = [document.querySelector('#openSmLg'), document.querySelector('#closeSmLg')];
  const smLgDrawer = document.querySelector('#smLgDrawer');

  const mdLgButtons = [document.querySelector('#openMdLg'), document.querySelector('#closeMdLg')];
  const mdLgDrawer = document.querySelector('#mdLgDrawer');

  smLgButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (smLgDrawer.hasAttribute('open')) {
        smLgDrawer.removeAttribute('open');
      } else {
        smLgDrawer.setAttribute('open', true);
      }
    });
  });

  mdLgButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (mdLgDrawer.hasAttribute('open')) {
        mdLgDrawer.removeAttribute('open');
      } else {
        mdLgDrawer.setAttribute('open', true);
      }
    });
  });
}
