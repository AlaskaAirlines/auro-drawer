<!--
The README.md file is a compiled document. No edits should be made directly to this file.

README.md is created by running `npm run build:docs`.

This file is generated based on a template fetched from
`https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/README.md`
and copied to `./componentDocs/README.md` each time the the docs are compiled.

The following sections are editable by making changes to the following files:

| SECTION                | DESCRIPTION                                       | FILE LOCATION                       |
|------------------------|---------------------------------------------------|-------------------------------------|
| Description            | Description of the component                      | `./docs/partials/description.md`    |
| Use Cases              | Examples for when to use this component           | `./docs/partials/useCases.md`       |
| Additional Information | For use to add any component specific information | `./docs/partials/readmeAddlInfo.md` |
| Component Example Code | HTML sample code of the components use            | `./apiExamples/basic.html`          |
-->

# Drawer

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
The `<auro-drawer>` component is an intrusive interactive component, not passive. The component is best used when there is a requirement the user be made aware of the content being shown, moving focus from the main content to the drawer content.

The component also supports a modal (blocking) state where the user must interact with the content of the component in order to continue. Passive dismissal of the content is not allowed. Users of this state must add a trigger for the user to move beyond this content.
<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/readmeAddlInfo.md) -->
<!-- The below content is automatically added from ./../docs/partials/readmeAddlInfo.md -->
**Important Notice**: This component no longer lives within the `auro-interruption` repository, as that is now being deprecated. `<auro-drawer>` is now a standalone component and users will be required to install it seperately. See the [Install Page](https://auro.alaskaair.com/components/auro/drawer/install) for instructions on how to install the component.
<!-- AURO-GENERATED-CONTENT:END -->

## UI development browser support

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/browserSupport.md) -->
For the most up to date information on [UI development browser support](https://auro.alaskaair.com/support/browsersSupport)

<!-- AURO-GENERATED-CONTENT:END -->

## Install

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentInstall_esm.md) -->
[![Build Status](https://img.shields.io/github/actions/workflow/status/AlaskaAirlines/auro-drawer/testPublish.yml?style=for-the-badge)](https://github.com/AlaskaAirlines/auro-drawer/actions/workflows/testPublish.yml)
[![See it on NPM!](https://img.shields.io/npm/v/@aurodesignsystem/auro-drawer?style=for-the-badge&color=orange)](https://www.npmjs.com/package/@aurodesignsystem/auro-drawer)
[![License](https://img.shields.io/npm/l/@aurodesignsystem/auro-drawer?color=blue&style=for-the-badge)](https://www.apache.org/licenses/LICENSE-2.0)
![ESM supported](https://img.shields.io/badge/ESM-compatible-FFE900?style=for-the-badge)

```shell
$ npm i @aurodesignsystem/auro-drawer
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

<!-- AURO-GENERATED-CONTENT:END -->

### Design Token CSS Custom Property dependency

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/designTokens.md) -->
The use of any Auro custom element has a dependency on the [Auro Design Tokens](https://auro.alaskaair.com/getting-started/developers/design-tokens).

<!-- AURO-GENERATED-CONTENT:END -->

### Define dependency in project component

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentImportDescription.md) -->
Defining the component dependency within each component that is using the `<auro-drawer>` component.

<!-- AURO-GENERATED-CONTENT:END -->
<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/componentImport.md) -->

```js
import "@aurodesignsystem/auro-drawer";
```

<!-- AURO-GENERATED-CONTENT:END -->
**Reference component in HTML**
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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

## Install bundled assets from CDN

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/bundleInstallDescription.md) -->
In cases where the project is not able to process JS assets, there are pre-processed assets available for use. See -- `auro-drawer__bundled.js` for modern browsers. Legacy browsers such as IE11 are no longer supported.

**WARNING!** When installing into your application environment, DO NOT use `@latest` for the requested version. Risks include unknown MAJOR version releases and instant adoption of any new features and possible bugs without developer knowledge. The `@latest` wildcard should NEVER be used for production customer-facing applications. You have been warned.

<!-- AURO-GENERATED-CONTENT:END -->

### Bundle example code

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/usage/bundleUseModBrowsers.md) -->

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/design-tokens@4.10.0/dist/tokens/CSSCustomProperties.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@aurodesignsystem/webcorestylesheets@5.1.1/dist/bundled/essentials.css" />
<script src="https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-drawer@1.1.0-beta.2/dist/auro-drawer__bundled.js" type="module"></script>
```

<!-- AURO-GENERATED-CONTENT:END -->

## auro-drawer use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
The `auro-drawer` component should be used in situations where users may:

* Be prompted to take an action before doing anything else or going back
* Be prompted to view content with the option of closing it
<!-- AURO-GENERATED-CONTENT:END -->

## API Code Examples

### Default auro-drawer

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

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

## Development

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/developmentDescription.md) -->
In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://auro.alaskaair.com/contributing) for this project. Please make sure to **pay special attention** to the **conventional commits** section of the document.

<!-- AURO-GENERATED-CONTENT:END -->

### Start development environment

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/localhost.md) -->
Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open a shell session to run the **dev server**.

```shell
$ npm run dev
```

Open [localhost:8000](http://localhost:8000/)

If running separate sessions is preferred, please run the following commands in individual terminal shells.

```shell
$ npm run build:watch

$ npm run serve
```

<!-- AURO-GENERATED-CONTENT:END -->

### API generation

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/api.md) -->
The custom element API file is generated in the build and committed back to the repo with a version change. If the API doc has changed without a version change, author's are to run `npm run build:api` to generate the doc and commit to version control.

<!-- AURO-GENERATED-CONTENT:END -->

### Testing

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/testing.md) -->
Automated tests are required for every Auro component. See `.\test\auro-drawer.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://auro.alaskaair.com/support/tests) for more details.

<!-- AURO-GENERATED-CONTENT:END -->

### Bundled assets

<!-- AURO-GENERATED-CONTENT:START (REMOTE:url=https://raw.githubusercontent.com/AlaskaAirlines/WC-Generator/master/componentDocs/partials/development/bundles.md) -->
Bundled assets are only generated in the remote and not merged back to this repo. To review and/or test a bundled asset locally, run `$ npm run bundler` to generate assets.

<!-- AURO-GENERATED-CONTENT:END -->
