<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE. THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Drawer
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
## Use cases
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## The setup

Set the `open` attribute to open the drawer, and remove it to close the drawer. This demo installs the following function to do that:

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

Add a trigger that calls the function. In this example, an `auro-button` toggles the drawer with the ID `demo1`:

``` html
<auro-button onClick="toggleDrawer('#demo1')">Open Drawer</auro-button>
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
```

Use the `footer` slot for action buttons.
 
## Examples

### Basic
 
<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
 
<auro-accordion alignRight>
  <span slot="trigger">See code</span>
 
<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
</auro-accordion>
 