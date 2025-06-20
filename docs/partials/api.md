<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## API Examples

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

### <a name="fullscreenBreakpoint">`fullscreenBreakpoint`</a>

On mobile view, adding the fullscreenBreakpoint="{breakpoint-token}" will switch the drawer to fullscreen mode.
The default breakpoint is "sm".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fullscreenBreakpoint.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fullscreenBreakpoint.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


### <a name="modal">`modal`</a>

The auro-drawer supports a modal drawer state that will lock a user into interacting with the `modal` drawer. To activate, use the modal attribute.

When using this state, the modal drawer must include a button action to dismiss the modal drawer as the closing icon will not be available and the user will not be able to click outside the modal drawer to dismiss.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/modal.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/modal.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### <a name="nested">`nested`</a>

In case the drawer should sit inside of a container, not to the body, set `nested` attribute.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/nested.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/nested.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


### <a name="placement">`placement`</a>

You can set the position where the drawer should sit 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/placement.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/placement.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### <a name="size">`size`</a>

The auro-drawer supports three different sizes. A default drawer is equal to the large size drawer. 

The size attribute controls the width of left and right drawers, which always have a height of 100%.
For top and bottom drawers, size controls the height, and the width is always 100%.

For mobile or small screen, read <a href="#fullscreenBreakpoint">`fullscreenBreakpoint`</a>

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/sizeOptions.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/sizeOptions.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


### Drawer with Dropdown Components

This is a use case where there is a popover and combobox component inside the drawer component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popoverAndDropdown.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popoverAndDropdown.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### <a name="unformatted">`unformatted`</a>

For use case where the use of a drawer is to be more freeform, but the experience and base tooling for the drawer are still requested, there is the `unformatted` property.

This property can be used in combination of any other use case of the drawer, but it will render a unformatted drawer window allowing for full customization of content within the scope of the window.

#### Accessibility

Within the scope of the auro-drawer there is `aria-labelledby="drawer-header"`. To make proper use of this, in an unformatted drawer, the developer is required to add `id="drawer-header"` to the content header within the drawer content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/accessibility.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/accessibility.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>



### Customizing Styles

The drawer's size and some styles can be styled using CSS `part`.

- `auro-drawer ::part(drawer-wrapper)` to style the container of the drawer content.
- `auro-drawer ::part(drawer-header)` to style the header.
- `auro-drawer ::part(drawer-content)` to style the content wrapper.
- `auro-drawer ::part(drawer-footer)` to style the footer.
- `auro-drawer ::part(close-button)` to style the close button.

`close` slot can be used to replace the close button to a different element.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customizing.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customizing.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>
