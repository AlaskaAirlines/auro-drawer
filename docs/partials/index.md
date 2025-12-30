<!--
 THIS PAGE'S CONTENT SHOULD BE KEPT MINIMAL.
 ONLY ADD EXAMPLES THAT ARE TRULY NECESSARY FOR THE INDEX PAGE — THE BASIC EXAMPLE IS USUALLY ENOUGH.
 ALL OTHER EXAMPLES SHOULD GO IN THE API DOCUMENTATION.
-->

# Drawer
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/description.md) -->
<!-- AURO-GENERATED-CONTENT:END -->
 
## Use Cases
 
<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/partials/useCases.md) -->
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
 