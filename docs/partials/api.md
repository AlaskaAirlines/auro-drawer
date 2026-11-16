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

## Property and attribute examples

### Close button appearance on a customized drawer

If you give the drawer a dark background, the close button can be hard to see. Set `closeButtonAppearance` (the `close-button-appearance` attribute) to `inverse` to make it light.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/close-button-appearance.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/close-button-appearance.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

### Fullscreen breakpoint

Set `fullscreenBreakpoint` to `xs`, `sm`, `md`, or `lg` to make the drawer fill the screen at that screen width and smaller. The default is `sm`.

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

In a modal drawer, people must act on the drawer's content, because pressing Escape or clicking outside it doesn't close it. To turn it on, set the `modal` attribute.

A modal drawer has no close button, so include a button that closes it.

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

To open the drawer inside a container instead of over the whole page, set the `nested` attribute.

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

Set the edge the drawer slides in from with the `placement` attribute. The default is `right`.

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

Set the drawer's size with the `size` attribute: `sm`, `md`, or `lg`. The default is `lg`.

`size` sets the width of `left` and `right` drawers, which always fill the screen's height. For `top` and `bottom` drawers, it sets the height, and the width always fills the screen.

To make a drawer fill the screen on smaller screens, see <a href="#fullscreenBreakpoint">`fullscreenBreakpoint`</a>.

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

Use `unformatted` when you need full control of the drawer's layout. It removes the drawer's padding, header, footer, and close button, so your content fills the drawer edge to edge. Combine it with other options such as `placement` and `size`.

#### Accessibility

An unformatted drawer has no built-in heading, so add your own heading to the content.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/unformatted.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/unformatted.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Slot examples

### Aria label slot

Add text to the `ariaLabel.drawer.close` slot to change what screen readers announce for the close button. Without it, screen readers announce "Close".

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/aria-label-slot.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/aria-label-slot.html) -->
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

| Custom property | Default | Description |
|---|---|---|
| `--auro-drawer-backdrop-background` | `transparent` | Background of the native `::backdrop`. |
| `--auro-drawer-backdrop-filter` | `none` | `backdrop-filter` applied to the native `::backdrop`, such as `blur(4px)`. |
| `--auro-drawer-backdrop-opacity` | `1` | Opacity of the native `::backdrop`. |
| `--auro-drawer-backdrop-transition` | `opacity 0.3s ease` | Transition applied to the native `::backdrop`. |

To replace the close button with a different element, use the `close` slot.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/customizing.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/customizing.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Common usage patterns

### Drawer with dropdown components

Shows a popover and a combobox inside a drawer, creating a stack of layered components.

<div class="exampleWrapper">
  <!-- AURO-GENERATED-CONTENT:START (FILE:src=./../apiExamples/popover-and-dropdown.html) -->
  <!-- AURO-GENERATED-CONTENT:END -->
</div>

<auro-accordion alignRight>
  <span slot="trigger">See code</span>

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../apiExamples/popover-and-dropdown.html) -->
<!-- AURO-GENERATED-CONTENT:END -->

</auro-accordion>

## Restyle with CSS custom properties

Restyle the component by changing the values of the following tokens.

<!-- AURO-GENERATED-CONTENT:START (CODE:src=./../src/styles/drawerContentTokens.scss) -->
<!-- AURO-GENERATED-CONTENT:END -->

