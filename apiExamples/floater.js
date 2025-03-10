export function initBasicExample() {
  const trigger = document.querySelector('#openBasic');
  const drawer = document.querySelector('#defaultDrawer');
  drawer.triggerElement = trigger;

  const radio = document.querySelector("#basic-placement-radio");
  radio.value = ['right'];
  radio.addEventListener('input', (event) => {
    drawer.setAttribute('placement', event.target.value);
  });

  const closer = document.querySelector('#closeBasic');
  closer.addEventListener('click', () => {
    drawer.removeAttribute('open');
  })

}
export function initDropdownExample() {
  const trigger = document.querySelector('#dropdownTrigger');
  const drawer = document.querySelector('#defaultDropdown');
  drawer.triggerElement = trigger;

  const closer = document.querySelector('#closeDropdown');
  closer?.addEventListener('click', () => {
    drawer.removeAttribute('open');
  })
}

export function initTooltipExample() {
  const trigger = document.querySelector('#tooltipTrigger');
  const tooltip = document.querySelector("#tooltipExample");
  tooltip.triggerElement = trigger;


  const radio = document.querySelector("#tooltip-placement-radio");
  radio.value = ['right'];
  radio.addEventListener('input', (event) => {
    tooltip.setAttribute('placement', event.target.value);
  });

}
