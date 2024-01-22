import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-drawer';

describe('auro-drawer', () => {
  it('sets the CSS class on auro-drawer > div element', async () => {
    const el = await fixture(html`
      <auro-drawer cssclass="testClass"></auro-drawer>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-drawer is accessible', async () => {
    const el = await fixture(html`
      <auro-drawer cssclass="testClass"></auro-drawer>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-drawer custom element is defined', async () => {
    const el = await !!customElements.get("auro-drawer");

    await expect(el).to.be.true;
  });
});
