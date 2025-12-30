```js
// Import the class only
import { AuroDrawer } from '@aurodesignsystem/auro-drawer/class';

// Register with a custom name if desired
AuroDrawer.register('custom-drawer');
```

This will create a new custom element `<custom-drawer>` that behaves exactly like `<auro-drawer>`, allowing both to coexist on the same page without interfering with each other.
