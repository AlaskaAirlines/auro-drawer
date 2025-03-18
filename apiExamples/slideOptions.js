export function initSlideOptionsExample() {
  const defaultButtons = [document.querySelector('#openDefaultSlide'), document.querySelector('#closeDefaultSlide')];
  const defaultDrawer = document.querySelector('#defaultSlideDrawer');

  defaultButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (defaultDrawer.hasAttribute('open')) {
        defaultDrawer.removeAttribute('open');
      } else {
        defaultDrawer.setAttribute('open', true);
      }
    });
  });

  const leftButtons = [document.querySelector('#openLeftSlide'), document.querySelector('#closeLeftSlide')];
  const leftDrawer = document.querySelector('#leftSlideDrawer');

  leftButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (leftDrawer.hasAttribute('open')) {
        leftDrawer.removeAttribute('open');
      } else {
        leftDrawer.setAttribute('open', true);
      }
    });
  });

  const topButtons = [document.querySelector('#openTopSlide'), document.querySelector('#closeTopSlide')];
  const topDrawer = document.querySelector('#topSlideDrawer');

  topButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (topDrawer.hasAttribute('open')) {
        topDrawer.removeAttribute('open');
      } else {
        topDrawer.setAttribute('open', true);
      }
    });
  });

  const bottomButtons = [document.querySelector('#openBottomSlide'), document.querySelector('#closeBottomSlide')];
  const bottomDrawer = document.querySelector('#bottomSlideDrawer');

  bottomButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (bottomDrawer.hasAttribute('open')) {
        bottomDrawer.removeAttribute('open');
      } else {
        bottomDrawer.setAttribute('open', true);
      }
    });
  });
}
