<!-- AURO-GENERATED-CONTENT:START (FILE:src=./../docs/api.md) -->
<!-- AURO-GENERATED-CONTENT:END -->

## Basic

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/basic.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/basic.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Property & Attribute Examples

### Close Button Appearance on Customized Drawer

If the drawer is customized to have a dark background, the close button may not be visible. 
You can change the button's appearance by using `closeButtonAppearance` property (`close-button-appearance` attribute).


<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/close-button-appearance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/close-button-appearance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Fullscreen Breakpoint

On mobile view, adding the `fullscreenBreakpoint="{breakpoint-token}"` will switch the drawer to fullscreen mode.
The default breakpoint is `sm`.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/fullscreen-breakpoint.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/fullscreen-breakpoint.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Modal

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

### Nested

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

### Placement

You can set the position where the drawer should sit by using the `placement` attribute. The default placement is `right`. 

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/placement.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/placement.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Size

The `auro-drawer` element supports three different sizes. A default drawer is equal to the `lg` size drawer. 

The size attribute controls the width of left and right drawers, which always have a height of 100%.
For top and bottom drawers, size controls the height, and the width is always 100%.

For mobile or small screen, read <a href="#fullscreenBreakpoint">`fullscreenBreakpoint`</a>

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/size-options.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/size-options.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Unformatted

For use case where the use of a drawer is to be more freeform, but the experience and base tooling for the drawer are still requested, there is the `unformatted` property.

This property can be used in combination of any other use case of the drawer, but it will render a unformatted drawer window allowing for full customization of content within the scope of the window.

#### Accessibility

Within the scope of the auro-drawer there is `aria-labelledby="drawer-header"`. To make proper use of this, in an unformatted drawer, the developer is required to add `id="drawer-header"` to the content header within the drawer content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/unformatted.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/unformatted.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slot Examples

### Aria Label Slot

To customize the aria-label text for the close button, use the `ariaLabel.drawer.close` slot to provide custom text. If no text is provided, the default text `"Close"` will be used.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label-slot.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## CSS Shadow Part Examples

### Customizing Styles

The drawer's size and some styles can be styled using CSS `part`.

- `auro-drawer::part(drawer-wrapper)` to style the container of the drawer content (the drawer panel itself).
- `auro-drawer ::part(drawer-header)` to style the header.
- `auro-drawer ::part(drawer-content)` to style the content wrapper.
- `auro-drawer ::part(drawer-footer)` to style the footer.
- `auro-drawer ::part(close-button)` to style the close button.

The drawer backdrop cannot be targeted via `::part()` because browser restrictions prevent CSS parts from targeting `::backdrop`. The `drawer-backdrop` part is kept for backwards compatibility — it targets a decorative `<div>` that sits behind the drawer panel.

To migrate to the new token approach, hide the legacy div and use the CSS custom properties instead:

```css
/* Step 1: disable the legacy backdrop div */
auro-drawer::part(drawer-backdrop) {
  display: none;
}

/* Step 2: style via tokens on the native ::backdrop */
auro-drawer {
  --auro-drawer-backdrop-background: rgba(0, 0, 0, 0.6);
  --auro-drawer-backdrop-filter: blur(4px);
}
```

| Custom Property | Default | Description |
|---|---|---|
| `--auro-drawer-backdrop-background` | `transparent` | Background of the native `::backdrop`. |
| `--auro-drawer-backdrop-filter` | `none` | `backdrop-filter` applied to the native `::backdrop` (e.g. `blur(4px)`). |
| `--auro-drawer-backdrop-opacity` | `1` | Opacity of the native `::backdrop`. |
| `--auro-drawer-backdrop-transition` | `opacity 0.3s ease` | Transition applied to the native `::backdrop`. |

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

## Common Usage Patterns & Functional Examples

### Drawer with Dropdown Components

This is a use case where there is a popover and combobox component inside the drawer component, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popover-and-dropdown.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>


