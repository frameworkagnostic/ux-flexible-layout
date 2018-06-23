
import * as properties from './index';

describe('unit constants', () => {
  test('test unit', () => expect(properties.UNIT).toEqual(expect.any(String)));
  test('test step', () => expect(properties.STEP).toEqual(expect.any(Number)));
});

describe('to level api', () => {
  test('UNIT', () => expect(properties.UNIT).toBeDefined());
  test('STEP', () => expect(properties.STEP).toBeDefined());
  test('BREAKPOINT_KEYS', () => expect(properties.BREAKPOINT_KEYS).toBeDefined());
  test('BREAKPOINTS', () => expect(properties.BREAKPOINTS).toBeDefined());
  test('GRID12_COLUMN', () => expect(properties.GRID12_SIZES).toBeDefined());
  test('GRID12_GUTTERS', () => expect(properties.GRID12_GUTTERS).toBeDefined());
  test('snapshot', () => expect(properties).toMatchSnapshot());
});
