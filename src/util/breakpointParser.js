const DESIGN_TOKEN_BREAKPOINT_PREFIX = "--ds-grid-breakpoint-";
const DESIGN_TOKEN_BREAKPOINT_OPTIONS = ["lg", "md", "sm", "xs"];

/**
 * Gets the pixel value of a breakpoint design token, or undefined if the token name isn't valid.
 * @param {string} value - The breakpoint name: `lg`, `md`, `sm`, or `xs`.
 * @returns {string | undefined} The breakpoint's pixel value, or undefined if the name isn't valid.
 */
export function parseBreakpointToken(value) {
  // verify the defined breakpoint is valid and exit out if not
  const validatedValue = DESIGN_TOKEN_BREAKPOINT_OPTIONS.includes(value)
    ? value
    : undefined;
  if (!validatedValue) {
    return undefined;
  }
  // get the pixel value for the defined breakpoint
  const docStyle = getComputedStyle(document.documentElement);
  return docStyle.getPropertyValue(DESIGN_TOKEN_BREAKPOINT_PREFIX + value);
}
