# auro-drawer

## Attributes

| Attribute | Type      | Description                                      |
|-----------|-----------|--------------------------------------------------|
| `left`    | `Boolean` | Sets drawer box to open from the left            |
| `md`      | `Boolean` | Sets drawer box to medium style. Adding both md and lg will set the drawer to md for desktop and lg for mobile. |
| `onDark`  | `Boolean` | Sets close icon to white for dark backgrounds    |
| `sm`      | `Boolean` | Sets drawer box to small style. Adding both sm and lg will set the drawer to sm for desktop and lg for mobile. |

## Properties

| Property         | Attribute     | Type          | Default | Description                                      |
|------------------|---------------|---------------|---------|--------------------------------------------------|
| `modal`          | `modal`       | `Boolean`     | false   | Modal drawer restricts the user to take an action (no default close actions) |
| `open`           | `open`        | `Boolean`     |         | Sets state of drawer to open                     |
| `triggerElement` |               | `HTMLElement` |         | The element to focus when the drawer is closed. If not set, defaults to the value of document.activeElement when the drawer is opened. |
| `unformatted`    | `unformatted` | `Boolean`     | false   | Unformatted drawer window, edge-to-edge fill for content |

## Events

| Event    | Description                            |
|----------|----------------------------------------|
| `toggle` | Event fires when the element is closed |

## Slots

| Name      | Description                                |
|-----------|--------------------------------------------|
| `content` | Injects content into the body of the modal |
| `footer`  | Used for action options, e.g. buttons      |
| `header`  | Text to display as the header of the modal |

## CSS Shadow Parts

| Part             | Description                                      |
|------------------|--------------------------------------------------|
| `close-button`   | adjust position of the close X icon in the drawer window |
| `drawer`         | apply CSS to the entire drawer                   |
| `drawer-content` | apply CSS to the content of the drawer           |
| `drawer-footer`  | apply CSS to the footer of the drawer            |
| `drawer-header`  | apply CSS to the header of the drawer            |
| `drawer-overlay` | apply CSS on the overlay of the drawer           |
