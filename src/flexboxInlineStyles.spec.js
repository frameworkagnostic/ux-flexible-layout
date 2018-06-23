

import { flexboxInlineStyles } from './flexboxInlineStyles';

describe('flexbox inline styles', () => {
  test('isObject', () => expect(flexboxInlineStyles).toEqual(expect.any(Object)));
  test('snapshot', () => expect(flexboxInlineStyles).toMatchSnapshot());
});
