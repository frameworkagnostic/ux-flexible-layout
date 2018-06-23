
import * as grid12Column from './grid12Column';

export {
  BREAKPOINT_KEYS,
  BREAKPOINTS,
} from './breakpoint';

export const UNIT = 'px';
export const STEP = 5;

export const GRID12_SIZES = [
  ...grid12Column.GRID_SIZES_DEFAULT,
  ...grid12Column.GRID_SIZES,
];

export const GRID12_GUTTERS = grid12Column.GRID_GUTTERS;
