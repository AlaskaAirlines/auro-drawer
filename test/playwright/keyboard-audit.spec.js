/**
 * Keyboard Behavior Audit — auro-drawer
 * Covers all 6 scenarios defined in demo/keyboard-audit.html
 * Based on TRD: https://github.com/orgs/AlaskaAirlines/discussions/624
 *
 * Run:
 *   npm run dev            (in a separate terminal — http://localhost:8000)
 *   npx playwright test    (in another terminal)
 */

import { test, expect } from '@playwright/test';

const PAGE = '/keyboard-audit';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Traverse shadow roots to find the deepest focused element and return a
 * plain-object description that can be serialised across the evaluate boundary.
 */
async function deepActive(page) {
  return page.evaluate(() => {
    function traverse(root) {
      const el = root.activeElement;
      if (!el) return null;
      if (el.shadowRoot?.activeElement) return traverse(el.shadowRoot);
      return el;
    }
    const el = traverse(document);
    if (!el) return null;
    return {
      tagName: el.tagName.toLowerCase(),
      id: el.id || null,
      ariaLabel: el.getAttribute('aria-label') || null,
      type: el.type || null,
      textContent: (el.textContent || '').trim().slice(0, 80),
      // The immediate custom-element host (one shadow-root up)
      hostId: el.getRootNode()?.host?.id || null,
      hostTagName: el.getRootNode()?.host?.tagName?.toLowerCase() || null,
    };
  });
}

/**
 * Returns the id of the top-level document.activeElement (not shadow-piercing).
 * Useful for confirming focus returned to a trigger button after close.
 */
async function topActiveId(page) {
  return page.evaluate(() => document.activeElement?.id ?? null);
}

/**
 * Polls until document.activeElement.id matches expectedId, then asserts it.
 * Focus restoration after drawer close is asynchronous (animation + setTimeout),
 * so polling is more reliable than reading activeElement immediately.
 * @param {import('@playwright/test').Page} page
 * @param {string} expectedId
 * @param {number} [timeout=1000]
 */
async function waitForActiveId(page, expectedId, timeout = 1000) {
  await page.waitForFunction(
    (id) => document.activeElement?.id === id,
    expectedId,
    { timeout }
  );
  const activeId = await topActiveId(page);
  expect(activeId).toBe(expectedId);
}

/**
 * Returns true if focus is currently inside the given drawer element — either
 * because the drawer's shadow root has focus (close button) or because a
 * slotted descendant (auro-input, auro-button) is the active element.
 */
async function isFocusInDrawer(page, drawerId) {
  return page.evaluate((id) => {
    const drawer = document.getElementById(id);
    if (!drawer) return false;
    const ae = document.activeElement;
    if (!ae) return false;
    // Focus is inside the drawer's own shadow root → host becomes activeElement
    if (ae === drawer) return true;
    // Focus is on a slotted light-DOM descendant
    return drawer.contains(ae);
  }, drawerId);
}

/** Wait for a `<dialog>` (inside any auro-drawer shadow root) to be visible. */
async function waitForDialog(page) {
  await expect(page.getByRole('dialog')).toBeVisible({ timeout: 3000 });
}

/** Wait for all dialogs to disappear. */
async function waitForNoDialog(page) {
  await expect(page.getByRole('dialog')).toBeHidden({ timeout: 3000 });
}

/** Click a trigger and wait for the drawer to open and focus to settle. */
async function openDrawer(page, triggerName) {
  await page.getByRole('button', { name: triggerName }).click();
  await waitForDialog(page);
  // Allow the component to move focus after the dialog becomes visible
  await page.waitForTimeout(300);
}

// ---------------------------------------------------------------------------
// Scenario 1 — Standard drawer (fully working happy path)
// ---------------------------------------------------------------------------

test.describe('Scenario 1 — Standard Drawer (close button + 2 inputs + enabled button)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open standard drawer');
  });

  test('initial focus lands on the close button (×)', async ({ page }) => {
    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Tab moves forward: close → Input 1 → Input 2 → Submit', async ({ page }) => {
    // Verify starting position before any Tab press
    let focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);

    // Tab → Input 1
    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s1input1');

    // Tab → Input 2
    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s1input2');

    // Tab → Submit button
    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    const submitId = focused?.hostId ?? focused?.id;
    expect(submitId).toBe('closeScenario1');
  });

  test('Tab wraps from Submit back to close button', async ({ page }) => {
    // Advance focus to Submit
    await page.keyboard.press('Tab'); // Input 1
    await page.keyboard.press('Tab'); // Input 2
    await page.keyboard.press('Tab'); // Submit

    // Tab once more should wrap → close button
    await page.keyboard.press('Tab');

    const inDrawer = await isFocusInDrawer(page, 'scenario1Drawer');
    expect(inDrawer).toBe(true);

    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Shift+Tab moves backward: close ← Submit ← Input 2 ← Input 1', async ({ page }) => {
    // Start: close button focused → Shift+Tab wraps to Submit
    await page.keyboard.press('Shift+Tab');
    let focused = await deepActive(page);
    const submitId = focused?.hostId ?? focused?.id;
    expect(submitId).toBe('closeScenario1');

    // Shift+Tab → Input 2
    await page.keyboard.press('Shift+Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s1input2');

    // Shift+Tab → Input 1
    await page.keyboard.press('Shift+Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s1input1');

    // Shift+Tab → close button
    await page.keyboard.press('Shift+Tab');
    focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Shift+Tab wraps from close button to Submit (stays inside drawer)', async ({ page }) => {
    // Focus is already on close button
    await page.keyboard.press('Shift+Tab');

    const inDrawer = await isFocusInDrawer(page, 'scenario1Drawer');
    expect(inDrawer).toBe(true);

    const focused = await deepActive(page);
    const submitId = focused?.hostId ?? focused?.id;
    expect(submitId).toBe('closeScenario1');
  });

  test('Escape closes the drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
  });

  test('clicking the × close button closes the drawer', async ({ page }) => {
    await page.getByRole('button', { name: /close/i }).click();
    await waitForNoDialog(page);
  });

  test('focus returns to the trigger button after closing', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario1');
  });
});

// ---------------------------------------------------------------------------
// Scenario 2 — Repro A: disabled Submit button (known broken)
// ---------------------------------------------------------------------------

test.describe('Scenario 2 — Repro A: 2 inputs + disabled button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open drawer (disabled button)');
  });

  test('initial focus lands on the close button', async ({ page }) => {
    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Tab forward: close → Input 1 → Input 2 (disabled Submit is skipped)', async ({ page }) => {
    // Verify starting position before any Tab press
    let focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);

    await page.keyboard.press('Tab'); // Input 1
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s2input1');

    await page.keyboard.press('Tab'); // Input 2
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s2input2');

    // Tab once more — disabled button must be skipped; focus should wrap back
    // inside the drawer (currently broken — see ADO 1491978)
    await page.keyboard.press('Tab');
    const inDrawer = await isFocusInDrawer(page, 'scenario2Drawer');

    // ⚠ This is the known-broken behaviour. Mark this individual check so CI
    // still runs the assertion but treats a failure as expected.
    await test.step('Tab wraps from Input 2 — stays inside drawer (known broken)', async () => {
      expect(inDrawer, 'focus escaped the drawer after Tab from last enabled element').toBe(true);
    });
  });

  test('Shift+Tab backward: Input 2 → Input 1 → close button', async ({ page }) => {
    // Move to Input 2 first
    await page.keyboard.press('Tab');
    await page.keyboard.press('Tab');

    await page.keyboard.press('Shift+Tab'); // Input 1
    let focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s2input1');

    await page.keyboard.press('Shift+Tab'); // close button
    focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Escape closes the drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
  });

  test('focus returns to trigger after closing', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario2');
  });
});

test('Scenario 2 — Tab wraps from Input 2 back to close button', async ({ page }) => {
  await page.goto(PAGE);
  await openDrawer(page, 'Open drawer (disabled button)');

  // Advance to Input 2 (the last enabled element)
  await page.keyboard.press('Tab');
  await page.keyboard.press('Tab');
  // One more Tab should wrap inside the drawer
  await page.keyboard.press('Tab');

  const inDrawer = await isFocusInDrawer(page, 'scenario2Drawer');
  expect(inDrawer).toBe(true);

  const focused = await deepActive(page);
  expect(focused?.ariaLabel).toMatch(/close/i);
});

test('Scenario 2 — Shift+Tab wraps from close button to Input 2', async ({ page }) => {
  await page.goto(PAGE);
  await openDrawer(page, 'Open drawer (disabled button)');

  // Focus is on close button — Shift+Tab should wrap to Input 2 (not disabled Submit)
  await page.keyboard.press('Shift+Tab');

  const inDrawer = await isFocusInDrawer(page, 'scenario2Drawer');
  expect(inDrawer).toBe(true);

  const focused = await deepActive(page);
  expect(focused?.hostId ?? focused?.id).toBe('s2input2');
});

// ---------------------------------------------------------------------------
// Scenario 3 — Repro B: no footer button (known broken)
// ---------------------------------------------------------------------------

test.describe('Scenario 3 — Repro B: 2 inputs, no footer button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open drawer (no button)');
  });

  test('initial focus lands on the close button', async ({ page }) => {
    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Tab forward: close → Input 1 → Input 2', async ({ page }) => {
    // Verify starting position before any Tab press
    let focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s3input1');

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s3input2');
  });

  test('Escape closes the drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
  });

  test('focus returns to trigger after closing', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario3');
  });
});

test('Scenario 3 — Tab wraps from Input 2 back to close button', async ({ page }) => {
  await page.goto(PAGE);
  await openDrawer(page, 'Open drawer (no button)');

  await page.keyboard.press('Tab'); // Input 1
  await page.keyboard.press('Tab'); // Input 2
  await page.keyboard.press('Tab'); // Should wrap to close button

  const inDrawer = await isFocusInDrawer(page, 'scenario3Drawer');
  expect(inDrawer).toBe(true);

  const focused = await deepActive(page);
  expect(focused?.ariaLabel).toMatch(/close/i);
});

test('Scenario 3 — Shift+Tab wraps from close button to Input 2', async ({ page }) => {
  await page.goto(PAGE);
  await openDrawer(page, 'Open drawer (no button)');

  await page.keyboard.press('Shift+Tab');

  const inDrawer = await isFocusInDrawer(page, 'scenario3Drawer');
  expect(inDrawer).toBe(true);

  const focused = await deepActive(page);
  expect(focused?.hostId ?? focused?.id).toBe('s3input2');
});

// ---------------------------------------------------------------------------
// Scenario 4 — Modal drawer
// ---------------------------------------------------------------------------

test.describe('Scenario 4 — Modal Drawer (Escape suppressed)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open modal drawer');
  });

  test('close button (×) is NOT rendered in modal mode', async ({ page }) => {
    // In modal mode the × button should be absent
    await expect(page.getByRole('button', { name: /close/i })).toHaveCount(0);
  });

  test('initial focus lands on the first focusable element (input or footer button)', async ({ page }) => {
    const inDrawer = await isFocusInDrawer(page, 'scenario4Drawer');
    expect(inDrawer).toBe(true);
  });

  test('Tab cycles only between the input and the footer button', async ({ page }) => {
    // Tab forward a few times — focus must always stay inside the drawer
    for (let i = 0; i < 4; i++) {
      await page.keyboard.press('Tab');
      const inDrawer = await isFocusInDrawer(page, 'scenario4Drawer');
      expect(inDrawer, `Focus escaped on Tab press ${i + 1}`).toBe(true);
    }
  });

  test('Escape does NOT close the modal drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    // Give a moment for any unintended close to occur
    await page.waitForTimeout(300);
    await expect(page.getByRole('dialog')).toBeVisible();
  });

  test('"I understand" button closes the drawer', async ({ page }) => {
    await page.getByRole('button', { name: 'I understand' }).click();
    await waitForNoDialog(page);
  });

  test('focus returns to trigger after closing with footer button', async ({ page }) => {
    await page.getByRole('button', { name: 'I understand' }).click();
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario4');
  });
});

// ---------------------------------------------------------------------------
// Scenario 5 — Nested drawer
// ---------------------------------------------------------------------------

test.describe('Scenario 5 — Nested Drawer (positioned container)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open nested drawer');
  });

  test('initial focus lands on the close button', async ({ page }) => {
    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Tab forward: close → Input 1 → Input 2 → Close (footer)', async ({ page }) => {
    // Verify starting position before any Tab press
    let focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s5input1');

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s5input2');

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('closeScenario5');
  });

  test('Tab wraps from footer Close back to the close button', async ({ page }) => {
    await page.keyboard.press('Tab'); // Input 1
    await page.keyboard.press('Tab'); // Input 2
    await page.keyboard.press('Tab'); // Footer Close
    await page.keyboard.press('Tab'); // Should wrap to close button

    const inDrawer = await isFocusInDrawer(page, 'scenario5Drawer');
    expect(inDrawer).toBe(true);

    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Shift+Tab reverses correctly', async ({ page }) => {
    // From close button, Shift+Tab should wrap to footer Close
    await page.keyboard.press('Shift+Tab');
    let focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('closeScenario5');

    await page.keyboard.press('Shift+Tab'); // Input 2
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s5input2');

    await page.keyboard.press('Shift+Tab'); // Input 1
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s5input1');

    await page.keyboard.press('Shift+Tab'); // close button
    focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Escape closes the nested drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
  });

  test('focus returns to trigger after closing', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario5');
  });
});

// ---------------------------------------------------------------------------
// Scenario 6 — Unformatted drawer (no built-in close button)
// ---------------------------------------------------------------------------

test.describe('Scenario 6 — Unformatted Drawer (no header, no × button)', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open unformatted drawer');
  });

  test('no built-in × close button exists', async ({ page }) => {
    // The unformatted attribute removes the drawer chrome
    await expect(page.getByRole('button', { name: /^close$/i })).toHaveCount(0);
  });

  test('initial focus lands on Input 1 (first focusable; no × button)', async ({ page }) => {
    const focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s6input1');
  });

  test('Tab forward: Input 1 → Input 2 → Done button', async ({ page }) => {
    // Verify starting position before any Tab press
    let focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s6input1');

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s6input2');

    await page.keyboard.press('Tab');
    focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('closeScenario6');
  });

  test('Tab wraps from Done back to Input 1', async ({ page }) => {
    await page.keyboard.press('Tab'); // Input 2
    await page.keyboard.press('Tab'); // Done

    await page.keyboard.press('Tab'); // Should wrap to Input 1
    const inDrawer = await isFocusInDrawer(page, 'scenario6Drawer');
    expect(inDrawer).toBe(true);

    const focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('s6input1');
  });

  test('Shift+Tab wraps from Input 1 to Done button', async ({ page }) => {
    // Focus is on Input 1
    await page.keyboard.press('Shift+Tab');

    const inDrawer = await isFocusInDrawer(page, 'scenario6Drawer');
    expect(inDrawer).toBe(true);

    const focused = await deepActive(page);
    expect(focused?.hostId ?? focused?.id).toBe('closeScenario6');
  });

  test('Escape closes the unformatted drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
  });

  test('focus returns to trigger after closing', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario6');
  });
});

// ---------------------------------------------------------------------------
// Scenario 7 — auro-drawer with native HTML inputs + button
// ---------------------------------------------------------------------------
// Isolates whether focus-ring visibility issues are caused by auro-input /
// auro-button or by the drawer itself. Uses the same auro-drawer shell as
// Scenario 1 but with plain <input> and <button> elements inside.

test.describe('Scenario 7 — auro-drawer with native HTML inputs + button', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(PAGE);
    await openDrawer(page, 'Open drawer (native inputs)');
  });

  test('initial focus lands on the close button (×)', async ({ page }) => {
    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Tab moves forward: close → Input 1 → Input 2 → Submit', async ({ page }) => {
    // Verify starting position
    let focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);

    // Tab → Input 1 (native <input>)
    await page.keyboard.press('Tab');
    let activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe('s7input1');

    // Tab → Input 2
    await page.keyboard.press('Tab');
    const input2Id = await page.evaluate(() => document.activeElement?.id);
    expect(input2Id).toBe('s7input2');

    // Tab → Submit (native <button>)
    await page.keyboard.press('Tab');
    const submitId = await page.evaluate(() => document.activeElement?.id);
    expect(submitId).toBe('closeScenario7');
  });

  test('Tab wraps from Submit back to close button', async ({ page }) => {
    await page.keyboard.press('Tab'); // Input 1
    await page.keyboard.press('Tab'); // Input 2
    await page.keyboard.press('Tab'); // Submit
    await page.keyboard.press('Tab'); // Should wrap → close button

    const inDrawer = await isFocusInDrawer(page, 'scenario7Drawer');
    expect(inDrawer).toBe(true);

    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Shift+Tab moves backward: close ← Submit ← Input 2 ← Input 1', async ({ page }) => {
    // From close button, Shift+Tab wraps to Submit
    await page.keyboard.press('Shift+Tab');
    let activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe('closeScenario7');

    await page.keyboard.press('Shift+Tab'); // Input 2
    activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe('s7input2');

    await page.keyboard.press('Shift+Tab'); // Input 1
    activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe('s7input1');

    await page.keyboard.press('Shift+Tab'); // close button
    const focused = await deepActive(page);
    expect(focused?.ariaLabel).toMatch(/close/i);
  });

  test('Shift+Tab wraps from close button to Submit (stays inside drawer)', async ({ page }) => {
    await page.keyboard.press('Shift+Tab');

    const inDrawer = await isFocusInDrawer(page, 'scenario7Drawer');
    expect(inDrawer).toBe(true);

    const activeId = await page.evaluate(() => document.activeElement?.id);
    expect(activeId).toBe('closeScenario7');
  });

  test('Escape closes the drawer', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
  });

  test('focus returns to trigger after closing', async ({ page }) => {
    await page.keyboard.press('Escape');
    await waitForNoDialog(page);
    await waitForActiveId(page, 'openScenario7');
  });
});
