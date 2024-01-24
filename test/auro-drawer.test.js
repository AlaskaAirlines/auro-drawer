import { fixture, html, expect, oneEvent, elementUpdated } from '@open-wc/testing';
import '../src/auro-drawer';

describe('auro-drawer', () => {
  it('auro-drawer is accessible', async () => {
    const el = await fixture(html`
      <auro-drawer open="true">
        <span slot="header">Blocking drawer</span>
        <span slot="content">Hello World!</span>
        <span slot="footer"><button>Click</button></span>
      </auro-drawer>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-drawer custom element is defined', async () => {
    const el = await !!customElements.get("auro-drawer");

    await expect(el).to.be.true;
  });

  it('auro-drawer modal-drawer does not render a close icon', async () => {
    const el = await fixture(html`
      <auro-drawer modal></auro-drawer>
    `);

    const root = el.shadowRoot;
    const title = root.querySelector('#drawer-close');
    await expect(title).to.equal(null);
  });

  it('closes when ESC pressed', async () => {
    const el = await fixture(html`
      <auro-drawer open>
        <span slot="header">It's a drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);
  
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await elementUpdated(el);
    expect(el.open).to.be.false;
  })
  
  it('does not close when ESC pressed if modal', async () => {
    const el = await fixture(html`
      <auro-drawer open modal>
        <span slot="header">It's a drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);
  
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await elementUpdated(el);
    expect(el.open).to.be.true;
  })

  it('dispatches toggle event on close', async () => {
    const el = await fixture(html`
      <auro-drawer open>
        <span slot="header">It's a drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);

    el.open = false;
    await oneEvent(el, 'toggle');
  });

  it('does not throw error when open set to false and already closed', async () => {
    const el = await fixture(html`
      <auro-drawer>
        <span slot="header">It's a drawer</span>
        <span slot="content">Hello World!</span>
      </auro-drawer>
    `);

    el.open = false;
    await el.updateComplete;
  });
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getFixtureWithOpenButton() {
  const open = function() {
    el.open = true;
  }
  const el = await fixture(html`
    <auro-drawer>
      <span slot="header">It's a drawer</span>
      <span slot="content">Hello World!</span>
      <span slot="footer"><button>Click</button></span>
    </auro-drawer>
    <button @click=${open}>Open</button>
  `);
  return el;
}
