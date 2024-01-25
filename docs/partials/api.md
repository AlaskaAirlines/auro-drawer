<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

### Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>
<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Drawer slide-in options (<a name="left"></a>`left`, default)

The auro-drawer supports two different entry options. Using the `left` attribute, the component supports this slide-in mode for both mobile and desktop experiences.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/slideOptions.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/slideOptions.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Drawer size options (<a name="sm"></a>`sm`, <a name="md"></a>`md`)

The auro-drawer supports three different sizes. A default drawer is equal to the large size drawer. Using the `sm` and `md` attributes, the component supports these sizes for both mobile and desktop.

The size attribute effects the `width` of the desktop drawer. Its `height` is always 100%. On mobile, the `size` attribute effects the `maximum width` the drawer will use of the device screen.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/sizeOptions.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/sizeOptions.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### <a name="modal"></a>`modal`

The auro-drawer supports a modal drawer state that will lock a user into interacting with the `modal` drawer. To activate, use the modal attribute.

When using this state, the modal drawer must include a button action to dismiss the modal drawer as the closing icon will not be available and the user will not be able to click outside the modal drawer to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/modal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/modal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Drawer with Decoupled Experiences

For use case where the size of the drawer on desktop should not influence the size of the drawer on mobile, the combination API of `sm lg` and `md lg` can be used.

The use of these combinations will set the first value to the drawer for a desktop experience. The second value will set the mobile experience to be up to 90% of the screen.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/decoupled.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/decoupled.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Drawer with Popover and Dropdown Components

This is a use case where there is a popover and combobox component inside the drawer component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/popoverAndDropdown.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/popoverAndDropdown.html) -->
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
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/accessibility.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Edit close button position

When using the drawer with the `unformatted` attribute, some may want to adjust the positioning of the X close button. This can be addressed using the CSS `::part` CSS pseudo-element API.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../../apiExamples/editCloseButton.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../../apiExamples/editCloseButton.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
