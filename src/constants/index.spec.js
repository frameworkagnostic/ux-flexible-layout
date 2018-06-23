
import {
  unit,
  step
} from './index';

describe('breakpoints', () => {
  test('test unit', () => expect(unit).toEqual(expect.any(String)));
  test('test unit', () => expect(step).toEqual(expect.any(Number)));
});
