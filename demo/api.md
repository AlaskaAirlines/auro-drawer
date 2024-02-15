<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- The below content is automatically added from ./../api.md -->

# auro-drawer

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| [left](#left)    | `Boolean` | Sets drawer box to open from the left            |
| [md](#md)      | `Boolean` | Sets drawer box to medium style. Adding both md and lg will set the drawer to md for desktop and lg for mobile. |
| [onDark](#onDark)  | `Boolean` | Sets close icon to white for dark backgrounds    |
| [sm](#sm)      | `Boolean` | Sets drawer box to small style. Adding both sm and lg will set the drawer to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Default | Description                                      |
|------------------|---------------|---------------|---------|--------------------------------------------------|
| [modal](#modal)          | `modal`       | `Boolean`     | false   | Modal drawer restricts the user to take an action (no default close actions) |
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
    <auro-button onClick="toggleDrawer('#basicDrawer')">Open default drawer</auro-button>
  </div>
  <auro-drawer id="basicDrawer">
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
      <auro-button secondary onClick="toggleDrawer('#basicDrawer')">Close</auro-button>
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
  <auro-button onClick="toggleDrawer('#basicDrawer')">Open default drawer</auro-button>
</div>
<auro-drawer id="basicDrawer">
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
    <auro-button secondary onClick="toggleDrawer('#basicDrawer')">Close</auro-button>
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
    <auro-button onClick="toggleDrawer('#defaultDrawer')">Open default drawer</auro-button>
    <auro-button onClick="toggleDrawer('#leftDrawer')">Open left drawer</auro-button>
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
    </div>
    <div slot="footer">
      <auro-button secondary onClick="toggleDrawer('#defaultDrawer')">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="leftDrawer" left>
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
      <auro-button secondary onClick="toggleDrawer('#leftDrawer')">Close</auro-button>
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
  <auro-button onClick="toggleDrawer('#defaultDrawer')">Open default drawer</auro-button>
  <auro-button onClick="toggleDrawer('#leftDrawer')">Open left drawer</auro-button>
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
  </div>
  <div slot="footer">
    <auro-button secondary onClick="toggleDrawer('#defaultDrawer')">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="leftDrawer" left>
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
    <auro-button secondary onClick="toggleDrawer('#leftDrawer')">Close</auro-button>
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
    <auro-button onClick="toggleDrawer('#defaultDrawer')">Open default drawer</auro-button>
    <auro-button onClick="toggleDrawer('#mediumDrawer')">Open medium drawer</auro-button>
    <auro-button onClick="toggleDrawer('#smallDrawer')">Open small drawer</auro-button>
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
    </div>
    <div slot="footer">
      <auro-button secondary onClick="toggleDrawer('#defaultDrawer')">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="mediumDrawer" md>
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
      <auro-button secondary onClick="toggleDrawer('#mediumDrawer')">Close</auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="smallDrawer" sm>
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
      <auro-button secondary onClick="toggleDrawer('#smallDrawer')">Close</auro-button>
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
  <auro-button onClick="toggleDrawer('#defaultDrawer')">Open default drawer</auro-button>
  <auro-button onClick="toggleDrawer('#mediumDrawer')">Open medium drawer</auro-button>
  <auro-button onClick="toggleDrawer('#smallDrawer')">Open small drawer</auro-button>
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
  </div>
  <div slot="footer">
    <auro-button secondary onClick="toggleDrawer('#defaultDrawer')">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="mediumDrawer" md>
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
    <auro-button secondary onClick="toggleDrawer('#mediumDrawer')">Close</auro-button>
  </div>
</auro-drawer>
<auro-drawer id="smallDrawer" sm>
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
    <auro-button secondary onClick="toggleDrawer('#smallDrawer')">Close</auro-button>
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
    <auro-button onClick="toggleDrawer('#defaultModalDrawer')">Open default modal</auro-button>
    <auro-button onClick="toggleDrawer('#mediumModalDrawer')">Open medium modal</auro-button>
    <auro-button onClick="toggleDrawer('#smallModalDrawer')">Open small modal</auro-button>
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
      <auro-button onClick="toggleDrawer('#defaultModalDrawer')">I understand
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
      <auro-button onClick="toggleDrawer('#mediumModalDrawer')">I understand
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
      <auro-button onClick="toggleDrawer('#smallModalDrawer')">I understand
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
  <auro-button onClick="toggleDrawer('#defaultModalDrawer')">Open default modal</auro-button>
  <auro-button onClick="toggleDrawer('#mediumModalDrawer')">Open medium modal</auro-button>
  <auro-button onClick="toggleDrawer('#smallModalDrawer')">Open small modal</auro-button>
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
    <auro-button onClick="toggleDrawer('#defaultModalDrawer')">I understand
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
    <auro-button onClick="toggleDrawer('#mediumModalDrawer')">I understand
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
    <auro-button onClick="toggleDrawer('#smallModalDrawer')">I understand
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
    <auro-button onClick="toggleDrawer('#smLgDrawer')">Open [sm lg] drawer</auro-button>
    <auro-button onClick="toggleDrawer('#smMdDrawer')">Open [md lg] drawer</auro-button>
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
      <auro-button onClick="toggleDrawer('#smLgDrawer')">I understand
        <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
      </auro-button>
    </div>
  </auro-drawer>
  <auro-drawer id="smMdDrawer" md lg>
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
      <auro-button onClick="toggleDrawer('#smMdDrawer')">I understand
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
  <auro-button onClick="toggleDrawer('#smLgDrawer')">Open [sm lg] drawer</auro-button>
  <auro-button onClick="toggleDrawer('#smMdDrawer')">Open [md lg] drawer</auro-button>
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
    <auro-button onClick="toggleDrawer('#smLgDrawer')">I understand
      <auro-icon category="interface" name="check-lg" emphasis onDark></auro-icon>
    </auro-button>
  </div>
</auro-drawer>
<auro-drawer id="smMdDrawer" md lg>
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
    <auro-button onClick="toggleDrawer('#smMdDrawer')">I understand
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
    <auro-button onClick="toggleDrawer('#popover-drawer')">Open popover drawer</auro-button>
  </div>
  <auro-drawer id="popover-drawer" sm lg>
    <span slot="header">Small Modal Drawer</span>
    <div slot="content">
      <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
      <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
      <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
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
      <auro-button onClick="toggleDrawer('#popover-drawer')">I understand
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
  <auro-button onClick="toggleDrawer('#popover-drawer')">Open popover drawer</auro-button>
</div>
<auro-drawer id="popover-drawer" sm lg>
  <span slot="header">Small Modal Drawer</span>
  <div slot="content">
    <p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
    <p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
    <auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
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
    <auro-button onClick="toggleDrawer('#popover-drawer')">I understand
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
    <auro-button onClick="toggleDrawer('#unformattedMdDrawer')">Unformatted Medium Drawer</auro-button>
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
  <auro-button onClick="toggleDrawer('#unformattedMdDrawer')">Unformatted Medium Drawer</auro-button>
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
    <auro-button onClick="toggleDrawer('#unformattedCustomMdDrawer')">Unformatted w/custom close button</auro-button>
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
  <auro-button onClick="toggleDrawer('#unformattedCustomMdDrawer')">Unformatted w/custom close button</auro-button>
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
