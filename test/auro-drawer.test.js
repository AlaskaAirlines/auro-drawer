import {
  elementUpdated,
  expect,
  fixture,
  html,
  oneEvent,
} from "@open-wc/testing";
import { setViewport } from "@web/test-runner-commands";

import "../src/registered.js";

describe("auro-drawer", () => {
  it("auro-drawer gets open by triggerElement", async () => {
    const el = await fixture(html`
      <div>
        <auro-drawer></auro-drawer>
        <button> Open Drawer</button>
      </div>
    `);
    const drawer = el.querySelector("auro-drawer");

    const button = el.querySelector("button");
    drawer.triggerElement = button;
    await elementUpdated(drawer); // wait drawer setup the trigger event handlers

    button.click();
    await elementUpdated(drawer);

    await expect(drawer.hasAttribute("open")).to.be.true;
  });

  it("nested auro-drawer has same width and height as its parent", async () => {
    const el = await fixture(html`
      <div style="width: 200px; height: 200px">
        <auro-drawer ?open=${true} nested>
          <h2 slot="header">Blocking drawer</h2>
          <div slot="content">
            <p>Hello World!</p>
          </div>
          <div slot="footer"><button>Click</button></div>
        </auro-drawer>
      </div>
    `);
    const drawer = el.children[0];
    await expect(drawer.bib.offsetWidth).to.be.equal(el.offsetWidth);
    await expect(drawer.bib.offsetHeight).to.be.equal(el.offsetHeight);
  });

  it("auro-drawer custom element is defined", async () => {
    const el = await !!customElements.get("auro-drawer");

    await expect(el).to.be.true;
  });

  it("auro-drawer size gets carried down to bib", async () => {
    const el = await fixture(html`
      <auro-drawer size="sm"></auro-drawer>
    `);
    await expect(el.drawerBib.getAttribute("size")).to.equal("sm");
  });

  it("auro-drawer placement gets carried down to bib", async () => {
    const el = await fixture(html`
      <auro-drawer placement="left"></auro-drawer>
    `);
    await expect(el.drawerBib.getAttribute("placement")).to.equal("left");
  });

  it("unformatted auro-drawer does not render header or footer", async () => {
    const el = await fixture(html`
      <auro-drawer unformatted></auro-drawer>
    `);

    const wrapper = el.drawerBib.shadowRoot.querySelector(".wrapper");
    await expect(wrapper.querySelector(".content")).to.not.equal(null);
    await expect(wrapper.querySelector(".header")).to.equal(null);
    await expect(wrapper.querySelector(".footer")).to.equal(null);
  });

  it("auro-drawer renders a close icon and closes on click", async () => {
    const el = await fixture(html`
      <auro-drawer></auro-drawer>
    `);

    const root = el.drawerBib;
    const closeButton = root.shadowRoot.querySelector("#closeButton");
    await expect(closeButton).to.not.equal(null);

    closeButton.click();

    await elementUpdated(el);

    await expect(el.hasAttribute("open")).to.be.false;
  });

  it("auro-drawer modal-drawer does not render a close icon", async () => {
    const el = await fixture(html`
      <auro-drawer modal></auro-drawer>
    `);

    const root = el.drawerBib;
    const title = root.shadowRoot.querySelector("#closeButton");
    await expect(title).to.equal(null);
  });

  it("closes when ESC pressed", async () => {
    const el = await fixture(html`
      <auro-drawer open>
        <h2 slot="header">It's a drawer</h2>
        <div slot="content">
          <p>Hello World!</p>
        </div>
      </auro-drawer>
    `);

    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await elementUpdated(el);
    expect(el.hasAttribute("open")).to.be.false;
  });

  it("does not close when ESC pressed if modal", async () => {
    const el = await fixture(html`
      <auro-drawer open modal>
        <h2 slot="header">It's a drawer</h2>
        <div slot="content">
          <p>Hello World!</p>
        </div>
      </auro-drawer>
    `);

    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    await elementUpdated(el);
    expect(el.hasAttribute("open")).to.be.true;
  });

  it("dispatches toggle event on close", async () => {
    const el = await fixture(html`
      <auro-drawer open>
        <h2 slot="header">It's a drawer</h2>
        <div slot="content">
          <p>Hello World!</p>
        </div>
      </auro-drawer>
    `);

    const toggledEvent = oneEvent(el, "auroDrawer-toggled");
    el.removeAttribute("open");

    const { detail } = await toggledEvent;
    expect(detail.expanded).to.be.false;
  });

  it("does not throw error when open set to false and already closed", async () => {
    const el = await fixture(html`
      <auro-drawer>
        <h2 slot="header">It's a drawer</h2>
        <div slot="content">
          <p>Hello World!</p>
        </div>
      </auro-drawer>
    `);

    el.removeAttribute("open");
    await el.updateComplete;
  });

  it("sm auro-drawer is smaller than md auro-drawer", async () => {
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

  it("auro-drawer covers the fullscreen in mobile view", async () => {
    await setViewport({
      width: 300,
      height: 800,
    });

    const el = await fixture(html`
      <auro-drawer open>
        <h2 slot="header">Blocking drawer</h2>
        <div slot="content">
          <p>Hello World!</p>
        </div>
        <div slot="footer"><button>Click</button></div>
      </auro-drawer>
    `);
    await expect(el.drawerBib.hasAttribute("stretch")).to.be.true;
    const contentWrapper = el.drawerBib.shadowRoot.querySelector(".wrapper");
    await expect(contentWrapper.offsetWidth).to.be.equal(visualViewport.width);
    await expect(contentWrapper.offsetHeight).to.be.equal(
      visualViewport.height,
    );
  });

  it("auro-drawer is accessible", async () => {
    const el = await fixture(html`
      <div>
        <auro-drawer ?open=${true}>
          <h2 slot="header">Blocking drawer</h2>
          <div slot="content">
            <p>Hello World!</p>
          </div>
          <div slot="footer"><button>Click</button></div>
        </auro-drawer>

        <button id="drawerTrigger"> Open Drawer</button>
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

  it("auro-drawer moves focus to close button when opened", async () => {
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

    // Give the FocusTrap's focusFirstElement() a tick to run (it fires after
    // the transitionend callback, which is synchronous in jsdom).
    await new Promise((resolve) => setTimeout(resolve, 50));

    const closeButton = el.drawerBib.shadowRoot.querySelector("#closeButton");
    expect(closeButton).to.not.equal(null);

    // focusFirstElement() focuses the auro-button *inside* #closeButton, so
    // shadowRoot.activeElement will be the auro-button, not the wrapper div.
    // Check containment to confirm focus landed within the close button area.
    const activeInShadow = el.drawerBib.shadowRoot.activeElement;
    expect(
      closeButton.contains(activeInShadow),
      "Focus should be within the close button when drawer opens",
    ).to.be.true;
  });

  it("auro-drawer returns focus to triggerElement after close", async () => {
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

    // Open via trigger click (the real user path)
    trigger.click();
    await elementUpdated(drawer);
    expect(drawer.hasAttribute("open")).to.be.true;

    // Close via close button and wait for the component's own close event
    const closeButton =
      drawer.drawerBib.shadowRoot.querySelector("#closeButton");
    expect(closeButton).to.not.equal(null);

    const toggled = oneEvent(drawer, "auroDrawer-toggled");
    closeButton.click();
    await toggled;
    await elementUpdated(drawer);
    await elementUpdated(drawer.drawerBib);

    expect(drawer.hasAttribute("open")).to.be.false;

    // Focus restoration is deferred until after the native dialog.close() (300ms + 350ms setTimeout).
    await _sleep(400);
    expect(
      !drawer.contains(document.activeElement),
      "Focus should no longer be inside the drawer after close",
    ).to.be.true;
  });

  it("non-modal drawer opens via setAttribute, not showModal, so focus is not trapped", async () => {
    const el = await fixture(html`
      <auro-drawer open>
        <h2 slot="header">Non-modal</h2>
        <div slot="content"><p>Content</p></div>
      </auro-drawer>
    `);

    await elementUpdated(el);

    // Scroll lock is only applied in the showModal() code path.
    // A falsy _scrollLocked confirms setAttribute('open','') was used.
    expect(el.bib._scrollLocked, "non-modal drawer must not lock page scroll")
      .to.not.be.true;
  });

  it("modal drawer opens via showModal and locks page scroll", async () => {
    const el = await fixture(html`
      <auro-drawer open modal>
        <h2 slot="header">Modal</h2>
        <div slot="content"><p>Content</p></div>
      </auro-drawer>
    `);

    await elementUpdated(el);

    // _scrollLocked is set to true only when showModal() is called.
    expect(
      el._scrollLocked,
      "modal drawer must lock page scroll via showModal()",
    ).to.be.true;
  });

  it("nested drawer opens via setAttribute regardless of modal state", async () => {
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

    // Nested drawers must never use showModal() — top-layer breaks positional anchoring.
    expect(drawer.bib._scrollLocked, "nested drawer must not lock scroll").to
      .not.be.true;
  });

  it("non-modal drawer with a disabled footer button does not escape focus on open", async () => {
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

    // The drawer must stay open — if the local FocusTrap bug were still present
    // and focus escaped to document body, handleFocusLoss() would close it.
    expect(
      el.hasAttribute("open"),
      "drawer stays open despite a disabled last element",
    ).to.be.true;
    // Non-modal: scroll lock must not be active
    expect(el.bib._scrollLocked, "non-modal repro drawer must not lock scroll")
      .to.not.be.true;
  });

  it("non-modal drawer with no footer button does not escape focus on open", async () => {
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

    expect(el.hasAttribute("open"), "drawer stays open with no footer button")
      .to.be.true;
    expect(
      el.bib._scrollLocked,
      "non-modal no-button drawer must not lock scroll",
    ).to.not.be.true;
  });

  it("non-modal drawer closes when dialog-cancel event fires (Escape)", async () => {
    const el = await fixture(html`
      <auro-drawer open>
        <h2 slot="header">Non-modal escape test</h2>
      </auro-drawer>
    `);

    await elementUpdated(el);
    expect(el.hasAttribute("open")).to.be.true;

    // Simulate the native <dialog> cancel event (fired by the browser on Escape).
    el.bib.dispatchEvent(
      new Event("dialog-cancel", { bubbles: true, composed: true }),
    );
    await elementUpdated(el);

    expect(el.hasAttribute("open"), "non-modal drawer should close on Escape")
      .to.be.false;
  });

  it("modal drawer stays open when dialog-cancel event fires (Escape blocked)", async () => {
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

    expect(el.hasAttribute("open"), "modal drawer must ignore Escape").to.be
      .true;
  });
});

function _sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function _getFixtureWithOpenButton() {
  const open = () => {
    el.setAttribute("open", "");
  };
  const el = await fixture(html`
    <auro-drawer>
      <h2 slot="header">It's a drawer</h2>
      <div slot="content">
        <p>Hello World!</p>
      </div>
      <div slot="footer"><button>Click</button></div>
    </auro-drawer>
    <button @click=${open}>Open</button>
  `);
  return el;
}
