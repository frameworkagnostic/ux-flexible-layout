
import { generateStyles } from './generateStyles';
import { GRID12_GUTTERS } from './constants';

describe('generate styles', () => {
  test('isFunction', () => expect(generateStyles).toEqual(expect.any(Function)));

  describe('default grid styles', () => {
    const styles = generateStyles();
    test('snapshot', () => expect(styles).toMatchSnapshot());
  });
});
