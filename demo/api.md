<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-drawer

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [left](#left)    | `Boolean` | Sets drawer box to open from the left            |
| [md](#md)      | `Boolean` | Sets drawer box to medium style. Adding both md and lg will set the drawer to md for desktop and lg for mobile. |
| [sm](#sm)      | `Boolean` | Sets drawer box to small style. Adding both sm and lg will set the drawer to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Default | Description                                      |
|------------------|---------------|---------------|---------|--------------------------------------------------|
| [modal](#modal)          | `modal`       | `Boolean`     | false   | Modal drawer restricts the user to take an action (no default close actions) |
| [onDark](#onDark)         | `onDark`      | `Boolean`     |         | Sets close icon to white for dark backgrounds    |
| [open](#open)           | `open`        | `Boolean`     |         | Sets state of drawer to open                     |
| [triggerElement](#triggerElement) |               | `HTMLElement` |         | The element to focus when the drawer is closed. If not set, defaults to the value of document.activeElement when the drawer is opened. |
| [unformatted](#unformatted)    | `unformatted` | `Boolean`     | false   | Unformatted drawer window, edge-to-edge fill for content |

## Events

| Event    | Description                            |
|----------|----------------------------------------|
| [toggle](#toggle) | Event fires when the element is closed |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| [content](#content) | Injects content into the body of the modal |
| [footer](#footer)  | Used for action options, e.g. buttons      |
| [header](#header)  | Text to display as the header of the modal |

## CSS Shadow Parts

| Part             | Description                                      |
|------------------|--------------------------------------------------|
| `close-button`   | adjust position of the close X icon in the drawer window |
| [drawer](#drawer)         | apply CSS to the entire drawer                   |
| `drawer-content` | apply CSS to the content of the drawer           |
| `drawer-footer`  | apply CSS to the footer of the drawer            |
| `drawer-header`  | apply CSS to the header of the drawer            |
| `drawer-overlay` | apply CSS on the overlay of the drawer           |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

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

### Drawer slide-in options (<a name="left"></a>`left`, default)

The auro-drawer supports two different entry options. Using the `left` attribute, the component supports this slide-in mode for both mobile and desktop experiences.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/slideOptions.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/slideOptions.html -->
  <div>
    <auro-button id="openDefaultSlide">Open default drawer</auro-button>
    <auro-button id="openLeftSlide">Open left drawer</auro-button>
  </div>
  <auro-drawer id="defaultSlideDrawer">
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
      <auro-button secondary id="closeDefaultSlide">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="leftSlideDrawer" left>
    <span slot="header">Left Drawer</span>
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
      <auro-button secondary id="closeLeftSlide">Close</auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/slideOptions.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/slideOptions.html -->

```html
<div>
  <auro-button id="openDefaultSlide">Open default drawer</auro-button>
  <auro-button id="openLeftSlide">Open left drawer</auro-button>
</div>
<auro-drawer id="defaultSlideDrawer">
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
    <auro-button secondary id="closeDefaultSlide">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="leftSlideDrawer" left>
  <span slot="header">Left Drawer</span>
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
    <auro-button secondary id="closeLeftSlide">Close</auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Drawer size options (<a name="sm"></a>`sm`, <a name="md"></a>`md`)

The auro-drawer supports three different sizes. A default drawer is equal to the large size drawer. Using the `sm` and `md` attributes, the component supports these sizes for both mobile and desktop.

The size attribute effects the `width` of the desktop drawer. Its `height` is always 100%. On mobile, the `size` attribute effects the `maximum width` the drawer will use of the device screen.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sizeOptions.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/sizeOptions.html -->
  <div>
    <auro-button id="openDefaultSize">Open default drawer</auro-button>
    <auro-button id="openMediumSize">Open medium drawer</auro-button>
    <auro-button id="openSmallSize">Open small drawer</auro-button>
  </div>
  <auro-drawer id="defaultSizeDrawer">
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
      <auro-button secondary id="closeDefaultSize">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="mediumSizeDrawer" md>
    <span slot="header">Medium Drawer</span>
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
      <auro-button secondary id="closeMediumSize">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="smallSizeDrawer" sm>
    <span slot="header">Small Drawer</span>
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
      <auro-button secondary id="closeSmallSize">Close</auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sizeOptions.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/sizeOptions.html -->

```html
<div>
  <auro-button id="openDefaultSize">Open default drawer</auro-button>
  <auro-button id="openMediumSize">Open medium drawer</auro-button>
  <auro-button id="openSmallSize">Open small drawer</auro-button>
</div>
<auro-drawer id="defaultSizeDrawer">
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
    <auro-button secondary id="closeDefaultSize">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="mediumSizeDrawer" md>
  <span slot="header">Medium Drawer</span>
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
    <auro-button secondary id="closeMediumSize">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="smallSizeDrawer" sm>
  <span slot="header">Small Drawer</span>
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
    <auro-button secondary id="closeSmallSize">Close</auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### <a name="modal"></a>`modal`

The auro-drawer supports a modal drawer state that will lock a user into interacting with the `modal` drawer. To activate, use the modal attribute.

When using this state, the modal drawer must include a button action to dismiss the modal drawer as the closing icon will not be available and the user will not be able to click outside the modal drawer to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/modal.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/modal.html -->
  <div>
    <auro-button id="openDefaultModal">Open default modal</auro-button>
    <auro-button id="openMediumModal">Open medium modal</auro-button>
    <auro-button id="openSmallModal">Open small modal</auro-button>
  </div>
  <auro-drawer id="defaultModalDrawer" modal>
    <span slot="header">Default Modal Drawer</span>
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
      <auro-button id="closeDefaultModal">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="mediumModalDrawer" md modal>
    <span slot="header">Medium Drawer</span>
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
      <auro-button id="closeMediumModal">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="smallModalDrawer" sm modal>
    <span slot="header">Small Drawer</span>
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
      <auro-button id="closeSmallModal">I understand
        <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/modal.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/modal.html -->

```html
<div>
  <auro-button id="openDefaultModal">Open default modal</auro-button>
  <auro-button id="openMediumModal">Open medium modal</auro-button>
  <auro-button id="openSmallModal">Open small modal</auro-button>
</div>
<auro-drawer id="defaultModalDrawer" modal>
  <span slot="header">Default Modal Drawer</span>
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
    <auro-button id="closeDefaultModal">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
<auro-drawer id="mediumModalDrawer" md modal>
  <span slot="header">Medium Drawer</span>
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
    <auro-button id="closeMediumModal">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
<auro-drawer id="smallModalDrawer" sm modal>
  <span slot="header">Small Drawer</span>
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
    <auro-button id="closeSmallModal">I understand
      <auro-icon category="interface" name="chevron-right" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Drawer with Decoupled Experiences

For use case where the size of the drawer on desktop should not influence the size of the drawer on mobile, the combination API of `sm lg` and `md lg` can be used.

The use of these combinations will set the first value to the drawer for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/decoupled.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/decoupled.html -->
  <div>
    <auro-button id="openSmLg">Open [sm lg] drawer</auro-button>
    <auro-button id="openMdLg">Open [md lg] drawer</auro-button>
  </div>
  <auro-drawer id="smLgDrawer" sm lg>
    <span slot="header">Small Modal Drawer</span>
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
      <auro-button id="closeSmLg">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="mdLgDrawer" md lg>
    <span slot="header">Medium Modal Drawer</span>
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
      <auro-button id="closeMdLg">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/decoupled.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/decoupled.html -->

```html
<div>
  <auro-button id="openSmLg">Open [sm lg] drawer</auro-button>
  <auro-button id="openMdLg">Open [md lg] drawer</auro-button>
</div>
<auro-drawer id="smLgDrawer" sm lg>
  <span slot="header">Small Modal Drawer</span>
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
    <auro-button id="closeSmLg">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
<auro-drawer id="mdLgDrawer" md lg>
  <span slot="header">Medium Modal Drawer</span>
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
    <auro-button id="closeMdLg">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Drawer with Popover and Dropdown Components

This is a use case where there is a popover and combobox component inside the drawer component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popoverAndDropdown.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/popoverAndDropdown.html -->
  <div>
    <auro-button id="openPopAndDrop">Open drawer with popover</auro-button>
  </div>
  <auro-drawer id="popover-drawer" sm lg>
    <span slot="header">Small Modal Drawer</span>
    <div slot="content">
      <p>
        When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
      </p>
      <p>
        Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
      </p>
      <auro-header level="3" display="500">
        Before checking your bags, remember to:
      </auro-header>
      <auro-popover>
        <div class="content">
          <ul>
            <li>Caerphilly croque monsieur fondue</li>
            <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
            <li>Cheddar cheese and biscuits chalk and cheese</li>
            <li>Camembert de normandie stinking bishop bavarian bergkase</li>
          </ul>
        </div>
        <auro-hyperlink slot="trigger" href="#">Hover on me</auro-hyperlink>
      </auro-popover>
      <auro-combobox>
        <span slot="label">Name</span>
        <auro-menu>
          <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
          <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
          <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
          <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
          <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
          <auro-menuoption static nomatch>No matching option</auro-menuoption>
        </auro-menu>
      </auro-combobox>
    </div>
    <div slot="footer">
      <auro-button id="closePopAndDrop">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popoverAndDropdown.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/popoverAndDropdown.html -->

```html
<div>
  <auro-button id="openPopAndDrop">Open drawer with popover</auro-button>
</div>
<auro-drawer id="popover-drawer" sm lg>
  <span slot="header">Small Modal Drawer</span>
  <div slot="content">
    <p>
      When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
    </p>
    <p>
      Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
    </p>
    <auro-header level="3" display="500">
      Before checking your bags, remember to:
    </auro-header>
    <auro-popover>
      <div class="content">
        <ul>
          <li>Caerphilly croque monsieur fondue</li>
          <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
          <li>Cheddar cheese and biscuits chalk and cheese</li>
          <li>Camembert de normandie stinking bishop bavarian bergkase</li>
        </ul>
      </div>
      <auro-hyperlink slot="trigger" href="#">Hover on me</auro-hyperlink>
    </auro-popover>
    <auro-combobox>
      <span slot="label">Name</span>
      <auro-menu>
        <auro-menuoption value="Apples" id="option-0">Apples</auro-menuoption>
        <auro-menuoption value="Oranges" id="option-1">Oranges</auro-menuoption>
        <auro-menuoption value="Peaches" id="option-2">Peaches</auro-menuoption>
        <auro-menuoption value="Grapes" id="option-3">Grapes</auro-menuoption>
        <auro-menuoption value="Cherries" id="option-4">Cherries</auro-menuoption>
        <auro-menuoption static nomatch>No matching option</auro-menuoption>
      </auro-menu>
    </auro-combobox>
  </div>
  <div slot="footer">
    <auro-button id="closePopAndDrop">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### <a name="unformatted"></a>`unformatted`

For use case where the use of a drawer is to be more freeform, but the experience and base tooling for the drawer are still requested, there is the `unformatted` property.

This property can be used in combination of any other use case of the drawer, but it will render a unformatted drawer window allowing for full customization of content within the scope of the window.

### Responsive padding

Part of the drawer design spec is its responsive padding. To take advantage of this for your content within the scope of the drawer, be sure to use the selector `unformattedWrapper` that can be imported from the package here;

```scss
import '@aurodesignsystem/auro-drawer/dist/style-unformatted.scss'

or

import '@aurodesignsystem/auro-drawer@/dist/style-unformatted.css'
```

### Accessibility

Within the scope of the auro-drawer there is `aria-labelledby="drawer-header"`. To make proper use of this, in an unformatted drawer, the developer is required to add `id="drawer-header"` to the content header within the drawer content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/accessibility.html -->
  <div>
    <auro-button id="openAccessibility">Unformatted Medium Drawer</auro-button>
  </div>
  <auro-drawer id="unformattedMdDrawer" unformatted md lg ondark>
    <span slot="content">
      <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
      <div class="unformattedWrapper">
        <h1 id="drawer-header">This is a header</h1>
        These are words that are slotted into the scope of the custom element.
      </div>
    </span>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/accessibility.html -->

```html
<div>
  <auro-button id="openAccessibility">Unformatted Medium Drawer</auro-button>
</div>
<auro-drawer id="unformattedMdDrawer" unformatted md lg ondark>
  <span slot="content">
    <img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="drawer-header">This is a header</h1>
      These are words that are slotted into the scope of the custom element.
    </div>
  </span>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Edit close button position

When using the drawer with the `unformatted` attribute, some may want to adjust the positioning of the X close button. This can be addressed using the CSS `::part` CSS pseudo-element API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/editCloseButton.html) -->
  <!-- The below content is automatically added from ./../../apiExamples/editCloseButton.html -->
  <div>
    <auro-button id="openEditDrawer">Unformatted w/custom close button</auro-button>
  </div>
  <style>
    .example::part(close-button) {
      top: var(--ds-size-400);
      right: var(--ds-size-400);
      color: var(--ds-color-brand-flamingo-500);
    }
  </style>
  <auro-drawer id="unformattedCustomMdDrawer" unformatted md lg class="example">
    <span slot="content">
      <img style="display: block; width: 100%" src="https://worldairlinenews.files.wordpress.com/2022/05/alaska-737-800-sswl-n538as-22-star-warstko-sfo-mdblr-5.4.22.jpg" alt="alaska airlines pride lights" />
      <div class="unformattedWrapper">
        <h1 id="drawer-header">Unformatted w/custom close button</h1>
        Notice the custom location of the close button as well as the custom color.
      </div>
    </span>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/editCloseButton.html) -->
<!-- The below code snippet is automatically added from ./../../apiExamples/editCloseButton.html -->

```html
<div>
  <auro-button id="openEditDrawer">Unformatted w/custom close button</auro-button>
</div>
<style>
  .example::part(close-button) {
    top: var(--ds-size-400);
    right: var(--ds-size-400);
    color: var(--ds-color-brand-flamingo-500);
  }
</style>
<auro-drawer id="unformattedCustomMdDrawer" unformatted md lg class="example">
  <span slot="content">
    <img style="display: block; width: 100%" src="https://worldairlinenews.files.wordpress.com/2022/05/alaska-737-800-sswl-n538as-22-star-warstko-sfo-mdblr-5.4.22.jpg" alt="alaska airlines pride lights" />
    <div class="unformattedWrapper">
      <h1 id="drawer-header">Unformatted w/custom close button</h1>
      Notice the custom location of the close button as well as the custom color.
    </div>
  </span>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Theme Support

The component may be restyled using the following code sample and changing the values of the following token(s).

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../src/tokens.scss) -->
<!-- The below code snippet is automatically added from ./../../src/tokens.scss -->

```scss
@import "./../node_modules/@aurodesignsystem/design-tokens/dist/tokens/SCSSVariables";

:host {
  --ds-auro-drawer-background-color: var(--ds-color-background-primary-100-default, #{$ds-color-background-primary-100-default});
  --ds-auro-drawer-boxshadow-color-one: rgb(0 0 0 / 0.12);
  --ds-auro-drawer-boxshadow-color-two: rgb(0 0 0 / 0.1);
  --ds-auro-drawer-overlay-modal-background-color: rgb(0 0 0 / 0.5);
  --ds-auro-drawer-overlay-open-background-color: rgb(0 0 0 / 0.2);
  --ds-auro-drawer-text-color: var(--ds-color-text-primary-default, #{$ds-color-text-primary-default});
}
```
<!-- AURO-GENERATED-CONTENT:END -->
