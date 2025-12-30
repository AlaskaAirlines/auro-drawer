# auro-drawer

The `auro-drawer` element provides users a way to implement an expandable drawer component.

### Properties & Attributes

| Properties            | Attributes              | Modifiers | Type                                   | Default   | Description                                                                                                                                                                                                                                       |
| --------------------- | ----------------------- | --------- | -------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| closeButtonAppearance | close-button-appearance |           | string                                 | `default` | Defines whether the close button should be light colored for use on dark backgrounds.                                                                                                                                                             |
| fullscreenBreakpoint  | fullscreenBreakpoint    |           | `lg` \| `md` \| `sm` \| `xs`           | `sm`      | Defines the screen size breakpoint, at which the drawer switches to fullscreen mode on mobile.<br>When expanded, the drawer will automatically display in fullscreen mode if the screen size is equal to or smaller than the selected breakpoint. |
| modal                 | modal                   |           | boolean                                |           | Modal drawer restricts the user to take an action (no default close actions).                                                                                                                                                                     |
| nested                | nested                  |           | boolean                                |           | Sets the anchor placement for the bib. If true, bib will open based off its parent size and position.                                                                                                                                             |
| onDark                | onDark                  |           | boolean                                |           | DEPRECATED - use `closeButtonAppearance` instead.                                                                                                                                                                                                 |
| placement             | placement               |           | `right` \| `left` \| `top` \| `bottom` | `right`   | Sets the placement of drawer bib.                                                                                                                                                                                                                 |
| size                  | size                    |           | `sm` \| `md` \| `lg`                   | `lg`      | Sets the size of drawer bib.                                                                                                                                                                                                                      |
| unformatted           | unformatted             |           | boolean                                |           | Unformatted drawer window, edge-to-edge fill for content.                                                                                                                                                                                         |

### Methods

| Name     | Parameters                                                           | Return | Description                                       |
| -------- | -------------------------------------------------------------------- | ------ | ------------------------------------------------- |
| register | `name` (string) - The name of the element that you want to register. |        | This will register this element with the browser. |

### Events

| Name               | Description                                            |
| ------------------ | ------------------------------------------------------ |
| auroDrawer-toggled | Event fired when the drawer is toggled open or closed. |

### Slots

| Name                   | Description                                                                      |
| ---------------------- | -------------------------------------------------------------------------------- |
| (default)              | Default slot for the body content in drawer.                                     |
| ariaLabel.drawer.close | Text to describe the "x" icon close button for screen readers. Default: "Close". |
| close                  | Used to replace the close button.                                                |
| footer                 | Used for action options, e.g. buttons.                                           |
| header                 | Text to display as the header of the modal.                                      |

### CSS Shadow Parts

| Name            | Description                                           |
| --------------- | ----------------------------------------------------- |
| close-button    | to style the close button.                            |
| drawer-backdrop | to style the backdrop behind the the content wrapper. |
| drawer-content  | to style the container of the drawer content.         |
| drawer-footer   | to style the footer.                                  |
| drawer-header   | to style the header.                                  |
| drawer-wrapper  | to style the content wrapper.                         |