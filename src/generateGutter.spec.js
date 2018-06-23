
import { generateGutter } from './generateGutter';
import { GRID12_GUTTERS } from './constants';

describe('generate gutter', () => {
  test('isFunction', () => expect(generateGutter).toEqual(expect.any(Function)));

  describe('gutter 12 columns', () => {
    test('snapshot', () => expect(GRID12_GUTTERS).toMatchSnapshot());

    describe('create styles', () => {
      const styles = generateGutter('xs', GRID12_GUTTERS);
      test('isObject', () => expect(styles).toEqual(expect.any(Object)));
      test('snapshot', () => expect(styles).toMatchSnapshot());
    });
  });
});
