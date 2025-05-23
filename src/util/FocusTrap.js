const FOCUSABLE_SELECTORS = [
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
  'a[href]', 
  'button:not([disabled])', 
  'textarea:not([disabled])', 
  'input:not([disabled])', 
  'select:not([disabled])', 
  '[tabindex]:not([tabindex="-1"])'
];

export class FocusTrap {
  constructor(container) {
    if (!container || !(container instanceof HTMLElement)) {
      throw new Error("FocusTrap requires a valid HTMLElement.");
    }

    this.container = container;
    this.tabDirection = 'forward'; // or 'backward'
    this.bookendStart = this._createBookend('start');
    this.bookendEnd = this._createBookend('end');

    this._init();
  }

  _createBookend(position) {
    const bookend = document.createElement('div');
    bookend.tabIndex = 0;
    bookend.className = `focus-bookend focus-bookend-${position}`;
    return bookend;
  }

  _init() {
    // Support for shadow DOM / web components
    const appendEl = this.container.shadowRoot || this.container;

    // Make the container explicitly unfocusable
    // This is critical for shadow DOM hosts
    this.container.tabIndex = -1;
    
    // Add inert attribute to prevent focusing programmatically as well (if supported)
    if ('inert' in HTMLElement.prototype) {
      this.container.inert = false; // Ensure the container isn't inert
      this.container.setAttribute('data-focus-trap-container', true); // Mark for identification
    }

    // Append bookends
    appendEl.prepend(this.bookendStart);
    appendEl.append(this.bookendEnd);

    // Track tab direction
    this.container.addEventListener('keydown', this._onKeydown);

    // Focus looping
    this.bookendStart.addEventListener('focus', this._onBookendFocusStart);
    this.bookendEnd.addEventListener('focus', this._onBookendFocusEnd);
    
    // Add event listener to handle the edge case where container gets focus anyway
    this.container.addEventListener('focus', this._onContainerFocus);
  }

  // If the container somehow gets focus, move the focus back into the container, accounting for the tab direction
  _onContainerFocus = () => {
    if (this.tabDirection === 'backward') {
      this.focusLastElement();
    } else {
      this.focusFirstElement();
    }
  };

  _onKeydown = (e) => {
    if (e.key === 'Tab') {
      this.tabDirection = e.shiftKey ? 'backward' : 'forward';
    }
  };

  _onBookendFocusStart = () => {
    if (this.tabDirection === 'backward') {
      this.focusLastElement();
    }
  };

  _onBookendFocusEnd = () => {
    if (this.tabDirection === 'forward') {
      this.focusFirstElement();
    }
  };

  _getFocusableElements() {

    // Get all focusable elements within the container based on the FOCUSABLE_SELECTORS constant
    let results = Array.from(this.container.querySelectorAll(FOCUSABLE_SELECTORS.join(',')));

    // Filter any unwanted elements
    results = results
      .filter( el => el.classList.contains('focus-bookend') === false) // Exclude bookends

    // Return results
    return results;
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

    this.bookendStart.remove();
    this.bookendEnd.remove();
    this.container.removeEventListener('keydown', this._onKeydown);
    this.container.removeEventListener('focus', this._onContainerFocus);
    this.bookendStart.removeEventListener('focus', this._onBookendFocusStart);
    this.bookendEnd.removeEventListener('focus', this._onBookendFocusEnd);
  }
}
