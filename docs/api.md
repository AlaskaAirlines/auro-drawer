# auro-drawer

## Properties

| Property               | Attribute              | Type      | Default | Description                                      |
|------------------------|------------------------|-----------|---------|--------------------------------------------------|
| `fullscreenBreakpoint` | `fullscreenBreakpoint` | `string`  | "sm"    | Defines the screen size breakpoint (`lg`, `md`, `sm`, or `xs`) at which the drawer switches to fullscreen mode on mobile.<br />When expanded, the drawer will automatically display in fullscreen mode if the screen size is equal to or smaller than the selected breakpoint. |
| `isPopoverVisible`     | `open`                 | `boolean` | "false" | Sets state of drawer to open.                    |
| `modal`                | `modal`                | `boolean` | "false" | Modal drawer restricts the user to take an action (no default close actions). |
| `nested`               | `nested`               | `boolean` | "false" | Sets the anchor placement for the bib. If true, bib will open based off its parent size and position. |
| `onDark`               | `onDark`               | `boolean` | "false" | Sets close icon to white for dark backgrounds.   |
| `placement`            | `placement`            | `string`  | "right" | Sets the placement of drawer bib to `right`, `left`, `top`, `bottom`. |
| `size`                 | `size`                 | `string`  | "lg"    | Sets the size of drawer bib to `sm`, `md`, `lg`. |
| `triggerElement`       |                        |           |         | The element to focus when the drawer is closed.  |
| `unformatted`          | `unformatted`          | `boolean` | "false" | Unformatted drawer window, edge-to-edge fill for content. |

## Events

| Event                | Description                                      |
|----------------------|--------------------------------------------------|
| `auroDrawer-toggled` | Event fired when the drawer is toggled open or closed. |

## Slots

| Name                     | Description                                      |
|--------------------------|--------------------------------------------------|
|                          | Default slot for the body content in drawer.     |
| `ariaLabel.drawer.close` | Text to describe the "x" icon close button for screen readers. Default: "Close". |
| `close`                  | Used to replace the close button.                |
| `footer`                 | Used for action options, e.g. buttons.           |
| `header`                 | Text to display as the header of the modal.      |

## CSS Shadow Parts

| Part              | Description                                      |
|-------------------|--------------------------------------------------|
| `close-button`    | to style the close button.                       |
| `drawer-backdrop` | to style the backdrop behind the the content wrapper. |
| `drawer-content`  | to style the container of the drawer content.    |
| `drawer-footer`   | to style the footer.                             |
| `drawer-header`   | to style the header.                             |
| `drawer-wrapper`  | to style the content wrapper.                    |
