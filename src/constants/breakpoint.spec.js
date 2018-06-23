
import {
  BREAKPOINT_KEYS,
  BREAKPOINTS
} from './breakpoint';

describe('breakpoints', () => {

  test('matching keys', () => expect(Object.keys(BREAKPOINTS))
    .toEqual(expect.arrayContaining(BREAKPOINT_KEYS)));

});
