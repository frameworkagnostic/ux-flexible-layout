
import { keys , createBreakpoints } from './createBreakpoints';

describe('breakpoints', () => {
  test('isFunction', () => expect(typeof createBreakpoints).toBe('function'));

  describe('createBreakpoints instantiate', () => {
    const breakpoints = createBreakpoints();
    test('isObject', () => expect(breakpoints).toEqual(expect.any(Object)));
    test('snapshot', () => expect(keys).toMatchSnapshot());
  });

  describe('breakpointKeys', () => {
    test('isArray', () => expect(keys).toEqual(expect.any(Array)));
    test('snapshot', () => expect(keys).toMatchSnapshot());
  });
});
