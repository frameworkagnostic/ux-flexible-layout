
import { flexboxInlineStyles } from './flexboxInlineStyles';
import { generateGutter } from './generateGutter';
import { generateGridReducer } from './generateGridStyles';
import { keys , createBreakpoints } from './createBreakpoints';
import { GRID12_SIZES, GRID12_GUTTERS } from './constants';

export const generateStyles = (grids = GRID12_SIZES, gutters = GRID12_GUTTERS) => {
  const { up } = createBreakpoints();
  const reducer = generateGridReducer(grids, up);

  return {
    ...flexboxInlineStyles,
    ...generateGutter('xs', gutters),
    ...keys.reduce(reducer, {}),
  };
}
