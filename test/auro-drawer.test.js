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

    el.removeAttribute("open");

    const { detail } = await oneEvent(el, "auroDrawer-toggled");
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
      await expect(el).to.be.accessible();
    }
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
