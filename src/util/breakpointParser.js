const DESIGN_TOKEN_BREAKPOINT_PREFIX = "--ds-grid-breakpoint-";
const DESIGN_TOKEN_BREAKPOINT_OPTIONS = ["lg", "md", "sm", "xs"];

/**
 * Parses a design token to get its pixel value.
 * Returns the pixel value of the design token or undefined if the token is invalid.
 * @param {string} value - `lg`, `md`, `sm`, or `xs`.
 * @returns {string | undefined} The pixel value of the design token or undefined if invalid.
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
