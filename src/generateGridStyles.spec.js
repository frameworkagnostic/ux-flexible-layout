
import { keys, createBreakpoints } from './createBreakpoints';
import { generateGridReducer } from './generateGridStyles';
import { GRID12_SIZES } from './constants/index';

describe('generate grid', () => {
  test('isFunction', () => expect(generateGridReducer).toEqual(expect.any(Function)));

  describe('breakpoints', () => {
    test('snapshot', () => expect(keys).toMatchSnapshot());
  });

  describe('grid 12 columns', () => {
    test('snapshot', () => expect(GRID12_SIZES).toMatchSnapshot());

    describe('create styles', () => {
      const bp = createBreakpoints();
      const reducer = generateGridReducer(GRID12_SIZES, bp.up);
      const styles = keys.reduce(reducer, {});
      test('isObject', () => expect(styles).toEqual(expect.any(Object)));
      test('snapshot', () => expect(styles).toMatchSnapshot());
    });
  });
});
