// Do not add auro elements to this unless absolutely necessary
const FOCUSABLE_SELECTORS = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[role="tab"]:not([disabled])',
  '[role="link"]:not([disabled])',
  '[role="button"]:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
  '[contenteditable]:not([contenteditable="false"])'
];

const FOCUSABLE_COMPONENTS = [
  'auro-checkbox',
  'auro-radio',
  'auro-dropdown',
  'auro-button',
  'auro-combobox',
  'auro-input',
  'auro-counter',
  'auro-menu',
  'auro-select',
  'auro-datepicker',
  'auro-hyperlink',
  'auro-accordion',
]

export class FocusTrap {
  constructor(container) {
    if (!container || !(container instanceof HTMLElement)) {
      throw new Error("FocusTrap requires a valid HTMLElement.");
    }

    this.container = container;
    this.tabDirection = 'forward'; // or 'backward'

    this._init();
  }

  _init() {
    // Support for shadow DOM / web components
    const appendEl = this.container.shadowRoot || this.container;

    // Add inert attribute to prevent focusing programmatically as well (if supported)
    if ('inert' in HTMLElement.prototype) {
      this.container.inert = false; // Ensure the container isn't inert
      this.container.setAttribute('data-focus-trap-container', true); // Mark for identification
    }

    // Track tab direction
    this.container.addEventListener('keydown', this._onKeydown);
  }

  _onKeydown = (e) => {
    
    if (e.key === 'Tab') {

      // Set the tab direction based on the key pressed
      this.tabDirection = e.shiftKey ? 'backward' : 'forward';

      // Get the active element(s) in the document and shadow root
      // This will include the active element in the shadow DOM if it exists
      // Active element may be inside the shadow DOM depending on delegatesFocus, so we need to check both
      const actives =  [
        document.activeElement,
        ...document.activeElement.shadowRoot && [document.activeElement.shadowRoot.activeElement]
      ]

      // Update the focusable elements
      const focusables = this._getFocusableElements();

      // If we're at either end of the focusable elements, wrap around to the other end
      const focusIndex =
        actives.includes(focusables[0]) && this.tabDirection === 'backward'
          ? focusables.length - 1
          : actives.includes(focusables[focusables.length - 1]) && this.tabDirection === 'forward'
            ? 0
            : null;

      if (focusIndex !== null) {
        focusables[focusIndex].focus();
        e.preventDefault(); // Prevent default tab behavior
        e.stopPropagation(); // Stop the event from bubbling up
      }
    }
  };

  _getFocusableElements() {
    // Get elements in DOM order by walking the tree
    const orderedFocusableElements = [];

    // Define a recursive function to collect focusable elements in DOM order
    const collectFocusableElements = (root) => {

      // Check if current element is focusable
      if (root.nodeType === Node.ELEMENT_NODE) {
        // Check if this is one of our special Auro components
        const isAuroComponent = FOCUSABLE_COMPONENTS.some(
          component => root.tagName.toLowerCase()?.match(component)
        );

        if (isAuroComponent) {
          // Add the component itself as a focusable element and don't traverse its shadow DOM
          orderedFocusableElements.push(root);
          return; // Skip traversing inside this component
        }

        // Check if the element itself matches any selector
        for (const selector of FOCUSABLE_SELECTORS) {
          if (root.matches?.(selector) && !root.classList.contains('focus-bookend')) {
            orderedFocusableElements.push(root);
            break; // Once we know it's focusable, no need to check other selectors
          }
        }

        // Process shadow DOM only for non-Auro components
        if (root.shadowRoot) {
          // Process shadow DOM children in order
          if (root.shadowRoot.children) {
            Array.from(root.shadowRoot.children).forEach(child => {
              collectFocusableElements(child);
            });
          }
        }

        // Process slots and their assigned nodes in order
        if (root.tagName === 'SLOT') {
          const assignedNodes = root.assignedNodes({ flatten: true });
          for (const node of assignedNodes) {
            collectFocusableElements(node);
          }
        } else {
          // Process light DOM children in order
          if (root.children) {
            Array.from(root.children).forEach(child => {
              collectFocusableElements(child);
            });
          }
        }
      }
    };

    // Start the traversal from the container
    collectFocusableElements(this.container);

    // Remove duplicates that might have been collected through different paths
    // while preserving order
    const uniqueElements = [];
    const seen = new Set();

    for (const element of orderedFocusableElements) {
      if (!seen.has(element)) {
        seen.add(element);
        uniqueElements.push(element);
      }
    }

    return uniqueElements;
  }

  focusFirstElement() {
    const focusables = this._getFocusableElements();
    if (focusables.length) focusables[0].focus();
  }

  focusLastElement() {
    const focusables = this._getFocusableElements();
    if (focusables.length) focusables[focusables.length - 1].focus();
  }

  disconnect() {
    // Remove the tabIndex we set
    this.container.removeAttribute('tabIndex');

    if (this.container.hasAttribute('data-focus-trap-container')) {
      this.container.removeAttribute('data-focus-trap-container');
    }

    this.container.removeEventListener('keydown', this._onKeydown);
  }
}
