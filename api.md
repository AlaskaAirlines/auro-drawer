<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- The below content is automatically added from ./../docs/api.md -->

# auro-drawer

A panel that slides in from an edge of the screen to show content or actions without leaving the page.

**Key capabilities**

- **Choose where it opens**: Set `placement` to `right`, `left`, `top`, or `bottom`.
- **Choose how large it is**: Set `size` to `sm`, `md`, or `lg`.
- **Fills small screens**: At the screen width set by `fullscreenBreakpoint` and smaller, the drawer fills the screen.
- **Requires an action**: Set `modal` so people can't dismiss the drawer with Escape or a click outside it.
- **Sits inside a container**: Set `nested` to open the drawer inside its parent instead of over the page.
- **Manages focus**: Focus moves into the drawer when it opens and returns to the trigger when it closes.

**Example**

<pre class="language-html"><code class="language-html">&lt;auro-drawer open&gt;
  &lt;span slot="header"&gt;Baggage rules&lt;/span&gt;
  &lt;div slot="content"&gt;Drawer content goes here.&lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>

### Properties and attributes

| Properties            | Attributes              | Modifiers | Type                                   | Default   | Description                                                                                                                                                                                                                                            |
| --------------------- | ----------------------- | --------- | -------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| closeButtonAppearance | close-button-appearance |           | `default` \| `inverse`                 | `default` | Sets the color of the close button. Use `inverse` for a light button on a dark drawer background.                                                                                                                                                      |
| fullscreenBreakpoint  | fullscreenBreakpoint    |           | `lg` \| `md` \| `sm` \| `xs`           | `sm`      | Sets the screen width at and below which the drawer fills the screen. Use `xs`, `sm`, `md`, or `lg`: the larger the breakpoint, the more screen sizes show a fullscreen drawer.                                                                        |
| modal                 | modal                   |           | boolean                                |           | Makes the drawer a modal that people must act on to dismiss. A modal drawer has no close button, and pressing Escape or clicking outside it doesn't close it, so add a button that closes it to the `footer` slot.                                     |
| nested                | nested                  |           | boolean                                |           | Opens the drawer inside its parent container instead of over the whole page.                                                                                                                                                                           |
| placement             | placement               |           | `right` \| `left` \| `top` \| `bottom` | `right`   | Sets the edge of the screen the drawer slides in from. Use `right` (the default) or `left` for a side panel that fills the screen's height, and `top` or `bottom` for a panel that spans the full width.                                               |
| size                  | size                    |           | `sm` \| `md` \| `lg`                   | `lg`      | Sets how large the drawer is: its width for `left` and `right` placements, or its height for `top` and `bottom` placements. `sm` is the smallest, `md` is in the middle, and `lg` is the largest.                                                      |
| unformatted           | unformatted             |           | boolean                                |           | Removes the drawer's padding, header, footer, and close button so your content fills the drawer edge to edge. Because the `header`, `footer`, and `close` slots aren't shown, add your own heading, and add a way to close the drawer if it's `modal`. |
| onDark                | onDark                  |           | boolean                                |           | Deprecated: Use `closeButtonAppearance="inverse"` instead.<br>Makes the close button light for use on dark backgrounds.                                                                                                                                |

### Methods

| Name     | Parameters                                                                                                                                                     | Return | Description                                                   |
| -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------- |
| hide     | `eventType` (string) - The reason the drawer is closing. It's passed to the `auroDrawer-toggled` event as `detail.eventType`, which is `unknown` when omitted. |        | Closes the drawer, the same as removing the `open` attribute. |
| register | `name` (string) - The tag name to register the element under.                                                                                                  |        | Registers the element with the browser under a tag name.      |
| show     | None                                                                                                                                                           |        | Opens the drawer, the same as setting the `open` attribute.   |

### Events

| Name               | Description                                                                                                                                                                                                                                                                         |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| auroDrawer-toggled | Fires when the drawer opens or closes. The event's `detail` has `expanded`, which is true when the drawer is open, and `eventType`, the reason the drawer changed, such as `disconnect` when the drawer is removed from the page. `eventType` is `unknown` when no reason is given. |

### Slots

| Name                   | Description                                                                                                                                    |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| (default)              | The drawer's body content. Appears in the same place as the `content` slot.                                                                    |
| ariaLabel.drawer.close | Text that screen readers announce for the close button, for example "Close filters". Defaults to "Close".                                      |
| close                  | Content that replaces the close button. Clicking it closes the drawer. Not shown when `modal` or `unformatted` is set.                         |
| content                | The drawer's body content. Appears after the default slot's content.                                                                           |
| footer                 | Action buttons at the bottom of the drawer. Add a button that closes the drawer here when `modal` is set. Not shown when `unformatted` is set. |
| header                 | The heading text at the top of the drawer. Screen readers also announce it as the drawer's name. Not shown when `unformatted` is set.          |

### CSS shadow parts

| Name            | Description                                                                                                                                                                                         |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| close-button    | The button that closes the drawer. Doesn't exist when `modal` or `unformatted` is set, or when you use the `close` slot.                                                                            |
| drawer-backdrop | Deprecated: Set `display: none` on this part and use the `--auro-drawer-backdrop-*` CSS custom properties instead. A decorative `<div>` behind the drawer that shows the default dimmed background. |
| drawer-content  | The container for the default and `content` slots.                                                                                                                                                  |
| drawer-footer   | The container for the `footer` slot. Doesn't exist when `unformatted` is set.                                                                                                                       |
| drawer-header   | The `<h1>` that holds the `header` slot. Doesn't exist when `unformatted` is set.                                                                                                                   |
| drawer-wrapper  | The container that wraps the drawer's header, content, and footer.                                                                                                                                  |

### CSS custom properties

| Name                              | Description                                                                                                                                                                    |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| --auro-drawer-backdrop-background | Background of the `::backdrop` pseudo-element, which is transparent unless you set it. The default dimmed background comes from the deprecated `drawer-backdrop` part instead. |
| --auro-drawer-backdrop-filter     | `backdrop-filter` applied to the `::backdrop` pseudo-element, such as `blur(4px)`.                                                                                             |
| --auro-drawer-backdrop-opacity    | Opacity of the `::backdrop` pseudo-element.                                                                                                                                    |
| --auro-drawer-backdrop-transition | Transition applied to the `::backdrop` pseudo-element.                                                                                                                         |
| --ds-auro-drawer-container-color  | Background color of the drawer panel.                                                                                                                                          |
| --ds-auro-drawer-text-color       | Color of the text inside the drawer.                                                                                                                                           |
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
<!-- The below content is automatically added from ./../apiExamples/basic.html -->
<div>
<auro-button id="openBasic">Open default drawer</auro-button>
</div>
<auro-drawer id="defaultDrawer">
<span slot="header">Default drawer</span>
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
<auro-button variant="secondary" id="closeBasic">Close</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/basic.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openBasic"&gt;Open default drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="defaultDrawer"&gt;
  &lt;span slot="header"&gt;Default drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeBasic"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Property and attribute examples

### Close button appearance on a customized drawer

If you give the drawer a dark background, the close button can be hard to see. Set `closeButtonAppearance` (the `close-button-appearance` attribute) to `inverse` to make it light.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/close-button-appearance.html) -->
<!-- The below content is automatically added from ./../apiExamples/close-button-appearance.html -->
<style>
    #inverseCloseButtonAppearance ::part(drawer-wrapper) {
      background: black;
      --ds-auro-drawer-text-color: white;
      width: 50%;
    }
</style>
<div>
<auro-button id="openInverseCloseButtonAppearance">Open drawer with inverse close button</auro-button>
</div>
<auro-drawer id="inverseCloseButtonAppearance" close-button-appearance="inverse">
<span slot="header">Default drawer</span>
<div slot="content">
<p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
<p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
<auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
<ul>
<li>Caerphilly croque monsieur fondue</li>
</ul>
<auro-radio-group appearance="inverse">
<span slot="legend">Payment method</span>
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
<auro-input placeholder="John Doe" bordered required appearance="inverse">
<span slot="label">Full name</span>
<span slot="helptext">Please enter your full name.</span>
</auro-input>
<ul>
<li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
<li>Cheddar cheese and biscuits chalk and cheese</li>
</ul>
<auro-checkbox-group appearance="inverse">
<span slot="legend">Baggage options</span>
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
<ul>
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
<auro-button variant="secondary" id="closeInverseCloseButtonAppearance" appearance="inverse">Close</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/close-button-appearance.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/close-button-appearance.html -->

<pre class="language-html"><code class="language-html">&lt;style&gt;
  #inverseCloseButtonAppearance ::part(drawer-wrapper) {
    background: black;
    --ds-auro-drawer-text-color: white;
    width: 50%;
  }
&lt;/style&gt;
&lt;div&gt;
  &lt;auro-button id="openInverseCloseButtonAppearance"&gt;Open drawer with inverse close button&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-drawer id="inverseCloseButtonAppearance" close-button-appearance="inverse"&gt;
  &lt;span slot="header"&gt;Default drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
    &lt;/ul&gt;
      &lt;auro-radio-group appearance="inverse"&gt;
        &lt;span slot="legend"&gt;Payment method&lt;/span&gt;
        &lt;auro-radio
          id="basicGroupRadio1"
          label="Credit or debit card"
          name="creditordebit"
          value="credit"
        &gt;&lt;/auro-radio&gt;
        &lt;auro-radio
          id="basicGroupRadio2"
          label="Apple Pay"
          name="applePay"
          value="applePay"
        &gt;&lt;/auro-radio&gt;
        &lt;auro-radio
          id="basicGroupRadio3"
          label="Alaska Airlines Commercial Account"
          name="alaskaCommercial"
          value="alaskaCommercial"
        &gt;&lt;/auro-radio&gt;
      &lt;/auro-radio-group&gt;
      &lt;auro-input placeholder="John Doe" bordered required appearance="inverse"&gt;
        &lt;span slot="label"&gt;Full name&lt;/span&gt;
        &lt;span slot="helptext"&gt;Please enter your full name.&lt;/span&gt;
      &lt;/auro-input&gt;
    &lt;ul&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
    &lt;/ul&gt;
      &lt;auro-checkbox-group appearance="inverse"&gt;
        &lt;span slot="legend"&gt;Baggage options&lt;/span&gt;
        &lt;auro-checkbox value="value1" name="basic" id="checkbox-basic1"
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
        &lt;auro-checkbox value="value2" name="basic" id="checkbox-basic2" checked
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
        &lt;auro-checkbox value="value3" name="basic" id="checkbox-basic3"
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
        &lt;auro-checkbox value="value4" name="basic" id="checkbox-basic4"
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
      &lt;/auro-checkbox-group&gt;
&#10;    &lt;ul&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed. Tortor at risus viverra adipiscing at in tellus integer feugiat. Dictum sit amet justo donec enim diam vulputate. Ullamcorper a lacus vestibulum sed arcu non. Sed cras ornare arcu dui vivamus arcu felis. Morbi tristique senectus et netus et. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Eleifend mi in nulla posuere sollicitudin aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim.&lt;/p&gt;
      &lt;p&gt;Tristique senectus et netus et. Vel pharetra vel turpis nunc eget. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Aliquet enim tortor at auctor urna nunc id. Ut consequat semper viverra nam libero justo. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Et leo duis ut diam. In dictum non consectetur a erat nam. Elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper feugiat nibh sed pulvinar proin gravida. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. In cursus turpis massa tincidunt dui ut ornare lectus sit. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.&lt;/p&gt;
      &lt;p&gt;Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Dignissim diam quis enim lobortis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Integer eget aliquet nibh praesent. Ornare massa eget egestas purus viverra accumsan in nisl. Est ultricies integer quis auctor elit sed vulputate mi sit. Feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis. Sagittis eu volutpat odio facilisis mauris.&lt;/p&gt;
      &lt;p&gt;Magnis dis parturient montes nascetur ridiculus mus. Faucibus vitae aliquet nec ullamcorper sit amet risus. In eu mi bibendum neque egestas congue quisque egestas. Nibh praesent tristique magna sit amet purus gravida quis blandit. Tincidunt id aliquet risus feugiat in ante metus dictum at. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Molestie at elementum eu facilisis sed odio. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Egestas pretium aenean pharetra magna. Venenatis urna cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quis viverra nibh cras pulvinar mattis nunc. A scelerisque purus semper eget duis at tellus at urna. Cursus turpis massa tincidunt dui ut. Purus viverra accumsan in nisl nisi scelerisque eu. Et magnis dis parturient montes nascetur ridiculus mus.&lt;/p&gt;
      &lt;p&gt;Id eu nisl nunc mi. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Platea dictumst quisque sagittis purus sit amet volutpat. Egestas congue quisque egestas diam in arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ornare suspendisse sed nisi lacus sed. Ut ornare lectus sit amet est placerat in egestas erat. Tortor aliquam nulla facilisi cras fermentum odio eu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id. Varius quam quisque id diam vel. Odio ut enim blandit volutpat maecenas volutpat. Urna cursus eget nunc scelerisque viverra mauris in aliquam.&lt;/p&gt;
      &lt;p&gt;Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisis sed odio morbi quis commodo odio. Cras adipiscing enim eu turpis egestas pretium. Dolor purus non enim praesent. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo sed. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. A pellentesque sit amet porttitor eget. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Consequat semper viverra nam libero. Vitae purus faucibus ornare suspendisse. Eget nunc lobortis mattis aliquam. Nibh nisl condimentum id venenatis a condimentum vitae. Eget egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Amet nisl purus in mollis nunc sed id semper risus. Et tortor consequat id porta nibh. Proin fermentum leo vel orci porta.&lt;/p&gt;
      &lt;p&gt;Duis ut diam quam nulla porttitor massa. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Enim eu turpis egestas pretium aenean pharetra magna. Commodo elit at imperdiet dui accumsan sit amet nulla. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris augue neque gravida in. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Neque viverra justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Mollis nunc sed id semper risus in hendrerit. Feugiat scelerisque varius morbi enim nunc. Pretium lectus quam id leo in vitae turpis massa sed. Ornare arcu odio ut sem nulla pharetra. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sit amet risus nullam eget felis eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Malesuada fames ac turpis egestas sed tempus.&lt;/p&gt;
      &lt;p&gt;Fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat nisl vel pretium lectus quam id leo in vitae. Lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id. Fermentum leo vel orci porta. Sed augue lacus viverra vitae congue. Consequat semper viverra nam libero. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Feugiat vivamus at augue eget arcu dictum varius duis. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lacus vestibulum sed arcu non odio euismod. Pulvinar sapien et ligula ullamcorper malesuada. Ut ornare lectus sit amet est placerat in egestas erat. Pharetra massa massa ultricies mi. Interdum velit euismod in pellentesque.&lt;/p&gt;
      &lt;p&gt;Duis at consectetur lorem donec. Sed vulputate mi sit amet mauris commodo quis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Eget arcu dictum varius duis. Nunc consequat interdum varius sit amet mattis. Pulvinar mattis nunc sed blandit. Sem viverra aliquet eget sit amet tellus. Vel turpis nunc eget lorem dolor sed. Pretium viverra suspendisse potenti nullam. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Odio euismod lacinia at quis risus sed vulputate odio. Imperdiet proin fermentum leo vel orci porta non pulvinar. Leo duis ut diam quam nulla porttitor massa id neque. Augue lacus viverra vitae congue eu consequat. Id cursus metus aliquam eleifend. Montes nascetur ridiculus mus mauris.&lt;/p&gt;
      &lt;p&gt;Volutpat blandit aliquam etiam erat velit scelerisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lectus sit amet est placerat in egestas erat imperdiet sed. Platea dictumst quisque sagittis purus sit. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla pharetra diam sit amet nisl suscipit adipiscing. Id aliquet lectus proin nibh nisl condimentum id venenatis. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Duis at consectetur lorem donec massa sapien faucibus et molestie.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeInverseCloseButtonAppearance" appearance="inverse"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Fullscreen breakpoint

Set `fullscreenBreakpoint` to `xs`, `sm`, `md`, or `lg` to make the drawer fill the screen at that screen width and smaller. The default is `sm`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fullscreen-breakpoint.html) -->
<!-- The below content is automatically added from ./../apiExamples/fullscreen-breakpoint.html -->
<div>
<auro-button id="openSmLg">Open drawer</auro-button>
</div>
<auro-drawer id="smLgDrawer" size="sm" fullscreenBreakpoint="lg">
<span slot="header">Small drawer</span>
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
<auro-icon category="interface" name="check-lg" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fullscreen-breakpoint.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/fullscreen-breakpoint.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openSmLg"&gt;Open drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="smLgDrawer" size="sm" fullscreenBreakpoint="lg"&gt;
  &lt;span slot="header"&gt;Small drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeSmLg"&gt;
      I understand
      &lt;auro-icon category="interface" name="check-lg" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Modal

In a modal drawer, people must act on the drawer's content, because pressing Escape or clicking outside it doesn't close it. To turn it on, set the `modal` attribute.

A modal drawer has no close button, so include a button that closes it.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/modal.html) -->
<!-- The below content is automatically added from ./../apiExamples/modal.html -->
<div>
<auro-button id="openDefaultModal">Open default modal</auro-button>
<auro-button id="openMediumModal">Open medium modal</auro-button>
<auro-button id="openSmallModal">Open small modal</auro-button>
</div>
<auro-drawer id="defaultModalDrawer" modal>
<span slot="header">Default modal drawer</span>
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
<auro-icon category="interface" name="chevron-right" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-drawer>
<auro-drawer id="mediumModalDrawer" size="md" modal>
<span slot="header">Medium drawer</span>
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
<auro-icon category="interface" name="chevron-right" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-drawer>
<auro-drawer id="smallModalDrawer" size="sm" modal>
<span slot="header">Small drawer</span>
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
<auro-icon category="interface" name="chevron-right" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/modal.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/modal.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openDefaultModal"&gt;Open default modal&lt;/auro-button&gt;
  &lt;auro-button id="openMediumModal"&gt;Open medium modal&lt;/auro-button&gt;
  &lt;auro-button id="openSmallModal"&gt;Open small modal&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="defaultModalDrawer" modal&gt;
  &lt;span slot="header"&gt;Default modal drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeDefaultModal"&gt;I understand
      &lt;auro-icon category="interface" name="chevron-right" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&lt;auro-drawer id="mediumModalDrawer" size="md" modal&gt;
  &lt;span slot="header"&gt;Medium drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeMediumModal"&gt;I understand
      &lt;auro-icon category="interface" name="chevron-right" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&lt;auro-drawer id="smallModalDrawer" size="sm" modal&gt;
  &lt;span slot="header"&gt;Small drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeSmallModal"&gt;I understand
      &lt;auro-icon category="interface" name="chevron-right" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Nested

To open the drawer inside a container instead of over the whole page, set the `nested` attribute.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nested.html) -->
<!-- The below content is automatically added from ./../apiExamples/nested.html -->
<div>
<auro-button id="openNested">Open nested drawer</auro-button>
</div>
<div style="height: 400px">
<auro-drawer id="nestedDrawer" nested>
<span slot="header">Default drawer</span>
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
<auro-button variant="secondary" id="closeNested">Close</auro-button>
</div>
</auro-drawer>
</div>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nested.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/nested.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openNested"&gt;Open nested drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;div style="height: 400px"&gt;
  &lt;auro-drawer id="nestedDrawer" nested&gt;
    &lt;span slot="header"&gt;Default drawer&lt;/span&gt;
    &lt;div slot="content"&gt;
      &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
      &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
      &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
      &lt;ul&gt;
        &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
        &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
        &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
        &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
      &lt;/ul&gt;
        &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed. Tortor at risus viverra adipiscing at in tellus integer feugiat. Dictum sit amet justo donec enim diam vulputate. Ullamcorper a lacus vestibulum sed arcu non. Sed cras ornare arcu dui vivamus arcu felis. Morbi tristique senectus et netus et. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Eleifend mi in nulla posuere sollicitudin aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim.&lt;/p&gt;
        &lt;p&gt;Tristique senectus et netus et. Vel pharetra vel turpis nunc eget. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Aliquet enim tortor at auctor urna nunc id. Ut consequat semper viverra nam libero justo. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Et leo duis ut diam. In dictum non consectetur a erat nam. Elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper feugiat nibh sed pulvinar proin gravida. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. In cursus turpis massa tincidunt dui ut ornare lectus sit. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.&lt;/p&gt;
        &lt;p&gt;Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Dignissim diam quis enim lobortis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Integer eget aliquet nibh praesent. Ornare massa eget egestas purus viverra accumsan in nisl. Est ultricies integer quis auctor elit sed vulputate mi sit. Feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis. Sagittis eu volutpat odio facilisis mauris.&lt;/p&gt;
        &lt;p&gt;Magnis dis parturient montes nascetur ridiculus mus. Faucibus vitae aliquet nec ullamcorper sit amet risus. In eu mi bibendum neque egestas congue quisque egestas. Nibh praesent tristique magna sit amet purus gravida quis blandit. Tincidunt id aliquet risus feugiat in ante metus dictum at. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Molestie at elementum eu facilisis sed odio. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Egestas pretium aenean pharetra magna. Venenatis urna cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quis viverra nibh cras pulvinar mattis nunc. A scelerisque purus semper eget duis at tellus at urna. Cursus turpis massa tincidunt dui ut. Purus viverra accumsan in nisl nisi scelerisque eu. Et magnis dis parturient montes nascetur ridiculus mus.&lt;/p&gt;
        &lt;p&gt;Id eu nisl nunc mi. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Platea dictumst quisque sagittis purus sit amet volutpat. Egestas congue quisque egestas diam in arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ornare suspendisse sed nisi lacus sed. Ut ornare lectus sit amet est placerat in egestas erat. Tortor aliquam nulla facilisi cras fermentum odio eu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id. Varius quam quisque id diam vel. Odio ut enim blandit volutpat maecenas volutpat. Urna cursus eget nunc scelerisque viverra mauris in aliquam.&lt;/p&gt;
        &lt;p&gt;Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisis sed odio morbi quis commodo odio. Cras adipiscing enim eu turpis egestas pretium. Dolor purus non enim praesent. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo sed. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. A pellentesque sit amet porttitor eget. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Consequat semper viverra nam libero. Vitae purus faucibus ornare suspendisse. Eget nunc lobortis mattis aliquam. Nibh nisl condimentum id venenatis a condimentum vitae. Eget egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Amet nisl purus in mollis nunc sed id semper risus. Et tortor consequat id porta nibh. Proin fermentum leo vel orci porta.&lt;/p&gt;
        &lt;p&gt;Duis ut diam quam nulla porttitor massa. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Enim eu turpis egestas pretium aenean pharetra magna. Commodo elit at imperdiet dui accumsan sit amet nulla. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris augue neque gravida in. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Neque viverra justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Mollis nunc sed id semper risus in hendrerit. Feugiat scelerisque varius morbi enim nunc. Pretium lectus quam id leo in vitae turpis massa sed. Ornare arcu odio ut sem nulla pharetra. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sit amet risus nullam eget felis eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Malesuada fames ac turpis egestas sed tempus.&lt;/p&gt;
        &lt;p&gt;Fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat nisl vel pretium lectus quam id leo in vitae. Lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id. Fermentum leo vel orci porta. Sed augue lacus viverra vitae congue. Consequat semper viverra nam libero. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Feugiat vivamus at augue eget arcu dictum varius duis. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lacus vestibulum sed arcu non odio euismod. Pulvinar sapien et ligula ullamcorper malesuada. Ut ornare lectus sit amet est placerat in egestas erat. Pharetra massa massa ultricies mi. Interdum velit euismod in pellentesque.&lt;/p&gt;
        &lt;p&gt;Duis at consectetur lorem donec. Sed vulputate mi sit amet mauris commodo quis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Eget arcu dictum varius duis. Nunc consequat interdum varius sit amet mattis. Pulvinar mattis nunc sed blandit. Sem viverra aliquet eget sit amet tellus. Vel turpis nunc eget lorem dolor sed. Pretium viverra suspendisse potenti nullam. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Odio euismod lacinia at quis risus sed vulputate odio. Imperdiet proin fermentum leo vel orci porta non pulvinar. Leo duis ut diam quam nulla porttitor massa id neque. Augue lacus viverra vitae congue eu consequat. Id cursus metus aliquam eleifend. Montes nascetur ridiculus mus mauris.&lt;/p&gt;
        &lt;p&gt;Volutpat blandit aliquam etiam erat velit scelerisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lectus sit amet est placerat in egestas erat imperdiet sed. Platea dictumst quisque sagittis purus sit. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla pharetra diam sit amet nisl suscipit adipiscing. Id aliquet lectus proin nibh nisl condimentum id venenatis. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Duis at consectetur lorem donec massa sapien faucibus et molestie.&lt;/p&gt;
    &lt;/div&gt;
    &lt;div slot="footer"&gt;
      &lt;auro-button variant="secondary" id="closeNested"&gt;Close&lt;/auro-button&gt;
    &lt;/div&gt;
  &lt;/auro-drawer&gt;
&lt;/div&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Placement

Set the edge the drawer slides in from with the `placement` attribute. The default is `right`.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/placement.html) -->
<!-- The below content is automatically added from ./../apiExamples/placement.html -->
<div>
<auro-button id="openDefaultSlide">Open default drawer</auro-button>
<auro-button id="openLeftSlide">Open left drawer</auro-button>
<auro-button id="openTopSlide">Open top drawer</auro-button>
<auro-button id="openBottomSlide">Open bottom drawer</auro-button>
</div>
<auro-drawer id="defaultSlideDrawer">
<span slot="header">Default drawer</span>
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
<auro-button variant="secondary" id="closeDefaultSlide">Close</auro-button>
</div>
</auro-drawer>
<auro-drawer id="leftSlideDrawer" placement="left">
<span slot="header">Left drawer</span>
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
<auro-button variant="secondary" id="closeLeftSlide">Close</auro-button>
</div>
</auro-drawer>
<auro-drawer id="topSlideDrawer" placement="top" size="sm">
<span slot="header">Top drawer</span>
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
<auro-button variant="secondary" id="closeTopSlide">Close</auro-button>
</div>
</auro-drawer>
<auro-drawer id="bottomSlideDrawer" placement="bottom" size="md">
<span slot="header">Bottom drawer</span>
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
<auro-button variant="secondary" id="closeBottomSlide">Close</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/placement.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/placement.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openDefaultSlide"&gt;Open default drawer&lt;/auro-button&gt;
  &lt;auro-button id="openLeftSlide"&gt;Open left drawer&lt;/auro-button&gt;
  &lt;auro-button id="openTopSlide"&gt;Open top drawer&lt;/auro-button&gt;
  &lt;auro-button id="openBottomSlide"&gt;Open bottom drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="defaultSlideDrawer"&gt;
  &lt;span slot="header"&gt;Default drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeDefaultSlide"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&lt;auro-drawer id="leftSlideDrawer" placement="left"&gt;
  &lt;span slot="header"&gt;Left drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeLeftSlide"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&#10;&lt;auro-drawer id="topSlideDrawer" placement="top" size="sm"&gt;
  &lt;span slot="header"&gt;Top drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeTopSlide"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&#10;&lt;auro-drawer id="bottomSlideDrawer" placement="bottom" size="md"&gt;
  &lt;span slot="header"&gt;Bottom drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeBottomSlide"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Size

Set the drawer's size with the `size` attribute: `sm`, `md`, or `lg`. The default is `lg`.

`size` sets the width of `left` and `right` drawers, which always fill the screen's height. For `top` and `bottom` drawers, it sets the height, and the width always fills the screen.

To make a drawer fill the screen on smaller screens, see <a href="#fullscreenBreakpoint">`fullscreenBreakpoint`</a>.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size-options.html) -->
<!-- The below content is automatically added from ./../apiExamples/size-options.html -->
<div>
<auro-button id="openDefaultSize">Open default drawer</auro-button>
<auro-button id="openMediumSize">Open medium drawer</auro-button>
<auro-button id="openSmallSize">Open small drawer</auro-button>
</div>
<auro-drawer id="defaultSizeDrawer">
<span slot="header">Default drawer</span>
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
<auro-button variant="secondary" id="closeDefaultSize">Close</auro-button>
</div>
</auro-drawer>
<auro-drawer id="mediumSizeDrawer" size="md">
<span slot="header">Medium drawer</span>
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
<auro-button variant="secondary" id="closeMediumSize">Close</auro-button>
</div>
</auro-drawer>
<auro-drawer id="smallSizeDrawer" size="sm">
<span slot="header">Small drawer</span>
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
<auro-button variant="secondary" id="closeSmallSize">Close</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size-options.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/size-options.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openDefaultSize"&gt;Open default drawer&lt;/auro-button&gt;
  &lt;auro-button id="openMediumSize"&gt;Open medium drawer&lt;/auro-button&gt;
  &lt;auro-button id="openSmallSize"&gt;Open small drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="defaultSizeDrawer"&gt;
  &lt;span slot="header"&gt;Default drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeDefaultSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&lt;auro-drawer id="mediumSizeDrawer" size="md"&gt;
  &lt;span slot="header"&gt;Medium drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeMediumSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;
&#10;&lt;auro-drawer id="smallSizeDrawer" size="sm"&gt;
  &lt;span slot="header"&gt;Small drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeSmallSize"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

### Unformatted

Use `unformatted` when you need full control of the drawer's layout. It removes the drawer's padding, header, footer, and close button, so your content fills the drawer edge to edge. Combine it with other options such as `placement` and `size`.

#### Accessibility

An unformatted drawer has no built-in heading, so add your own heading to the content.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/unformatted.html) -->
<!-- The below content is automatically added from ./../apiExamples/unformatted.html -->
<div>
<auro-button id="openUnformatted">Open unformatted drawer</auro-button>
</div>
<auro-drawer id="unformattedDrawer" unformatted size="md">
<div slot="content">
<img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="Alaska Airlines pride lights" />
<div class="unformattedWrapper">
<h1>This is a header</h1>
        These are words that are slotted into the scope of the custom element.
<div>
<auro-button variant="secondary" id="closeUnformatted">Close</auro-button>
</div>
</div>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/unformatted.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/unformatted.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openUnformatted"&gt;Open unformatted drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="unformattedDrawer" unformatted size="md"&gt;
  &lt;div slot="content"&gt;
    &lt;img style="display: block; width: 100%" src="https://blog.alaskaair.com/wp-content/uploads/2020/11/111-psp-blog-img-guide.jpg" alt="Alaska Airlines pride lights" /&gt;
    &lt;div class="unformattedWrapper"&gt;
      &lt;h1&gt;This is a header&lt;/h1&gt;
      These are words that are slotted into the scope of the custom element.
      &lt;div&gt;
        &lt;auro-button variant="secondary" id="closeUnformatted"&gt;Close&lt;/auro-button&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Slot examples

### Aria label slot

Add text to the `ariaLabel.drawer.close` slot to change what screen readers announce for the close button. Without it, screen readers announce "Close".

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slot.html) -->
<!-- The below content is automatically added from ./../apiExamples/aria-label-slot.html -->
<div>  
<auro-button id="openAriaLabelSlotDrawer">Open drawer</auro-button>
</div>
<auro-drawer id="ariaLabelSlotDrawer" size="sm" fullscreenBreakpoint="lg">
<span slot="ariaLabel.drawer.close">Close baggage rules</span>
<span slot="header">Small drawer</span>
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
<auro-icon category="interface" name="check-lg" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label-slot.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/aria-label-slot.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;  
  &lt;auro-button id="openAriaLabelSlotDrawer"&gt;Open drawer&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="ariaLabelSlotDrawer" size="sm" fullscreenBreakpoint="lg"&gt;
  &lt;span slot="ariaLabel.drawer.close"&gt;Close baggage rules&lt;/span&gt;
  &lt;span slot="header"&gt;Small drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closeAriaLabelSlotDrawer"&gt;
      I understand
      &lt;auro-icon category="interface" name="check-lg" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## CSS shadow part examples

### Customizing styles

Style the drawer with CSS `::part()`:

- `auro-drawer ::part(drawer-wrapper)`: The drawer panel, which wraps the header, content, and footer.
- `auro-drawer ::part(drawer-header)`: The heading at the top of the drawer.
- `auro-drawer ::part(drawer-content)`: The container for the drawer's body content.
- `auro-drawer ::part(drawer-footer)`: The container for the drawer's action buttons.
- `auro-drawer ::part(close-button)`: The button that closes the drawer.

The drawer backdrop can't be targeted with `::part()` because browsers don't let CSS parts target `::backdrop`. The `drawer-backdrop` part is kept for backward compatibility: it targets a decorative `<div>` behind the drawer panel.

To migrate to the new token approach, hide the legacy div and use the CSS custom properties instead:

<pre class="language-css"><code class="language-css">/* Step 1: disable the legacy backdrop div */
auro-drawer::part(drawer-backdrop) {
  display: none;
}
&#10;/* Step 2: style via tokens on the native ::backdrop */
auro-drawer {
  --auro-drawer-backdrop-background: rgba(0, 0, 0, 0.6);
  --auro-drawer-backdrop-filter: blur(4px);
}</code></pre>

| Custom property | Default | Description |
|---|---|---|
| `--auro-drawer-backdrop-background` | `transparent` | Background of the native `::backdrop`. |
| `--auro-drawer-backdrop-filter` | `none` | `backdrop-filter` applied to the native `::backdrop`, such as `blur(4px)`. |
| `--auro-drawer-backdrop-opacity` | `1` | Opacity of the native `::backdrop`. |
| `--auro-drawer-backdrop-transition` | `opacity 0.3s ease` | Transition applied to the native `::backdrop`. |

To replace the close button with a different element, use the `close` slot.

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
    /* Migrate to the token approach: disable the legacy backdrop div first,
       then style the native ::backdrop via CSS custom properties. */
    #customizedDrawer::part(drawer-backdrop) {
      display: none;
    }
    #customizedDrawer {
      --auro-drawer-backdrop-background: rgba(255, 0, 0, 0.5);
      --auro-drawer-backdrop-filter: blur(2px);
    }
</style>
<div>
<auro-button id="openCustomized">Open customized drawer</auro-button>
</div>
<auro-drawer id="customizedDrawer">
<span slot="header">Default drawer</span>
<div slot="content">
<p>When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See <auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank">alaskaair.com/bagrules</auro-hyperlink> for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.</p>
<p>Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.</p>
<auro-header level="3" display="500">Before checking your bags, remember to:</auro-header>
<ul>
<li>Caerphilly croque monsieur fondue</li>
</ul>
<auro-radio-group>
<span slot="legend">Payment method</span>
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
<ul>
<li>Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings</li>
<li>Cheddar cheese and biscuits chalk and cheese</li>
</ul>
<auro-checkbox-group>
<span slot="legend">Baggage options</span>
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
<ul>
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
<auro-button variant="secondary" id="closeCustomized">Close</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customizing.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/customizing.html -->

<pre class="language-html"><code class="language-html">&lt;style&gt;
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
  /* Migrate to the token approach: disable the legacy backdrop div first,
     then style the native ::backdrop via CSS custom properties. */
  #customizedDrawer::part(drawer-backdrop) {
    display: none;
  }
  #customizedDrawer {
    --auro-drawer-backdrop-background: rgba(255, 0, 0, 0.5);
    --auro-drawer-backdrop-filter: blur(2px);
  }
&lt;/style&gt;
&lt;div&gt;
  &lt;auro-button id="openCustomized"&gt;Open customized drawer&lt;/auro-button&gt;
&lt;/div&gt;
&lt;auro-drawer id="customizedDrawer"&gt;
  &lt;span slot="header"&gt;Default drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.&lt;/p&gt;
    &lt;p&gt;Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.&lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;Before checking your bags, remember to:&lt;/auro-header&gt;
    &lt;ul&gt;
      &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
    &lt;/ul&gt;
      &lt;auro-radio-group&gt;
        &lt;span slot="legend"&gt;Payment method&lt;/span&gt;
        &lt;auro-radio
          id="basicGroupRadio1"
          label="Credit or debit card"
          name="creditordebit"
          value="credit"
        &gt;&lt;/auro-radio&gt;
        &lt;auro-radio
          id="basicGroupRadio2"
          label="Apple Pay"
          name="applePay"
          value="applePay"
        &gt;&lt;/auro-radio&gt;
        &lt;auro-radio
          id="basicGroupRadio3"
          label="Alaska Airlines Commercial Account"
          name="alaskaCommercial"
          value="alaskaCommercial"
        &gt;&lt;/auro-radio&gt;
      &lt;/auro-radio-group&gt;
      &lt;auro-input placeholder="John Doe" bordered required&gt;
        &lt;span slot="label"&gt;Full name&lt;/span&gt;
        &lt;span slot="helptext"&gt;Please enter your full name.&lt;/span&gt;
      &lt;/auro-input&gt;
    &lt;ul&gt;
      &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
      &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
    &lt;/ul&gt;
      &lt;auro-checkbox-group&gt;
        &lt;span slot="legend"&gt;Baggage options&lt;/span&gt;
        &lt;auro-checkbox value="value1" name="basic" id="checkbox-basic1"
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
        &lt;auro-checkbox value="value2" name="basic" id="checkbox-basic2" checked
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
        &lt;auro-checkbox value="value3" name="basic" id="checkbox-basic3"
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
        &lt;auro-checkbox value="value4" name="basic" id="checkbox-basic4"
          &gt;Checkbox option&lt;/auro-checkbox
        &gt;
      &lt;/auro-checkbox-group&gt;
&#10;    &lt;ul&gt;
      &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
    &lt;/ul&gt;
      &lt;p&gt;Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi quis commodo odio aenean sed. Tortor at risus viverra adipiscing at in tellus integer feugiat. Dictum sit amet justo donec enim diam vulputate. Ullamcorper a lacus vestibulum sed arcu non. Sed cras ornare arcu dui vivamus arcu felis. Morbi tristique senectus et netus et. Ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Eleifend mi in nulla posuere sollicitudin aliquam. Dolor sed viverra ipsum nunc aliquet bibendum enim.&lt;/p&gt;
      &lt;p&gt;Tristique senectus et netus et. Vel pharetra vel turpis nunc eget. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. Aliquet enim tortor at auctor urna nunc id. Ut consequat semper viverra nam libero justo. Magna ac placerat vestibulum lectus mauris ultrices eros in cursus. Et leo duis ut diam. In dictum non consectetur a erat nam. Elementum nibh tellus molestie nunc. Elementum tempus egestas sed sed risus pretium quam vulputate dignissim. Luctus venenatis lectus magna fringilla urna porttitor rhoncus. Semper feugiat nibh sed pulvinar proin gravida. Eget nunc scelerisque viverra mauris in aliquam sem fringilla. In cursus turpis massa tincidunt dui ut ornare lectus sit. Sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec pretium.&lt;/p&gt;
      &lt;p&gt;Libero volutpat sed cras ornare arcu dui vivamus arcu felis. Dignissim diam quis enim lobortis. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Integer eget aliquet nibh praesent. Ornare massa eget egestas purus viverra accumsan in nisl. Est ultricies integer quis auctor elit sed vulputate mi sit. Feugiat scelerisque varius morbi enim nunc faucibus. Pellentesque adipiscing commodo elit at imperdiet dui. Nam at lectus urna duis convallis. Sagittis eu volutpat odio facilisis mauris.&lt;/p&gt;
      &lt;p&gt;Magnis dis parturient montes nascetur ridiculus mus. Faucibus vitae aliquet nec ullamcorper sit amet risus. In eu mi bibendum neque egestas congue quisque egestas. Nibh praesent tristique magna sit amet purus gravida quis blandit. Tincidunt id aliquet risus feugiat in ante metus dictum at. Vitae elementum curabitur vitae nunc sed velit dignissim sodales ut. Molestie at elementum eu facilisis sed odio. Odio facilisis mauris sit amet massa vitae tortor condimentum lacinia. Egestas pretium aenean pharetra magna. Venenatis urna cursus eget nunc scelerisque viverra mauris. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Blandit aliquam etiam erat velit scelerisque in dictum non consectetur. Tempor commodo ullamcorper a lacus vestibulum sed arcu. Quis viverra nibh cras pulvinar mattis nunc. A scelerisque purus semper eget duis at tellus at urna. Cursus turpis massa tincidunt dui ut. Purus viverra accumsan in nisl nisi scelerisque eu. Et magnis dis parturient montes nascetur ridiculus mus.&lt;/p&gt;
      &lt;p&gt;Id eu nisl nunc mi. Curabitur gravida arcu ac tortor dignissim convallis aenean et tortor. Platea dictumst quisque sagittis purus sit amet volutpat. Egestas congue quisque egestas diam in arcu cursus. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ornare suspendisse sed nisi lacus sed. Ut ornare lectus sit amet est placerat in egestas erat. Tortor aliquam nulla facilisi cras fermentum odio eu. Magna etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque nec nam aliquam sem et tortor consequat id. Varius quam quisque id diam vel. Odio ut enim blandit volutpat maecenas volutpat. Urna cursus eget nunc scelerisque viverra mauris in aliquam.&lt;/p&gt;
      &lt;p&gt;Interdum consectetur libero id faucibus nisl tincidunt eget nullam. Facilisis sed odio morbi quis commodo odio. Cras adipiscing enim eu turpis egestas pretium. Dolor purus non enim praesent. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo sed. Mauris in aliquam sem fringilla ut morbi tincidunt augue interdum. A pellentesque sit amet porttitor eget. Nulla pharetra diam sit amet nisl suscipit adipiscing bibendum. Consequat semper viverra nam libero. Vitae purus faucibus ornare suspendisse. Eget nunc lobortis mattis aliquam. Nibh nisl condimentum id venenatis a condimentum vitae. Eget egestas purus viverra accumsan in nisl. Leo in vitae turpis massa sed elementum tempus. Amet nisl purus in mollis nunc sed id semper risus. Et tortor consequat id porta nibh. Proin fermentum leo vel orci porta.&lt;/p&gt;
      &lt;p&gt;Duis ut diam quam nulla porttitor massa. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut consequat. Volutpat ac tincidunt vitae semper quis lectus nulla at volutpat. Enim eu turpis egestas pretium aenean pharetra magna. Commodo elit at imperdiet dui accumsan sit amet nulla. Eget felis eget nunc lobortis mattis aliquam faucibus purus in. Mauris augue neque gravida in. Viverra accumsan in nisl nisi scelerisque eu ultrices vitae auctor. Neque viverra justo nec ultrices dui sapien eget mi proin. Sit amet consectetur adipiscing elit ut aliquam purus sit amet. Mollis nunc sed id semper risus in hendrerit. Feugiat scelerisque varius morbi enim nunc. Pretium lectus quam id leo in vitae turpis massa sed. Ornare arcu odio ut sem nulla pharetra. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Sit amet risus nullam eget felis eget. Lorem ipsum dolor sit amet consectetur adipiscing elit. Ac turpis egestas integer eget aliquet nibh praesent tristique magna. Malesuada fames ac turpis egestas sed tempus.&lt;/p&gt;
      &lt;p&gt;Fusce ut placerat orci nulla pellentesque dignissim enim sit. Consequat nisl vel pretium lectus quam id leo in vitae. Lectus urna duis convallis convallis tellus id interdum. Arcu risus quis varius quam quisque id. Fermentum leo vel orci porta. Sed augue lacus viverra vitae congue. Consequat semper viverra nam libero. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat. Feugiat vivamus at augue eget arcu dictum varius duis. Fringilla urna porttitor rhoncus dolor purus non enim praesent elementum. Lacus vestibulum sed arcu non odio euismod. Pulvinar sapien et ligula ullamcorper malesuada. Ut ornare lectus sit amet est placerat in egestas erat. Pharetra massa massa ultricies mi. Interdum velit euismod in pellentesque.&lt;/p&gt;
      &lt;p&gt;Duis at consectetur lorem donec. Sed vulputate mi sit amet mauris commodo quis. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Eget arcu dictum varius duis. Nunc consequat interdum varius sit amet mattis. Pulvinar mattis nunc sed blandit. Sem viverra aliquet eget sit amet tellus. Vel turpis nunc eget lorem dolor sed. Pretium viverra suspendisse potenti nullam. Dui nunc mattis enim ut tellus elementum sagittis vitae et. Odio euismod lacinia at quis risus sed vulputate odio. Imperdiet proin fermentum leo vel orci porta non pulvinar. Leo duis ut diam quam nulla porttitor massa id neque. Augue lacus viverra vitae congue eu consequat. Id cursus metus aliquam eleifend. Montes nascetur ridiculus mus mauris.&lt;/p&gt;
      &lt;p&gt;Volutpat blandit aliquam etiam erat velit scelerisque. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Lectus sit amet est placerat in egestas erat imperdiet sed. Platea dictumst quisque sagittis purus sit. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Cursus euismod quis viverra nibh cras pulvinar mattis nunc. Nulla pharetra diam sit amet nisl suscipit adipiscing. Id aliquet lectus proin nibh nisl condimentum id venenatis. Phasellus faucibus scelerisque eleifend donec pretium vulputate. Vulputate eu scelerisque felis imperdiet proin fermentum leo. Duis at consectetur lorem donec massa sapien faucibus et molestie.&lt;/p&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button variant="secondary" id="closeCustomized"&gt;Close&lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Common usage patterns

### Drawer with dropdown components

Shows a popover and a combobox inside a drawer, creating a stack of layered components.

<div class="exampleWrapper">
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- The below content is automatically added from ./../apiExamples/popover-and-dropdown.html -->
<div>
<auro-button id="openPopAndDrop">Open drawer with popover</auro-button>
</div>
<auro-drawer id="popover-drawer" size="sm">
<span slot="header">Small drawer</span>
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
<auro-icon category="interface" name="check-lg" appearance="inverse"></auro-icon>
</auro-button>
</div>
</auro-drawer>
<!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
<span slot="trigger">See code</span>
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- The below code snippet is automatically added from ./../apiExamples/popover-and-dropdown.html -->

<pre class="language-html"><code class="language-html">&lt;div&gt;
  &lt;auro-button id="openPopAndDrop"&gt;Open drawer with popover&lt;/auro-button&gt;
&lt;/div&gt;
&#10;&lt;auro-drawer id="popover-drawer" size="sm"&gt;
  &lt;span slot="header"&gt;Small drawer&lt;/span&gt;
  &lt;div slot="content"&gt;
    &lt;p&gt;
      When traveling on Alaska Airlines flights, Alaska Airlines checked baggage fees may apply. See &lt;auro-hyperlink href="https://www.alaskaair.com/bagrules" target="_blank"&gt;alaskaair.com/bagrules&lt;/auro-hyperlink&gt; for our rules. For itineraries that include other airlines, their checked baggage fees may apply, as displayed on their websites.
    &lt;/p&gt;
    &lt;p&gt;
      Baggage rules and fees will be based on the specific itinerary chosen. The applicable first and second bag fees will be displayed after you have added flights to the cart.
    &lt;/p&gt;
    &lt;auro-header level="3" display="500"&gt;
      Before checking your bags, remember to:
    &lt;/auro-header&gt;
    &lt;auro-popover&gt;
      &lt;div class="content"&gt;
        &lt;ul&gt;
          &lt;li&gt;Caerphilly croque monsieur fondue&lt;/li&gt;
          &lt;li&gt;Taleggio goat mascarpone cow manchego cheese and wine emmental cheese strings&lt;/li&gt;
          &lt;li&gt;Cheddar cheese and biscuits chalk and cheese&lt;/li&gt;
          &lt;li&gt;Camembert de normandie stinking bishop bavarian bergkase&lt;/li&gt;
        &lt;/ul&gt;
      &lt;/div&gt;
      &lt;auro-hyperlink slot="trigger" href="#"&gt;Hover on me&lt;/auro-hyperlink&gt;
    &lt;/auro-popover&gt;
    &lt;auro-combobox&gt;
      &lt;span slot="label"&gt;Name&lt;/span&gt;
      &lt;auro-menu&gt;
        &lt;auro-menuoption value="Apples" id="option-0"&gt;Apples&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Oranges" id="option-1"&gt;Oranges&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Peaches" id="option-2"&gt;Peaches&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Grapes" id="option-3"&gt;Grapes&lt;/auro-menuoption&gt;
        &lt;auro-menuoption value="Cherries" id="option-4"&gt;Cherries&lt;/auro-menuoption&gt;
        &lt;auro-menuoption static nomatch&gt;No matching option&lt;/auro-menuoption&gt;
      &lt;/auro-menu&gt;
    &lt;/auro-combobox&gt;
  &lt;/div&gt;
  &lt;div slot="footer"&gt;
    &lt;auro-button id="closePopAndDrop"&gt;
      I understand
      &lt;auro-icon category="interface" name="check-lg" appearance="inverse"&gt;&lt;/auro-icon&gt;
    &lt;/auro-button&gt;
  &lt;/div&gt;
&lt;/auro-drawer&gt;</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/drawerContentTokens.scss) -->
<!-- The below code snippet is automatically added from ./../src/styles/drawerContentTokens.scss -->

<pre class="language-scss"><code class="language-scss">@use "@aurodesignsystem/design-tokens/dist/legacy/auro-classic/SCSSVariables" as vac;
@use "@aurodesignsystem/design-tokens/dist/themes/alaska/SCSSVariables--alaska" as v;
&#10;:host {
  --_container-color-default: var(--ds-basic-color-surface-default, #{v.$ds-basic-color-surface-default});
  --_text-color-default: var(--ds-basic-color-texticon-default, #{v.$ds-basic-color-texticon-default});
}</code></pre>
<!-- AURO-GENERATED-CONTENT:END -->
