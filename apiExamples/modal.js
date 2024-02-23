export function initModalExample() {
  const defaultButtons = [document.querySelector('#openDefaultModal'), document.querySelector('#closeDefaultModal')];
  const defaultDrawer = document.querySelector('#defaultModalDrawer');

  const mediumButtons = [document.querySelector('#openMediumModal'), document.querySelector('#closeMediumModal')];
  const mediumDrawer = document.querySelector('#mediumModalDrawer');

  const smallButtons = [document.querySelector('#openSmallModal'), document.querySelector('#closeSmallModal')];
  const smallDrawer = document.querySelector('#smallModalDrawer');

  defaultButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (defaultDrawer.hasAttribute('open')) {
        defaultDrawer.removeAttribute('open');
      } else {
        defaultDrawer.setAttribute('open', true);
      }
    });
  });

  mediumButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (mediumDrawer.hasAttribute('open')) {
        mediumDrawer.removeAttribute('open');
      } else {
        mediumDrawer.setAttribute('open', true);
      }
    });
  });

  smallButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (smallDrawer.hasAttribute('open')) {
        smallDrawer.removeAttribute('open');
      } else {
        smallDrawer.setAttribute('open', true);
      }
    });
  });
}
