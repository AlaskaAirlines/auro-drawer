<!--
The demo.md file is a compiled document. No edits should be made directly to this file.
README.md is created by running `npm run build:docs`.
This file is generated based on a template fetched from `./docs/partials/demo.md`
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
function toggleDrawer(elem) {
  let drawer = document.querySelector(elem);

  drawer.hasAttribute('open')
  ? drawer.removeAttribute("open")
  : (drawer.removeAttribute("open"),
    drawer.setAttribute("open", true))
}

// This function can be retrieved from https://cdn.jsdelivr.net/npm/@aurodesignsystem/auro-drawer@latest/dist/toggleDrawer.js
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
