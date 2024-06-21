<!--
The index.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/index.md`
-->

# Drawer

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./description.md) -->
<!-- The below content is automatically added from ./description.md -->
The `<auro-drawer>` component is an intrusive interactive component, not passive. The component is best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the drawer content.

The component also supports a modal (blocking) state where the user must interact with the content of the component in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.
<!-- AURO-GENERATED-CONTENT:END -->

## auro-drawer use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./useCases.md) -->
<!-- The below content is automatically added from ./useCases.md -->
The `auro-drawer` component should be used in situations where users may:

* Be prompted to take an action before doing anything else or going back
* Be prompted to view content with the option of closing it
<!-- AURO-GENERATED-CONTENT:END -->

## Additional Information

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./readmeAddlInfo.md -->
**Important Notice**: This component no longer lives within the `auro-interruption` repository, as that is now being deprecated. `<auro-drawer>` is now a standalone component and users will be required to install it seperately. See the [Install Page](https://auro.alaskaair.com/components/auro/drawer/install) for instructions on how to install the component.
<!-- AURO-GENERATED-CONTENT:END -->

## The Setup

Triggering the drawer relies on functions being installed. See the following example code that is installed into this demo.

```javascript
function toggleDrawer(drawerID) {
  const drawer = document.querySelector(drawerID);

  if (drawer.hasAttribute('open')) {
    drawer.removeAttribute('open');
  } else {
    drawer.setAttribute('open', true);
  }
}
```

Once the JavaScript is added to the scope of the experience, the next part is adding a trigger. In this example, the button component will toggle a drawer with the ID of `#demo1`.

``` html
<auro-button onClick="toggleDrawer('#demo1')">Open Drawer</auro-button>
```

## The Structure

The structure of the drawer itself consists of three slots. The `header`, `content` and `footer` slots. See the scaffolding example below for adding content to the component.

``` html
  <auro-drawer id="[unique ID]">
    <span slot="header">[header content]</span>
    <span slot="content">
      [body content]
    </span>
    <span slot="footer">
      [footer content]
    </span>
  </auro-drawer>
```

It should be noted that the footer slot is reserved for the placement of action buttons.

## Example(s)

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/basic.html -->
  <div>
    <auro-button id="openBasic">Open default drawer</auro-button>
  </div>
  <auro-drawer id="defaultDrawer">
    <span slot="header">Default Drawer</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed. Tortor at risus viverra adipiscing at in tellus integer feugiat. Dictum sit amet justo donec enim diam vulputate. Ullamcorper a lacus vestibulum sed arcu non. Sed cras ornare arcu dui vivamus arcu felis. Morbi tristique senectus et netus et. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Eleifend mi in nulla posuere sollicitudin aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
        <p>Tristique senectus et netus et. Vel pharetra vel turpis nunc eget. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Aliquet enim tortor at auctor urna nunc id. Ut consequat semper viverra nam libero justo. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Et leo duis ut diam. In dictum non consectetur a erat nam. Elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper feugiat nibh sed pulvinar proin gravida. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. In cursus turpis massa tincidunt dui ut ornare lectus sit. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.</p>
        <p>Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Dignissim diam quis enim lobortis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Integer eget aliquet nibh praesent. Ornare massa eget egestas purus viverra accumsan in nisl. Est ultricies integer quis auctor elit sed vulputate mi sit. Feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis. Sagittis eu volutpat odio facilisis mauris.</p>
        <p>Magnis dis parturient montes nascetur ridiculus mus. Faucibus vitae aliquet nec ullamcorper sit amet risus. In eu mi bibendum neque egestas congue quisque egestas. Nibh praesent tristique magna sit amet purus gravida quis blandit. Tincidunt id aliquet risus feugiat in ante metus dictum at. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Molestie at elementum eu facilisis sed odio. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Egestas pretium aenean pharetra magna. Venenatis urna cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quis viverra nibh cras pulvinar mattis nunc. A scelerisque purus semper eget duis at tellus at urna. Cursus turpis massa tincidunt dui ut. Purus viverra accumsan in nisl nisi scelerisque eu. Et magnis dis parturient montes nascetur ridiculus mus.</p>
        <p>Id eu nisl nunc mi. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Platea dictumst quisque sagittis purus sit amet volutpat. Egestas congue quisque egestas diam in arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ornare suspendisse sed nisi lacus sed. Ut ornare lectus sit amet est placerat in egestas erat. Tortor aliquam nulla facilisi cras fermentum odio eu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id. Varius quam quisque id diam vel. Odio ut enim blandit volutpat maecenas volutpat. Urna cursus eget nunc scelerisque viverra mauris in aliquam.</p>
        <p>Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisis sed odio morbi quis commodo odio. Cras adipiscing enim eu turpis egestas pretium. Dolor purus non enim praesent. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo sed. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. A pellentesque sit amet porttitor eget. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Consequat semper viverra nam libero. Vitae purus faucibus ornare suspendisse. Eget nunc lobortis mattis aliquam. Nibh nisl condimentum id venenatis a condimentum vitae. Eget egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Amet nisl purus in mollis nunc sed id semper risus. Et tortor consequat id porta nibh. Proin fermentum leo vel orci porta.</p>
        <p>Duis ut diam quam nulla porttitor massa. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Enim eu turpis egestas pretium aenean pharetra magna. Commodo elit at imperdiet dui accumsan sit amet nulla. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris augue neque gravida in. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Neque viverra justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Mollis nunc sed id semper risus in hendrerit. Feugiat scelerisque varius morbi enim nunc. Pretium lectus quam id leo in vitae turpis massa sed. Ornare arcu odio ut sem nulla pharetra. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sit amet risus nullam eget felis eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Malesuada fames ac turpis egestas sed tempus.</p>
        <p>Fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat nisl vel pretium lectus quam id leo in vitae. Lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id. Fermentum leo vel orci porta. Sed augue lacus viverra vitae congue. Consequat semper viverra nam libero. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Feugiat vivamus at augue eget arcu dictum varius duis. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lacus vestibulum sed arcu non odio euismod. Pulvinar sapien et ligula ullamcorper malesuada. Ut ornare lectus sit amet est placerat in egestas erat. Pharetra massa massa ultricies mi. Interdum velit euismod in pellentesque.</p>
        <p>Duis at consectetur lorem donec. Sed vulputate mi sit amet mauris commodo quis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Eget arcu dictum varius duis. Nunc consequat interdum varius sit amet mattis. Pulvinar mattis nunc sed blandit. Sem viverra aliquet eget sit amet tellus. Vel turpis nunc eget lorem dolor sed. Pretium viverra suspendisse potenti nullam. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Odio euismod lacinia at quis risus sed vulputate odio. Imperdiet proin fermentum leo vel orci porta non pulvinar. Leo duis ut diam quam nulla porttitor massa id neque. Augue lacus viverra vitae congue eu consequat. Id cursus metus aliquam eleifend. Montes nascetur ridiculus mus mauris.</p>
        <p>Volutpat blandit aliquam etiam erat velit scelerisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lectus sit amet est placerat in egestas erat imperdiet sed. Platea dictumst quisque sagittis purus sit. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla pharetra diam sit amet nisl suscipit adipiscing. Id aliquet lectus proin nibh nisl condimentum id venenatis. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Duis at consectetur lorem donec massa sapien faucibus et molestie.</p>
    </div>
    <div slot="footer">
      <auro-button secondary id="closeBasic">Close</auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/basic.html -->

```html
<div>
  <auro-button id="openBasic">Open default drawer</auro-button>
</div>
<auro-drawer id="defaultDrawer">
  <span slot="header">Default Drawer</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed. Tortor at risus viverra adipiscing at in tellus integer feugiat. Dictum sit amet justo donec enim diam vulputate. Ullamcorper a lacus vestibulum sed arcu non. Sed cras ornare arcu dui vivamus arcu felis. Morbi tristique senectus et netus et. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Eleifend mi in nulla posuere sollicitudin aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim.</p>
      <p>Tristique senectus et netus et. Vel pharetra vel turpis nunc eget. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Aliquet enim tortor at auctor urna nunc id. Ut consequat semper viverra nam libero justo. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Et leo duis ut diam. In dictum non consectetur a erat nam. Elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper feugiat nibh sed pulvinar proin gravida. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. In cursus turpis massa tincidunt dui ut ornare lectus sit. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.</p>
      <p>Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Dignissim diam quis enim lobortis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Integer eget aliquet nibh praesent. Ornare massa eget egestas purus viverra accumsan in nisl. Est ultricies integer quis auctor elit sed vulputate mi sit. Feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis. Sagittis eu volutpat odio facilisis mauris.</p>
      <p>Magnis dis parturient montes nascetur ridiculus mus. Faucibus vitae aliquet nec ullamcorper sit amet risus. In eu mi bibendum neque egestas congue quisque egestas. Nibh praesent tristique magna sit amet purus gravida quis blandit. Tincidunt id aliquet risus feugiat in ante metus dictum at. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Molestie at elementum eu facilisis sed odio. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Egestas pretium aenean pharetra magna. Venenatis urna cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quis viverra nibh cras pulvinar mattis nunc. A scelerisque purus semper eget duis at tellus at urna. Cursus turpis massa tincidunt dui ut. Purus viverra accumsan in nisl nisi scelerisque eu. Et magnis dis parturient montes nascetur ridiculus mus.</p>
      <p>Id eu nisl nunc mi. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Platea dictumst quisque sagittis purus sit amet volutpat. Egestas congue quisque egestas diam in arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ornare suspendisse sed nisi lacus sed. Ut ornare lectus sit amet est placerat in egestas erat. Tortor aliquam nulla facilisi cras fermentum odio eu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id. Varius quam quisque id diam vel. Odio ut enim blandit volutpat maecenas volutpat. Urna cursus eget nunc scelerisque viverra mauris in aliquam.</p>
      <p>Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisis sed odio morbi quis commodo odio. Cras adipiscing enim eu turpis egestas pretium. Dolor purus non enim praesent. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo sed. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. A pellentesque sit amet porttitor eget. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Consequat semper viverra nam libero. Vitae purus faucibus ornare suspendisse. Eget nunc lobortis mattis aliquam. Nibh nisl condimentum id venenatis a condimentum vitae. Eget egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Amet nisl purus in mollis nunc sed id semper risus. Et tortor consequat id porta nibh. Proin fermentum leo vel orci porta.</p>
      <p>Duis ut diam quam nulla porttitor massa. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Enim eu turpis egestas pretium aenean pharetra magna. Commodo elit at imperdiet dui accumsan sit amet nulla. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris augue neque gravida in. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Neque viverra justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Mollis nunc sed id semper risus in hendrerit. Feugiat scelerisque varius morbi enim nunc. Pretium lectus quam id leo in vitae turpis massa sed. Ornare arcu odio ut sem nulla pharetra. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sit amet risus nullam eget felis eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Malesuada fames ac turpis egestas sed tempus.</p>
      <p>Fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat nisl vel pretium lectus quam id leo in vitae. Lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id. Fermentum leo vel orci porta. Sed augue lacus viverra vitae congue. Consequat semper viverra nam libero. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Feugiat vivamus at augue eget arcu dictum varius duis. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lacus vestibulum sed arcu non odio euismod. Pulvinar sapien et ligula ullamcorper malesuada. Ut ornare lectus sit amet est placerat in egestas erat. Pharetra massa massa ultricies mi. Interdum velit euismod in pellentesque.</p>
      <p>Duis at consectetur lorem donec. Sed vulputate mi sit amet mauris commodo quis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Eget arcu dictum varius duis. Nunc consequat interdum varius sit amet mattis. Pulvinar mattis nunc sed blandit. Sem viverra aliquet eget sit amet tellus. Vel turpis nunc eget lorem dolor sed. Pretium viverra suspendisse potenti nullam. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Odio euismod lacinia at quis risus sed vulputate odio. Imperdiet proin fermentum leo vel orci porta non pulvinar. Leo duis ut diam quam nulla porttitor massa id neque. Augue lacus viverra vitae congue eu consequat. Id cursus metus aliquam eleifend. Montes nascetur ridiculus mus mauris.</p>
      <p>Volutpat blandit aliquam etiam erat velit scelerisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lectus sit amet est placerat in egestas erat imperdiet sed. Platea dictumst quisque sagittis purus sit. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla pharetra diam sit amet nisl suscipit adipiscing. Id aliquet lectus proin nibh nisl condimentum id venenatis. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Duis at consectetur lorem donec massa sapien faucibus et molestie.</p>
  </div>
  <div slot="footer">
    <auro-button secondary id="closeBasic">Close</auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
Having a closing statement about your example helps to really complete the thought with your reader.

## Recommended Use and Version Control

There are two important parts of every Auro component. The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">class</a> and the custom clement. The class is exported and then used as part of defining the Web Component. When importing this component as described in the <a href="#install">install</a> section, the class is imported and the `auro-drawer` custom element is defined automatically.

To protect from versioning conflicts with other instances of the component being loaded, it is recommended to use our `registerComponent(name)` method and pass in a unique name.

```js
import './node_modules/@aurodesignsystem/auro-drawer';
registerComponent('custom-drawer');
```

This will create a new custom element that you can use in your HTML that will function identically to the `auro-drawer` element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/custom.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/custom.html -->
  <div>
    <auro-button id="openCustom">Open default drawer</auro-button>
  </div>
  <custom-drawer id="customDrawer">
    <span slot="header">Default Drawer</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <li>Camembert de normandie stinking bishop bavarian bergkase</li>
      </ul>
    </div>
    <div slot="footer">
      <auro-button secondary id="closeCustom">Close</auro-button>
    </div>
  </custom-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/custom.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/custom.html -->

```html
<div>
  <auro-button id="openCustom">Open default drawer</auro-button>
</div>
<custom-drawer id="customDrawer">
  <span slot="header">Default Drawer</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <li>Camembert de normandie stinking bishop bavarian bergkase</li>
    </ul>
  </div>
  <div slot="footer">
    <auro-button secondary id="closeCustom">Close</auro-button>
  </div>
</custom-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
