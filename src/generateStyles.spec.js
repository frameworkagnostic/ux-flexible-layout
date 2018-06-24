
import { generateStyles } from './generateStyles';
import { GRID12_SIZES, GRID12_GUTTERS } from './constants';

describe('generate styles', () => {
  test('isFunction', () => expect(generateStyles).toEqual(expect.any(Function)));

  describe('default grid styles', () => {
    const styles = generateStyles();
    test('snapshot', () => expect(styles).toMatchSnapshot());
  });

  describe('default grid 12 column with gutters styles', () => {
    const styles = generateStyles(GRID12_SIZES, GRID12_GUTTERS);
    test('snapshot', () => expect(styles).toMatchSnapshot());
  });
});
