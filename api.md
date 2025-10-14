<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-drawer

## Properties

| Property               | Attribute              | Type      | Default | Description                                      |
|------------------------|------------------------|-----------|---------|--------------------------------------------------|
| [fullscreenBreakpoint](#fullscreenBreakpoint) | `fullscreenBreakpoint` | `string`  | "sm"    | Defines the screen size breakpoint (`lg`, `md`, `sm`, or `xs`) at which the drawer switches to fullscreen mode on mobile.<br />When expanded, the drawer will automatically display in fullscreen mode if the screen size is equal to or smaller than the selected breakpoint. |
| [isPopoverVisible](#isPopoverVisible)     | `open`                 | `boolean` | "false" | Sets state of drawer to open.                    |
| [modal](#modal)                | `modal`                | `boolean` | "false" | Modal drawer restricts the user to take an action (no default close actions). |
| [nested](#nested)               | `nested`               | `boolean` | "false" | Sets the anchor placement for the bib. If true, bib will open based off its parent size and position. |
| [onDark](#onDark)               | `onDark`               | `boolean` | "false" | Sets close icon to white for dark backgrounds.   |
| [placement](#placement)            | `placement`            | `string`  | "right" | Sets the placement of drawer bib to `right`, `left`, `top`, `bottom`. |
| [size](#size)                 | `size`                 | `string`  | "lg"    | Sets the size of drawer bib to `sm`, `md`, `lg`. |
| [triggerElement](#triggerElement)       |                        |           |         | The element to focus when the drawer is closed.  |
| [unformatted](#unformatted)          | `unformatted`          | `boolean` | "false" | Unformatted drawer window, edge-to-edge fill for content. |

## Events

| Event                | Description                                      |
|----------------------|--------------------------------------------------|
| `auroDrawer-toggled` | Event fired when the drawer is toggled open or closed. |

## Slots

| Name                     | Description                                      |
|--------------------------|--------------------------------------------------|
|                          | Default slot for the body content in drawer.     |
| `ariaLabel.drawer.close` | Text to describe the "x" icon close button for screen readers. Default: "Close". |
| [close](#close)                  | Used to replace the close button.                |
| [footer](#footer)                 | Used for action options, e.g. buttons.           |
| [header](#header)                 | Text to display as the header of the modal.      |

## CSS Shadow Parts

| Part              | Description                                      |
|-------------------|--------------------------------------------------|
| `close-button`    | to style the close button.                       |
| `drawer-backdrop` | to style the backdrop behind the the content wrapper. |
| `drawer-content`  | to style the container of the drawer content.    |
| `drawer-footer`   | to style the footer.                             |
| `drawer-header`   | to style the header.                             |
| `drawer-wrapper`  | to style the content wrapper.                    |
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- The below content is automatically added from ./../apiExamples/basic.html -->
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
        <auro-radio-group>
          <span slot="legend">Accordion Test</span>
          <auro-radio
            id="basicGroupRadio1"
            label="Credit or debit card"
            name="creditordebit"
            value="credit"
          ></auro-radio>
          <auro-radio
            id="basicGroupRadio2"
            label="Apple Pay"
            name="applePay"
            value="applePay"
          ></auro-radio>
          <auro-radio
            id="basicGroupRadio3"
            label="Alaska Airlines Commercial Account"
            name="alaskaCommercial"
            value="alaskaCommercial"
          ></auro-radio>
        </auro-radio-group>
        <auro-input placeholder="John Doe" bordered required>
          <span slot="label">Full name</span>
          <span slot="helptext">Please enter your full name.</span>
        </auro-input>  
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <auro-checkbox-group>
          <span slot="legend">Form label goes here</span>
          <auro-checkbox value="value1" name="basic" id="checkbox-basic1"
            >Checkbox option</auro-checkbox
          >
          <auro-checkbox value="value2" name="basic" id="checkbox-basic2" checked
            >Checkbox option</auro-checkbox
          >
          <auro-checkbox value="value3" name="basic" id="checkbox-basic3"
            >Checkbox option</auro-checkbox
          >
          <auro-checkbox value="value4" name="basic" id="checkbox-basic4"
            >Checkbox option</auro-checkbox
          >
        </auro-checkbox-group>
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
      <auro-radio-group>
        <span slot="legend">Accordion Test</span>
        <auro-radio
          id="basicGroupRadio1"
          label="Credit or debit card"
          name="creditordebit"
          value="credit"
        ></auro-radio>
        <auro-radio
          id="basicGroupRadio2"
          label="Apple Pay"
          name="applePay"
          value="applePay"
        ></auro-radio>
        <auro-radio
          id="basicGroupRadio3"
          label="Alaska Airlines Commercial Account"
          name="alaskaCommercial"
          value="alaskaCommercial"
        ></auro-radio>
      </auro-radio-group>
      <auro-input placeholder="John Doe" bordered required>
        <span slot="label">Full name</span>
        <span slot="helptext">Please enter your full name.</span>
      </auro-input>  
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <auro-checkbox-group>
        <span slot="legend">Form label goes here</span>
        <auro-checkbox value="value1" name="basic" id="checkbox-basic1"
          >Checkbox option</auro-checkbox
        >
        <auro-checkbox value="value2" name="basic" id="checkbox-basic2" checked
          >Checkbox option</auro-checkbox
        >
        <auro-checkbox value="value3" name="basic" id="checkbox-basic3"
          >Checkbox option</auro-checkbox
        >
        <auro-checkbox value="value4" name="basic" id="checkbox-basic4"
          >Checkbox option</auro-checkbox
        >
      </auro-checkbox-group>
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

### <a name="fullscreenBreakpoint">`fullscreenBreakpoint`</a>
On mobile view, adding the fullscreenBreakpoint="{breakpoint-token}" will switch the drawer to fullscreen mode.
The default breakpoint is "sm".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fullscreenBreakpoint.html) -->
  <!-- The below content is automatically added from ./../apiExamples/fullscreenBreakpoint.html -->
  <div>
    <auro-button id="openSmLg">Open drawer</auro-button>
  </div>
  <auro-drawer id="smLgDrawer" size="sm" fullscreenBreakpoint="lg">
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
      <auro-button id="closeSmLg">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fullscreenBreakpoint.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/fullscreenBreakpoint.html -->

```html
<div>
  <auro-button id="openSmLg">Open drawer</auro-button>
</div>
<auro-drawer id="smLgDrawer" size="sm" fullscreenBreakpoint="lg">
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
    <auro-button id="closeSmLg">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### <a name="modal">`modal`</a>
The auro-drawer supports a modal drawer state that will lock a user into interacting with the `modal` drawer. To activate, use the modal attribute.

When using this state, the modal drawer must include a button action to dismiss the modal drawer as the closing icon will not be available and the user will not be able to click outside the modal drawer to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/modal.html) -->
  <!-- The below content is automatically added from ./../apiExamples/modal.html -->
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
  <auro-drawer id="mediumModalDrawer" size="md" modal>
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
  <auro-drawer id="smallModalDrawer" size="sm" modal>
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/modal.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/modal.html -->

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
<auro-drawer id="mediumModalDrawer" size="md" modal>
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
<auro-drawer id="smallModalDrawer" size="sm" modal>
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

### <a name="nested">`nested`</a>
In case the drawer should sit inside of a container, not to the body, set `nested` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nested.html) -->
  <!-- The below content is automatically added from ./../apiExamples/nested.html -->
  <div>
    <auro-button id="openNested">Open nested drawer</auro-button>
  </div>
  <div style="height: 400px">
    <auro-drawer id="nestedDrawer" nested>
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
        <auro-button secondary id="closeNested">Close</auro-button>
      </div>
    </auro-drawer>
  </div>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nested.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/nested.html -->

```html
<div>
  <auro-button id="openNested">Open nested drawer</auro-button>
</div>
<div style="height: 400px">
  <auro-drawer id="nestedDrawer" nested>
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
      <auro-button secondary id="closeNested">Close</auro-button>
    </div>
  </auro-drawer>
</div>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### <a name="placement">`placement`</a>
You can set the position where the drawer should sit 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/placement.html) -->
  <!-- The below content is automatically added from ./../apiExamples/placement.html -->
  <div>
    <auro-button id="openDefaultSlide">Open default drawer</auro-button>
    <auro-button id="openLeftSlide">Open left drawer</auro-button>
    <auro-button id="openTopSlide">Open top drawer</auro-button>
    <auro-button id="openBottomSlide">Open Bottom drawer</auro-button>
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
  <auro-drawer id="leftSlideDrawer" placement="left">
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
  <auro-drawer id="topSlideDrawer" placement="top" size="sm">
    <span slot="header">Top Drawer</span>
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
      <auro-button secondary id="closeTopSlide">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="bottomSlideDrawer" placement="bottom" size="md">
    <span slot="header">Bottom Drawer</span>
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
      <auro-button secondary id="closeBottomSlide">Close</auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/placement.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/placement.html -->

```html
<div>
  <auro-button id="openDefaultSlide">Open default drawer</auro-button>
  <auro-button id="openLeftSlide">Open left drawer</auro-button>
  <auro-button id="openTopSlide">Open top drawer</auro-button>
  <auro-button id="openBottomSlide">Open Bottom drawer</auro-button>
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
<auro-drawer id="leftSlideDrawer" placement="left">
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
<auro-drawer id="topSlideDrawer" placement="top" size="sm">
  <span slot="header">Top Drawer</span>
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
    <auro-button secondary id="closeTopSlide">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="bottomSlideDrawer" placement="bottom" size="md">
  <span slot="header">Bottom Drawer</span>
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
    <auro-button secondary id="closeBottomSlide">Close</auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### <a name="size">`size`</a>
The auro-drawer supports three different sizes. A default drawer is equal to the large size drawer. 

The size attribute controls the width of left and right drawers, which always have a height of 100%.
For top and bottom drawers, size controls the height, and the width is always 100%.

For mobile or small screen, read <a href="#fullscreenBreakpoint">`fullscreenBreakpoint`</a>
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/sizeOptions.html) -->
  <!-- The below content is automatically added from ./../apiExamples/sizeOptions.html -->
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
  <auro-drawer id="mediumSizeDrawer" size="md">
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
  <auro-drawer id="smallSizeDrawer" size="sm">
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/sizeOptions.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/sizeOptions.html -->

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
<auro-drawer id="mediumSizeDrawer" size="md">
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
<auro-drawer id="smallSizeDrawer" size="sm">
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

### Drawer with Dropdown Components

This is a use case where there is a popover and combobox component inside the drawer component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popoverAndDropdown.html) -->
  <!-- The below content is automatically added from ./../apiExamples/popoverAndDropdown.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popoverAndDropdown.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/popoverAndDropdown.html -->

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

### Aria Label Slot

To customize the aria-label text for the close button, use the `ariaLabel.drawer.close` slot to provide custom text. If no text is provided, the default text `"Close"` will be used.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/ariaLabelSlot.html) -->
  <!-- The below content is automatically added from ./../apiExamples/ariaLabelSlot.html -->
  <div>  
    <auro-button id="openAriaLabelSlotDrawer">Open drawer</auro-button>
  </div>
  <auro-drawer id="ariaLabelSlotDrawer" size="sm" fullscreenBreakpoint="lg">
    <span slot="ariaLabel.drawer.close">This is the new aria-label for the close button</span>
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
      <auro-button id="closeAriaLabelSlotDrawer">
        I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/ariaLabelSlot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/ariaLabelSlot.html -->

```html
<div>  
  <auro-button id="openAriaLabelSlotDrawer">Open drawer</auro-button>
</div>
<auro-drawer id="ariaLabelSlotDrawer" size="sm" fullscreenBreakpoint="lg">
  <span slot="ariaLabel.drawer.close">This is the new aria-label for the close button</span>
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
    <auro-button id="closeAriaLabelSlotDrawer">
      I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### <a name="unformatted">`unformatted`</a>
For use case where the use of a drawer is to be more freeform, but the experience and base tooling for the drawer are still requested, there is the `unformatted` property.

This property can be used in combination of any other use case of the drawer, but it will render a unformatted drawer window allowing for full customization of content within the scope of the window.

#### Accessibility

Within the scope of the auro-drawer there is `aria-labelledby="drawer-header"`. To make proper use of this, in an unformatted drawer, the developer is required to add `id="drawer-header"` to the content header within the drawer content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
  <!-- The below content is automatically added from ./../apiExamples/accessibility.html -->
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
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/accessibility.html -->

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

### Customizing Styles

The drawer's size and some styles can be styled using CSS `part`.

- `auro-drawer::part(backdrop)` to style the backdrop behind the the content wrapper.
- `auro-drawer ::part(drawer-wrapper)` to style the container of the drawer content.
- `auro-drawer ::part(drawer-header)` to style the header.
- `auro-drawer ::part(drawer-content)` to style the content wrapper.
- `auro-drawer ::part(drawer-footer)` to style the footer.
- `auro-drawer ::part(close-button)` to style the close button.

`close` slot can be used to replace the close button to a different element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customizing.html) -->
  <!-- The below content is automatically added from ./../apiExamples/customizing.html -->
  <style>
    #customizedDrawer ::part(drawer-header) {
      display: none;
    }
    #customizedDrawer ::part(drawer-content) {
      width: 90%;
    }
    #customizedDrawer ::part(close-button) {
      transform: scale(2);
    }
    #customizedDrawer ::part(drawer-wrapper) {
      background: linear-gradient(180deg, var(  --ds-advanced-color-accents-accent1) 50%, var(--ds-advanced-color-accents-accent1-muted) 100%);
      width: 50%;
    }
    #customizedDrawer::part(drawer-backdrop) {
      background: var(--ds-advanced-color-button-primary-background-inverse-disabled);
    }
  </style>
  <div>
    <auro-button id="openCustomized">Open customized drawer</auro-button>
  </div>
  <auro-drawer id="customizedDrawer">
    <span slot="header">Default Drawer</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
      <ul>
        <li>Caerphilly croque monsieur fondue</li>
        <auro-radio-group>
          <span slot="legend">Accordion Test</span>
          <auro-radio
            id="basicGroupRadio1"
            label="Credit or debit card"
            name="creditordebit"
            value="credit"
          ></auro-radio>
          <auro-radio
            id="basicGroupRadio2"
            label="Apple Pay"
            name="applePay"
            value="applePay"
          ></auro-radio>
          <auro-radio
            id="basicGroupRadio3"
            label="Alaska Airlines Commercial Account"
            name="alaskaCommercial"
            value="alaskaCommercial"
          ></auro-radio>
        </auro-radio-group>
        <auro-input placeholder="John Doe" bordered required>
          <span slot="label">Full name</span>
          <span slot="helptext">Please enter your full name.</span>
        </auro-input>  
        <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
        <li>Cheddar cheese and biscuits chalk and cheese</li>
        <auro-checkbox-group>
          <span slot="legend">Form label goes here</span>
          <auro-checkbox value="value1" name="basic" id="checkbox-basic1"
            >Checkbox option</auro-checkbox
          >
          <auro-checkbox value="value2" name="basic" id="checkbox-basic2" checked
            >Checkbox option</auro-checkbox
          >
          <auro-checkbox value="value3" name="basic" id="checkbox-basic3"
            >Checkbox option</auro-checkbox
          >
          <auro-checkbox value="value4" name="basic" id="checkbox-basic4"
            >Checkbox option</auro-checkbox
          >
        </auro-checkbox-group>
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
      <auro-button secondary id="closeCustomized">Close</auro-button>
    </div>
  </auro-drawer>
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customizing.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customizing.html -->

```html
<style>
  #customizedDrawer ::part(drawer-header) {
    display: none;
  }
  #customizedDrawer ::part(drawer-content) {
    width: 90%;
  }
  #customizedDrawer ::part(close-button) {
    transform: scale(2);
  }
  #customizedDrawer ::part(drawer-wrapper) {
    background: linear-gradient(180deg, var(  --ds-advanced-color-accents-accent1) 50%, var(--ds-advanced-color-accents-accent1-muted) 100%);
    width: 50%;
  }
  #customizedDrawer::part(drawer-backdrop) {
    background: var(--ds-advanced-color-button-primary-background-inverse-disabled);
  }
</style>
<div>
  <auro-button id="openCustomized">Open customized drawer</auro-button>
</div>
<auro-drawer id="customizedDrawer">
  <span slot="header">Default Drawer</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
    <ul>
      <li>Caerphilly croque monsieur fondue</li>
      <auro-radio-group>
        <span slot="legend">Accordion Test</span>
        <auro-radio
          id="basicGroupRadio1"
          label="Credit or debit card"
          name="creditordebit"
          value="credit"
        ></auro-radio>
        <auro-radio
          id="basicGroupRadio2"
          label="Apple Pay"
          name="applePay"
          value="applePay"
        ></auro-radio>
        <auro-radio
          id="basicGroupRadio3"
          label="Alaska Airlines Commercial Account"
          name="alaskaCommercial"
          value="alaskaCommercial"
        ></auro-radio>
      </auro-radio-group>
      <auro-input placeholder="John Doe" bordered required>
        <span slot="label">Full name</span>
        <span slot="helptext">Please enter your full name.</span>
      </auro-input>  
      <li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
      <li>Cheddar cheese and biscuits chalk and cheese</li>
      <auro-checkbox-group>
        <span slot="legend">Form label goes here</span>
        <auro-checkbox value="value1" name="basic" id="checkbox-basic1"
          >Checkbox option</auro-checkbox
        >
        <auro-checkbox value="value2" name="basic" id="checkbox-basic2" checked
          >Checkbox option</auro-checkbox
        >
        <auro-checkbox value="value3" name="basic" id="checkbox-basic3"
          >Checkbox option</auro-checkbox
        >
        <auro-checkbox value="value4" name="basic" id="checkbox-basic4"
          >Checkbox option</auro-checkbox
        >
      </auro-checkbox-group>
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
    <auro-button secondary id="closeCustomized">Close</auro-button>
  </div>
</auro-drawer>
```
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>
