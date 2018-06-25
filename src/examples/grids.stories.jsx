
import React from 'react';
import classnames from 'classnames';

import gridStyles from 'dist/grid-12-column/css-modules.css';
import backgroundColor from './color-values/backgroud-colors.css';

const create = (n) => (new Array(n)).join('-|-').split('--').map((v, i) => i);
console.log('gridStyles', gridStyles);

export const name = 'Grid/12 column grid';

export const examples = {
  '1xs': () => (
    <div id="container" className={classnames(gridStyles.container, gridStyles.containerFlexGrow)}>
      {create(13).map((i) => (
        <div key={i} className={classnames(gridStyles.gridXs1, gridStyles.box, backgroundColor.purple50)}>
          <center>gridXs1</center>
        </div>
      ))}
    </div>
  ),
  '2xs': () => (
    <div id="container" className={classnames(gridStyles.container, gridStyles.containerFlexGrow)}>
      {create(7).map((i) => (
        <div key={i} className={classnames(gridStyles.gridXs2, gridStyles.box, backgroundColor.purple50)}>
          <center>gridXs2</center>
        </div>
      ))}
    </div>
  ),
  '3xs': () => (
    <div id="container" className={classnames(gridStyles.container, gridStyles.containerFlexGrow)}>
      {create(5).map((i) => (
        <div key={i} className={classnames(gridStyles.gridXs3, gridStyles.box, backgroundColor.purple50)}>
          <center>Xs1</center>
        </div>
      ))}
    </div>
  ),
  '4xs': () => (
    <div id="container" className={classnames(gridStyles.container, gridStyles.containerFlexGrow)}>
      {create(4).map((i) => (
        <div key={i} className={classnames(gridStyles.gridXs4, gridStyles.box, backgroundColor.purple50)}>
          <center>gridXs4</center>
        </div>
      ))}
    </div>
  ),
  '6xs': () => (
    <div id="container" className={classnames(gridStyles.container, gridStyles.containerFlexGrow)}>
      {create(3).map((i) => (
        <div key={i} className={classnames(gridStyles.gridXs6, gridStyles.box, backgroundColor.purple50)}>
          <center>gridXs6</center>
        </div>
      ))}
    </div>
  ),
};
