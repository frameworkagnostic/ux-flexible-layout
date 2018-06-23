
import {
  GRID_GUTTERS,
  GRID_SIZES
} from './grid12Column';

describe('grid constants', () => {

  test.each(GRID_GUTTERS)('grid gutter is a number (%i)', (value) =>
    expect(value).toEqual(expect.any(Number)));

  test.each(GRID_SIZES)('grid size is a number (%i)', (value) =>
    expect(value).toEqual(expect.any(Number)));

});
