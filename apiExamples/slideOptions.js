export function initSlideOptionsExample() {
  const defaultButtons = [document.querySelector('#openDefaultSlide'), document.querySelector('#closeDefaultSlide')];
  const defaultDrawer = document.querySelector('#defaultSlideDrawer');

  const leftButtons = [document.querySelector('#openLeftSlide'), document.querySelector('#closeLeftSlide')];
  const leftDrawer = document.querySelector('#leftSlideDrawer');

  defaultButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (defaultDrawer.hasAttribute('open')) {
        defaultDrawer.removeAttribute('open');
      } else {
        defaultDrawer.setAttribute('open', true);
      }
    });
  });

  leftButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (leftDrawer.hasAttribute('open')) {
        leftDrawer.removeAttribute('open');
      } else {
        leftDrawer.setAttribute('open', true);
      }
    });
  });
}
