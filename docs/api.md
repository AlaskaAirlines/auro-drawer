# auro-drawer

## Properties

| Property               | Attribute              | Type      | Default | Description                                      |
|------------------------|------------------------|-----------|---------|--------------------------------------------------|
| `fullscreenBreakpoint` | `fullscreenBreakpoint` | `string`  | "sm"    | Defines the screen size breakpoint (`lg`, `md`, `sm`, or `xs`) at which the dropdown switches to fullscreen mode on mobile.<br />When expanded, the dropdown will automatically display in fullscreen mode if the screen size is equal to or smaller than the selected breakpoint. |
| `isPopoverVisible`     | `open`                 | `boolean` |         | Sets state of drawer to open.                    |
| `modal`                | `modal`                | `boolean` | "false" | Modal drawer restricts the user to take an action (no default close actions). |
| `nested`               | `nested`               | `boolean` | "false" | Sets the anchor placement for the bib. If true, bib will open based off its parennt size and position. |
| `onDark`               | `onDark`               | `boolean` | "false" | Sets close icon to white for dark backgrounds.   |
| `placement`            | `placement`            | `string`  | "right" | Sets the placement of drawer bib to `right`, `left`, `top`, `bottom` |
| `size`                 | `size`                 | `string`  | "lg"    | Sets the size of drawer bib to `sm`, `md`, `lg`  |
| `triggerElement`       |                        |           |         | The element to focus when the drawer is closed. If not set, defaults to the value of document.activeElement when the drawer is opened. |
| `unformatted`          | `unformatted`          | `boolean` | "false" | Unformatted drawer window, edge-to-edge fill for content. |

## Events

| Event                | Description                                      |
|----------------------|--------------------------------------------------|
| `auroDrawer-toggled` | Event fired when the drawer is toggled open or closed. |

## Slots

| Name     | Description                                  |
|----------|----------------------------------------------|
|          | Default slot for the body content in drawer. |
| `footer` | Used for action options, e.g. buttons.       |
| `header` | Text to display as the header of the modal.  |
