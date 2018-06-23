
import {
  BREAKPOINT_KEYS,
  BREAKPOINTS
} from './breakpoint';

describe('breakpoints', () => {

  test.each(Object.keys(BREAKPOINTS))('exist (%s)', (key) =>
    expect(BREAKPOINT_KEYS).toContain(key));

  test.each(Object.values(BREAKPOINTS))('is a number (%i)', (value) =>
    expect(value).toEqual(expect.any(Number)));

});
