<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Drawer

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- The below content is automatically added from ./../docs/partials/description.md -->
A panel that slides in from the edge of the screen and moves focus from the page to the drawer's content. Use it when people need to see or act on content before they go back to what they were doing.

A modal drawer goes further: people must act on its content to continue, because pressing Escape or clicking outside it doesn't close it. Add a button that closes a modal drawer.
<!-- AURO-GENERATED-CONTENT:END -->

## Use cases

<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- The below content is automatically added from ./../docs/partials/useCases.md -->
Use `auro-drawer` when people may need to:

* Take an action before doing anything else or going back.
* View content, with the option to close it.
<!-- AURO-GENERATED-CONTENT:END -->

## The setup

Set the `open` attribute to open the drawer, and remove it to close the drawer. This demo installs the following function to do that:

<pre class="language-javascript"><code class="language-javascript">function toggleDrawer(drawerID) {
  const drawer = document.querySelector(drawerID);
&#10;  if (drawer.hasAttribute('open')) {
    drawer.removeAttribute('open');
  } else {
    drawer.setAttribute('open', true);
  }
}</code></pre>

Add a trigger that calls the function. In this example, an `auro-button` toggles the drawer with the ID `demo1`:

``` html
<auro-button onClick="toggleDrawer('#demo1')">Open drawer</auro-button>
```

## The structure

Put your content in the `header`, `content`, and `footer` slots. The following scaffolding shows where each one goes.

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
<pre class="language-html"><code class="language-html">&#10;Use the `footer` slot for action buttons.
&#10;## Examples
&#10;### Basic
&#10;&lt;div class="exampleWrapper"&gt;
  &lt;!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) --&gt;
  &lt;!-- The below content is automatically added from ./../apiExamples/basic.html --&gt;
  &lt;div&gt;
    &lt;auro-button id="openBasic"&gt;Open default drawer&lt;/auro-button&gt;
  &lt;/div&gt;
  &lt;auro-drawer id="defaultDrawer"&gt;
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
  &lt;/auro-drawer&gt;
  &lt;!-- AURO-GENERATED-CONTENT:END --&gt;
&lt;/div&gt;
&lt;auro-accordion alignRight&gt;
  &lt;span slot="trigger"&gt;See code&lt;/span&gt;
&lt;!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) --&gt;
&lt;!-- The below code snippet is automatically added from ./../apiExamples/basic.html --&gt;
&#10;```html
&lt;div&gt;
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
 