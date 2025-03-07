export function initBasicExample() {
  const trigger = document.querySelector('#openBasic');
  const drawer = document.querySelector('#defaultDrawer');
  drawer.triggerElement = trigger;

  const radio = document.querySelector("#basic-placement-radio");
  radio.value = ['right'];
  radio.addEventListener('input', (event) => {
    drawer.setAttribute('placement', event.target.value);
  })
}
export function initDropdownExample() {
  const trigger = document.querySelector('#dropdownTrigger');
  const drawer = document.querySelector('#defaultDropdown');
  drawer.triggerElement = trigger;
}
