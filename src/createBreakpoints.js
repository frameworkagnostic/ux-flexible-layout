// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.

import {
  BREAKPOINT_KEYS,
  BREAKPOINTS,
  UNIT,
  STEP
} from './constants/index';

export const keys = BREAKPOINT_KEYS;

// Keep in mind that @media is inclusive by the CSS specification.
export function createBreakpoints(breakpoints = {}) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm[.
    values = BREAKPOINTS,
    unit = UNIT,
    step = STEP,
    ...other
  } = breakpoints;

  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }

  function down(key) {
    const endIndex = keys.indexOf(key) + 1;
    const upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return `@media (max-width:${(value - step) / 100}${unit})`;
  }

  function between(start, end) {
    const endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return (
      `@media (min-width:${values[start]}${unit}) and ` +
      `(max-width:${(values[keys[endIndex]] - step) / 100}${unit})`
    );
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return {
    keys,
    values,
    up,
    down,
    between,
    only,
    width,
    ...other,
  };
}
