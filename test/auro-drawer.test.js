/* eslint-disable max-lines, no-magic-numbers, no-unused-expressions */

import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
} from "@open-wc/testing";
import { setViewport, sendKeys } from "@web/test-runner-commands";

import "../src/registered.js";
import { sleep } from "./testFunctions.js";

/**
 * Runs the full drawer test suite for a given viewport.
 * @param {boolean} mobileView - Whether tests should run in a narrow mobile viewport.
 * @returns {void}
 */
function runFullTest(mobileView) {
  before(async () => {
    await setViewport(
      mobileView ? { width: 300, height: 800 } : { width: 900, height: 800 },
    );
  });

  describe("Rendering", () => {
    it("should be defined as a custom element", async () => {
      const el = !!customElements.get("auro-drawer");
      expect(el).to.be.true;
    });

    it("should render a close button", async () => {
      const el = await fixture(html`<auro-drawer></auro-drawer>`);
      await el.drawerBib.updateComplete;
      const closeButton = el.drawerBib.shadowRoot.querySelector("#closeButton");
      expect(closeButton).to.not.equal(null);
    });

    it("should not render a close button when modal", async () => {
      const el = await fixture(html`<auro-drawer modal></auro-drawer>`);
      await el.drawerBib.updateComplete;
      const closeButton = el.drawerBib.shadowRoot.querySelector("#closeButton");
      expect(closeButton).to.equal(null);
    });

    it("should not render a header or footer when unformatted", async () => {
      const el = await fixture(html`<auro-drawer unformatted></auro-drawer>`);
      await el.drawerBib.updateComplete;
      const wrapper = el.drawerBib.shadowRoot.querySelector(".wrapper");
      expect(wrapper.querySelector(".content")).to.not.equal(null);
      expect(wrapper.querySelector(".header")).to.equal(null);
      expect(wrapper.querySelector(".footer")).to.equal(null);
    });

    describe("attribute propagation", () => {
      it("should carry size down to drawerBib", async () => {
        const el = await fixture(html`<auro-drawer size="sm"></auro-drawer>`);
        expect(el.drawerBib.getAttribute("size")).to.equal("sm");
      });

      it("should carry placement down to drawerBib", async () => {
        const el = await fixture(html`<auro-drawer placement="left"></auro-drawer>`);
        expect(el.drawerBib.getAttribute("placement")).to.equal("left");
      });

      it("should carry closeButtonAppearance down to drawerBib", async () => {
        const el = await fixture(html`<auro-drawer close-button-appearance="inverse"></auro-drawer>`);
        await elementUpdated(el);
        expect(el.drawerBib.getAttribute("close-button-appearance")).to.equal("inverse");
      });

      it("should carry onDark down to drawerBib", async () => {
        const el = await fixture(html`<auro-drawer ?onDark=${true}></auro-drawer>`);
        await elementUpdated(el);
        expect(el.drawerBib.onDark).to.be.true;
      });

      it("should remove a boolean attribute from drawerBib when the property is turned off", async () => {
        // A confirmation drawer starts as modal to lock user interaction during loading,
        // then switches to dismissible once content is ready.
        const el = await fixture(html`<auro-drawer modal></auro-drawer>`);
        await elementUpdated(el);
        expect(el.drawerBib.hasAttribute("modal")).to.be.true;

        el.removeAttribute("modal");
        await elementUpdated(el);
        expect(el.drawerBib.hasAttribute("modal")).to.be.false;
      });
    });

    describe("slots", () => {
      it("should render a custom close button from the close slot and close on click", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Custom close</h2>
            <div slot="content"><p>Content</p></div>
            <button slot="close" id="customClose">Close me</button>
          </auro-drawer>
        `);
        await elementUpdated(el);

        const customClose = el.drawerBib.querySelector("#customClose");
        expect(customClose).to.not.equal(null);

        customClose.click();
        await elementUpdated(el);
        expect(el.hasAttribute("open")).to.be.false;
      });

      it("should render header slot content in the drawer heading", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <span slot="header" id="title">My Drawer Title</span>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.drawerBib.querySelector("#title").textContent).to.equal("My Drawer Title");
      });

      it("should render footer slot content in the drawer footer", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <button slot="footer" id="footerBtn">Confirm</button>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.drawerBib.querySelector("#footerBtn")).to.not.equal(null);
      });

      it("should render default slot content in the drawer body", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <p id="body">Body content</p>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.drawerBib.querySelector("#body").textContent).to.equal("Body content");
      });

      it("should use ariaLabel.drawer.close slot text as the close button aria-label", async () => {
        const el = await fixture(html`
          <auro-drawer>
            <span slot="ariaLabel.drawer.close">Dismiss drawer</span>
          </auro-drawer>
        `);
        // Two drawerBib cycles needed:
        // 1. drawerBib's first render (creates the named slot in shadow DOM)
        // 2. the requestUpdate() from auro-drawer.updated() fires, re-evaluating getSlotText
        await elementUpdated(el);
        await el.drawerBib.updateComplete;
        await el.drawerBib.updateComplete;

        const slot = el.drawerBib.shadowRoot.querySelector('slot[name="ariaLabel.drawer.close"]');
        expect(slot).not.to.be.null;

        const closeBtn = el.drawerBib.shadowRoot.querySelector("#closeButton [auro-button]");
        const nativeBtn = closeBtn.shadowRoot.querySelector("button");
        expect(nativeBtn.getAttribute("aria-label")).to.equal("Dismiss drawer");
      });
    });
  });

  describe("User Stories", () => {
    describe("opening and closing", () => {
      it("should open when show() is called directly", async () => {
        const el = await fixture(html`<auro-drawer></auro-drawer>`);
        expect(el.hasAttribute("open")).to.be.false;

        await el.show();
        await elementUpdated(el);

        expect(el.hasAttribute("open")).to.be.true;
      });

      it("should close when hide() is called directly", async () => {
        const el = await fixture(html`<auro-drawer open></auro-drawer>`);
        expect(el.hasAttribute("open")).to.be.true;

        el.hide();
        await elementUpdated(el);

        expect(el.hasAttribute("open")).to.be.false;
      });

      it("should clear the closing state when reopened before the close animation completes", async () => {
        // Bug: closing is set to true on close and only cleared by a 300ms setTimeout.
        // If the drawer is reopened within that window, both [visible] and [closing]
        // are set simultaneously. Because [closing] is declared after [visible] in
        // the SCSS, it wins the specificity tie and the slide-out animation plays
        // instead of slide-in — the drawer visually closes while logically open.
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Reopen test</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);

        // Close — sets drawerBib.closing = true
        el.removeAttribute("open");
        await elementUpdated(el);
        expect(el.drawerBib.closing, "closing must be true immediately after close").to.be.true;

        // Reopen before the 300ms animation timer fires
        el.setAttribute("open", "");
        await elementUpdated(el);

        expect(el.drawerBib.closing, "closing must be cleared when drawer reopens mid-animation").to.be.false;
        expect(el.drawerBib.visible, "visible must be true after reopen").to.be.true;
      });

      it("should not steal focus back to the trigger when reopened within the 350ms focus-restore timeout", async () => {
        // Bug: the focus-restoration setTimeout had no guard. If the drawer was
        // reopened before the 350ms timer fired, the callback would call
        // trigger.focus() while the drawer was open, yanking focus out of it.
        const container = await fixture(html`
          <div>
            <button id="trigger">Open</button>
            <auro-drawer>
              <h2 slot="header">Reopen focus test</h2>
              <div slot="content"><button id="inner">Inner</button></div>
              <div slot="footer"><button id="close">Close</button></div>
            </auro-drawer>
          </div>
        `);
        const trigger = container.querySelector("#trigger");
        const drawer = container.querySelector("auro-drawer");

        drawer.triggerElement = trigger;
        await elementUpdated(drawer);

        // Open, close, then reopen before the 350ms timer fires
        trigger.click();
        await elementUpdated(drawer);
        drawer.hide();
        await elementUpdated(drawer);
        trigger.click();
        await elementUpdated(drawer);

        // Wait past the 350ms focus-restore timeout
        await new Promise((resolve) => setTimeout(resolve, 450));

        expect(
          drawer.contains(document.activeElement) || drawer.drawerBib.shadowRoot.contains(document.activeElement),
          "focus must remain inside the drawer after the 350ms timeout, not jump to the trigger",
        ).to.be.true;
      });

      it("should open when triggerElement is clicked", async () => {
        const el = await fixture(html`
          <div>
            <auro-drawer></auro-drawer>
            <button>Open Drawer</button>
          </div>
        `);
        const drawer = el.querySelector("auro-drawer");
        const button = el.querySelector("button");
        drawer.triggerElement = button;
        await elementUpdated(drawer);

        button.click();
        await elementUpdated(drawer);

        expect(drawer.hasAttribute("open")).to.be.true;

        expect(drawer.expanded).to.be.equal(mobileView);
      });

      it("should close when the close button is clicked", async () => {
        const el = await fixture(html`<auro-drawer></auro-drawer>`);
        const closeButton = el.drawerBib.shadowRoot.querySelector("#closeButton");
        closeButton.click();
        await elementUpdated(el);
        expect(el.hasAttribute("open")).to.be.false;
      });

      it("should close when ESC is pressed", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">It's a drawer</h2>
            <div slot="content"><p>Hello World!</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50)); // wait for focus to land inside

        await sendKeys({ press: "Escape" });
        await elementUpdated(el);
        expect(el.hasAttribute("open")).to.be.false;
      });

      it("should not close when ESC is pressed if modal", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">It's a drawer</h2>
            <div slot="content"><button id="modalBtn">Button</button></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        el.drawerBib.querySelector("#modalBtn").focus();
        await sendKeys({ press: "Escape" });
        await elementUpdated(el);
        expect(el.hasAttribute("open")).to.be.true;
      });

      it("should not throw when open is set to false while already closed", async () => {
        const el = await fixture(html`
          <auro-drawer>
            <h2 slot="header">It's a drawer</h2>
            <div slot="content"><p>Hello World!</p></div>
          </auro-drawer>
        `);
        el.removeAttribute("open");
        await el.updateComplete;
      });

      it("should close when the dialog-cancel event fires", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Non-modal escape test</h2>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.hasAttribute("open")).to.be.true;

        el.bib.dispatchEvent(
          new Event("dialog-cancel", { bubbles: true, composed: true }),
        );
        await elementUpdated(el);
        expect(el.hasAttribute("open"), "non-modal drawer should close on Escape").to.be.false;
      });

      it("should stay open when the dialog-cancel event fires if modal", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Modal escape test</h2>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.hasAttribute("open")).to.be.true;

        el.bib.dispatchEvent(
          new Event("dialog-cancel", { bubbles: true, composed: true }),
        );
        await elementUpdated(el);
        expect(el.hasAttribute("open"), "modal drawer must ignore Escape").to.be.true;
      });

      it("should close when the backdrop is clicked", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Backdrop test</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);

        el.bib.dispatchEvent(
          new Event("dialog-backdrop-click", { bubbles: true, composed: true }),
        );
        await elementUpdated(el);
        expect(el.hasAttribute("open"), "non-modal drawer should close on backdrop click").to.be.false;
      });

      it("should stay open when the backdrop is clicked if modal", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Modal backdrop test</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);

        el.bib.dispatchEvent(
          new Event("dialog-backdrop-click", { bubbles: true, composed: true }),
        );
        await elementUpdated(el);
        expect(el.hasAttribute("open"), "modal drawer must ignore backdrop click").to.be.true;
      });
    });

    describe("events", () => {
      it("should dispatch auroDrawer-toggled with expanded: false on close", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">It's a drawer</h2>
            <div slot="content"><p>Hello World!</p></div>
          </auro-drawer>
        `);
        const toggledEvent = oneEvent(el, "auroDrawer-toggled");
        el.removeAttribute("open");
        const { detail } = await toggledEvent;
        expect(detail.expanded).to.be.false;
      });

      it("should dispatch auroDrawer-toggled with expanded: true on open", async () => {
        const el = await fixture(html`
          <auro-drawer>
            <h2 slot="header">It's a drawer</h2>
            <div slot="content"><p>Hello World!</p></div>
          </auro-drawer>
        `);
        const toggledEvent = oneEvent(el, "auroDrawer-toggled");
        el.setAttribute("open", "");
        const { detail } = await toggledEvent;
        expect(detail.expanded).to.be.true;
      });
    });

    describe("sizing and layout", () => {
      if (!mobileView) {
        it("should have a smaller width for size sm than md", async () => {
          const el = await fixture(html`
            <div>
              <auro-drawer size="sm" open></auro-drawer>
              <auro-drawer size="md" open></auro-drawer>
            </div>
          `);
          const sm = el.children[0].drawerBib.shadowRoot.querySelector(".wrapper");
          const md = el.children[1].drawerBib.shadowRoot.querySelector(".wrapper");
          expect(sm.offsetWidth).to.be.lessThan(md.offsetWidth);
        });
      }

      it("should match the parent container dimensions when nested", async () => {
        const el = await fixture(html`
          <div style="width: 200px; height: 200px">
            <auro-drawer ?open=${true} nested>
              <h2 slot="header">Blocking drawer</h2>
              <div slot="content"><p>Hello World!</p></div>
              <div slot="footer"><button>Click</button></div>
            </auro-drawer>
          </div>
        `);
        const drawer = el.children[0];
        expect(drawer.bib.offsetWidth).to.be.equal(el.offsetWidth);
        expect(drawer.bib.offsetHeight).to.be.equal(el.offsetHeight);
      });

      if (mobileView) {
        it("should cover the full viewport in mobile view", async () => {
          const el = await fixture(html`
            <auro-drawer open>
              <h2 slot="header">Blocking drawer</h2>
              <div slot="content"><p>Hello World!</p></div>
              <div slot="footer"><button>Click</button></div>
            </auro-drawer>
          `);
          expect(el.drawerBib.hasAttribute("stretch")).to.be.true;
          const contentWrapper = el.drawerBib.shadowRoot.querySelector(".wrapper");
          expect(contentWrapper.offsetWidth).to.be.equal(document.documentElement.offsetWidth);
          expect(contentWrapper.offsetHeight).to.be.equal(visualViewport.height);
        });
      }
    });

    describe("modal vs non-modal", () => {
      it("should use showPopover for non-modal drawers", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Non-modal</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(
          el.bib.dialog.hasAttribute("popover"),
          "non-modal drawer must use showPopover, not showModal",
        ).to.be.true;
      });

      it("should use showModal and lock page scroll for modal drawers", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Modal</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(
          el.floater._scrollLocked,
          "modal drawer must lock page scroll via showModal()",
        ).to.be.true;
      });

      it("should use setAttribute for nested drawers regardless of modal state", async () => {
        const el = await fixture(html`
          <div style="width: 300px; height: 300px;">
            <auro-drawer open nested>
              <h2 slot="header">Nested</h2>
              <div slot="content"><p>Content</p></div>
            </auro-drawer>
          </div>
        `);
        const drawer = el.querySelector("auro-drawer");
        await elementUpdated(drawer);
        expect(drawer.bib._scrollLocked, "nested drawer must not lock scroll").to.not.be.true;
      });

      it("should release the scroll lock after a modal drawer closes", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Modal scroll lock test</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.floater._scrollLocked).to.be.true;

        el.removeAttribute("open");
        await elementUpdated(el);

        expect(el.floater._scrollLocked, "scroll lock must be released on close").to.be.false;
        expect(document.body.style.position, "body position must be restored").to.equal("");
      });

      it("should restore preexisting body inline styles after closing a modal drawer", async () => {
        // Bug: _restorePageScroll() originally reset styles to '' unconditionally,
        // clobbering any styles the host app had set before the drawer opened.
        // Now it saves and restores the previous values.
        document.body.style.overflow = "scroll"; // preexisting app style

        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Modal preexisting style test</h2>
            <div slot="content"><p>Content</p></div>
          </auro-drawer>
        `);
        await elementUpdated(el);

        // Scroll lock overrides overflow while the drawer is open
        expect(document.body.style.overflow, "scroll lock must override body overflow").to.equal("hidden");

        el.removeAttribute("open");
        await elementUpdated(el);

        // Cleanup regardless of assertion result
        const restored = document.body.style.overflow;
        document.body.style.overflow = "";

        expect(restored, "preexisting body overflow must be restored, not wiped to empty string").to.equal("scroll");
      });

      it("should remove the dialog open attribute when a nested drawer closes", async () => {
        // Bug: nested drawers are opened via dialog.setAttribute('open', ''), but
        // hide() only called dialog.close() when dialog.open was truthy. Verify
        // the attribute is cleaned up properly after close.
        const container = await fixture(html`
          <div style="position: relative; height: 300px; overflow: hidden;">
            <auro-drawer nested open>
              <h2 slot="header">Nested</h2>
              <div slot="content"><p>Content</p></div>
              <div slot="footer"><button>Close</button></div>
            </auro-drawer>
          </div>
        `);
        const drawer = container.querySelector("auro-drawer");
        await elementUpdated(drawer);
        await drawer.bib?.updateComplete;

        const { dialog } = drawer.bib;
        expect(dialog.open, "nested dialog should be open before close").to.be.true;

        drawer.removeAttribute("open");
        await elementUpdated(drawer);

        // hide() uses a 300ms setTimeout before calling dialog.close()
        await new Promise((resolve) => setTimeout(resolve, 400));

        expect(dialog.open, "nested dialog open attribute must be removed after close").to.be.false;
      });

      it("should call hidePopover on a non-modal drawer after the close animation delay", async () => {
        // Non-modal drawers (not modal, not nested) are opened via dialog.showPopover().
        // dialog.open is NOT set by showPopover(), so the original dialog?.open check
        // in hide() misses these entirely — the dialog stays in the top layer after close.
        // hide() must also guard on :popover-open and call hidePopover() on the same delay.
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Non-modal drawer</h2>
            <div slot="content"><p>Content</p></div>
            <div slot="footer"><button>Close</button></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await el.bib?.updateComplete;

        const { dialog } = el.bib;

        // Non-modal: showPopover() does not set dialog.open; confirm via :popover-open
        expect(dialog.open, "non-modal drawer does not set dialog.open").to.be.false;
        expect(dialog.matches(':popover-open'), "dialog should be in popover-open state after show").to.be.true;

        el.hide();
        await elementUpdated(el);

        // Wait past the 300ms animation delay so hidePopover() has had a chance to fire
        await new Promise((resolve) => setTimeout(resolve, 400));

        expect(
          dialog.matches(':popover-open'),
          "dialog must be removed from the top layer after the close animation completes",
        ).to.be.false;
        expect(
          dialog.hasAttribute('popover'),
          "popover attribute must be removed after close — show() sets it fresh on each open",
        ).to.be.false;
      });
    });

    describe("focus management", () => {
      it("should move focus to the close button when opened", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Focus test drawer</h2>
            <div slot="content">
              <input type="text" placeholder="First input" />
            </div>
            <div slot="footer"><button>Submit</button></div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        const closeButton = el.drawerBib.shadowRoot.querySelector("#closeButton");
        expect(closeButton).to.not.equal(null);

        const activeInShadow = el.drawerBib.shadowRoot.activeElement;
        expect(
          closeButton.contains(activeInShadow),
          "Focus should be within the close button when drawer opens",
        ).to.be.true;
      });

      it("should return focus to triggerElement after close", async () => {
        const el = await fixture(html`
          <div>
            <button id="trigger">Open drawer</button>
            <auro-drawer>
              <h2 slot="header">Focus return test</h2>
              <div slot="content">
                <input type="text" placeholder="An input" />
              </div>
              <div slot="footer"><button>Submit</button></div>
            </auro-drawer>
          </div>
        `);
        const trigger = el.querySelector("#trigger");
        const drawer = el.querySelector("auro-drawer");

        drawer.triggerElement = trigger;
        await elementUpdated(drawer);

        trigger.click();
        await elementUpdated(drawer);
        expect(drawer.hasAttribute("open")).to.be.true;

        const closeButton = drawer.drawerBib.shadowRoot.querySelector("#closeButton");
        expect(closeButton).to.not.equal(null);

        const toggled = oneEvent(drawer, "auroDrawer-toggled");
        closeButton.click();
        await toggled;
        await elementUpdated(drawer);
        await elementUpdated(drawer.drawerBib);

        expect(drawer.hasAttribute("open")).to.be.false;

        await sleep(400);
        expect(
          !drawer.contains(document.activeElement),
          "Focus should no longer be inside the drawer after close",
        ).to.be.true;

        expect(
          document.activeElement === trigger,
          "Focus should return to the trigger element after drawer closes",
        ).to.be.true;
      });

      it("should stay open when the last focusable element is disabled", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">Repro scenario</h2>
            <div slot="content">
              <input type="text" placeholder="First input" />
              <input type="text" placeholder="Second input" />
            </div>
            <div slot="footer">
              <button disabled>Disabled Submit</button>
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(
          el.hasAttribute("open"),
          "drawer stays open despite a disabled last element",
        ).to.be.true;
      });

      it("should stay open when there is no footer button", async () => {
        const el = await fixture(html`
          <auro-drawer open>
            <h2 slot="header">No button scenario</h2>
            <div slot="content">
              <input type="text" placeholder="First input" />
              <input type="text" placeholder="Second input" />
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        expect(el.hasAttribute("open"), "drawer stays open with no footer button").to.be.true;
      });
    });

    describe("accessibility", () => {
      it("should be accessible", async () => {
        const el = await fixture(html`
          <div>
            <auro-drawer ?open=${true}>
              <h2 slot="header">Blocking drawer</h2>
              <div slot="content"><p>Hello World!</p></div>
              <div slot="footer"><button>Click</button></div>
            </auro-drawer>
            <button id="drawerTrigger">Open Drawer</button>
          </div>
        `);
        const drawer = el.querySelector("auro-drawer");
        const button = el.querySelector("#drawerTrigger");
        if (drawer && button) {
          drawer.triggerElement = button;
          await elementUpdated(drawer);
          await expect(el).to.be.accessible({
            ignoredRules: ["color-contrast"],
          });
        }
      });
    });

    describe("ARIA attributes", () => {
      it("should set aria-haspopup and aria-controls on triggerElement", async () => {
        const el = await fixture(html`
          <div>
            <button id="trigger">Open</button>
            <auro-drawer></auro-drawer>
          </div>
        `);
        const trigger = el.querySelector("#trigger");
        const drawer = el.querySelector("auro-drawer");

        drawer.triggerElement = trigger;
        await elementUpdated(drawer);

        expect(trigger.getAttribute("aria-haspopup")).to.equal("dialog");
        expect(trigger.hasAttribute("aria-controls")).to.be.true;
      });

      it("should set bibLabel from triggerElement text content", async () => {
        const el = await fixture(html`
          <div>
            <button id="trigger">Open drawer</button>
            <auro-drawer></auro-drawer>
          </div>
        `);
        const trigger = el.querySelector("#trigger");
        const drawer = el.querySelector("auro-drawer");

        drawer.triggerElement = trigger;
        await elementUpdated(drawer);

        expect(drawer.bib.bibLabel).to.equal("Open drawer");
      });

      it("should update ARIA on the new triggerElement when triggerElement changes", async () => {
        const el = await fixture(html`
          <div>
            <button id="trigger1">First trigger</button>
            <button id="trigger2">Second trigger</button>
            <auro-drawer></auro-drawer>
          </div>
        `);
        const trigger1 = el.querySelector("#trigger1");
        const trigger2 = el.querySelector("#trigger2");
        const drawer = el.querySelector("auro-drawer");

        drawer.triggerElement = trigger1;
        await elementUpdated(drawer);
        expect(trigger1.getAttribute("aria-haspopup")).to.equal("dialog");

        drawer.triggerElement = trigger2;
        await elementUpdated(drawer);
        expect(trigger2.getAttribute("aria-haspopup")).to.equal("dialog");
        expect(drawer.bib.bibLabel).to.equal("Second trigger");
      });
    });

    describe("keyboard navigation", () => {
      // Modal drawer is used for these tests so the only focusable elements are
      // the ones we define — no close button is rendered when modal is set.
      it("should wrap Tab focus from the last focusable element to the first", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Tab wrap test</h2>
            <div slot="content">
              <button id="btn1">First</button>
              <button id="btn2">Last</button>
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        el.drawerBib.querySelector("#btn2").focus();
        await sendKeys({ press: "Tab" });

        expect(
          document.activeElement,
          "Tab from last element should wrap focus to first",
        ).to.equal(el.drawerBib.querySelector("#btn1"));
      });

      it("should wrap Shift+Tab focus from the first focusable element to the last", async () => {
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Shift+Tab wrap test</h2>
            <div slot="content">
              <button id="btn1">First</button>
              <button id="btn2">Last</button>
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        el.drawerBib.querySelector("#btn1").focus();
        await sendKeys({ down: 'Shift' });
        await sendKeys({ press: 'Tab' });
        await sendKeys({ up: 'Shift' });

        expect(
          document.activeElement,
          "Shift+Tab from first element should wrap focus to last",
        ).to.equal(el.drawerBib.querySelector("#btn2"));
      });

      it("should not cause a stack overflow when a keydown occurs with focus inside the drawer", async () => {
        // Bug: the keydown handler re-dispatching onto this.dialog re-entered the
        // same listener → infinite recursion → RangeError. The fix dispatches on
        // the host element (this) so the listener never fires again.
        // Use modal so focus is contained and Tab wraps without leaving the drawer
        // (which could trigger focus-out close handlers and an unsettled state).
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Recursion guard test</h2>
            <div slot="content">
              <button id="btn1">First</button>
              <button id="btn2">Second</button>
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        el.drawerBib.querySelector("#btn1").focus();

        // If the recursion bug were present, this would throw a RangeError.
        await sendKeys({ press: "Tab" });

        expect(
          document.activeElement,
          "Tab should move focus to btn2 — reaching here without a RangeError confirms no infinite recursion",
        ).to.equal(el.drawerBib.querySelector("#btn2"));
      });

      it("should deliver keydown events to light DOM handlers when keys are pressed inside the drawer", async () => {
        // Verifies that keyboard events from within the drawer (real user input via
        // sendKeys) reach consumers listening on the host element in the light DOM.
        // Modal is used so Tab wraps within the dialog — no focus-out close triggers.
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">Key forwarding test</h2>
            <div slot="content">
              <button id="innerBtn">Inner</button>
              <button id="innerBtn2">Inner 2</button>
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        let receivedEvent = null;
        el.addEventListener("keydown", (e) => {
          receivedEvent = e;
        });

        el.drawerBib.querySelector("#innerBtn").focus();
        await sendKeys({ press: "Tab" }); // wraps within modal, stays inside

        expect(receivedEvent, "light DOM keydown listener must fire when a key is pressed inside the drawer").to.not.be.null;
        expect(receivedEvent.key, "received event must carry the correct key").to.equal("Tab");
      });

      it("should allow keyboard Tab navigation within a drawer opened via dialog.show() fallback when showPopover is unavailable", async () => {
        // When the Popover API is absent, show() falls back to dialog.show().
        // Verify that real keyboard Tab navigation still works inside that drawer.
        const el = await fixture(html`
          <auro-drawer>
            <h2 slot="header">Fallback drawer</h2>
            <div slot="content">
              <button id="btn1">First</button>
              <button id="btn2">Second</button>
            </div>
          </auro-drawer>
        `);
        await elementUpdated(el);

        const { dialog } = el.bib;
        // showPopover is on the prototype — delete only removes own properties and
        // won't work. Shadow it with undefined so the typeof guard in show() fails.
        dialog.showPopover = undefined;

        await el.show();
        await elementUpdated(el);
        await new Promise((resolve) => setTimeout(resolve, 50));

        // Remove the own property so the prototype method is accessible again
        delete dialog.showPopover;

        expect(dialog.open, "dialog.show() fallback must open the drawer").to.be.true;

        el.drawerBib.querySelector("#btn1").focus();
        await sendKeys({ press: "Tab" });

        expect(
          document.activeElement,
          "Tab must move focus from btn1 to btn2 inside the fallback-opened drawer",
        ).to.equal(el.drawerBib.querySelector("#btn2"));
      });
    });

    describe("lifecycle", () => {
      it("should not throw when disconnected before first update completes", () => {
        const container = document.createElement("div");
        document.body.appendChild(container);
        const el = document.createElement("auro-drawer");
        container.appendChild(el);
        // Triggers disconnectedCallback synchronously before firstUpdated runs.
        // floater is still undefined at this point — the fix guards against that.
        container.remove();
      });

      it("should clean up without error when removed from DOM while open", async () => {
        // Must be modal: plain drawers use showPopover() which does NOT set
        // dialog.open, so the 300ms close() timeout in hide() is never scheduled
        // and the disconnect path is never actually exercised.
        const el = await fixture(html`
          <auro-drawer open modal>
            <h2 slot="header">It's a drawer</h2>
            <div slot="content"><p>Hello World!</p></div>
          </auro-drawer>
        `);
        expect(el.hasAttribute("open")).to.be.true;
        el.remove();
        // Wait past the 300ms setTimeout in hide() so we know the deferred
        // dialog.close() has fired. If this.bib is gone by then and the
        // reference was not captured before cleanup, a TypeError is thrown as
        // an uncaught error and the test runner fails this test.
        await new Promise((resolve) => setTimeout(resolve, 400));
      });
    });
  });
}

// Desktop test suite
describe("auro-drawer", () => {
  runFullTest(false);
});

// Mobile test suite
describe("auro-drawer in mobile viewport", () => {
  runFullTest(true);
});
