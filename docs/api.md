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

```html
<auro-drawer open>
  <span slot="header">Baggage rules</span>
  <div slot="content">Drawer content goes here.</div>
</auro-drawer>
```

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
| header                 | The heading text at the top of the drawer. Not shown when `unformatted` is set.                                                                |

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