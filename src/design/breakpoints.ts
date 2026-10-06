/**
 * Canonical breakpoints. CSS media queries must use these exact values.
 * sm  40rem / 640px
 * md  48rem / 768px
 * lg  64rem / 1024px
 * xl  80rem / 1280px
 * 2xl 90rem / 1440px
 */
export const breakpoints = {
  sm: "40rem",
  md: "48rem",
  lg: "64rem",
  xl: "80rem",
  "2xl": "90rem",
} as const;

export type Breakpoint = keyof typeof breakpoints;
