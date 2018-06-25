import React from 'react';
import classnames from 'classnames';

import gridStyles from 'dist/grid-12-column/css-modules.css';
import styles from './BlueFilter.css';

const classNames = {
  root: classnames(
    gridStyles.container,
  ),
  filter: classnames(
    gridStyles.container,
    styles.filter,
  ),
  filterItems: classnames(
    gridStyles.gridXs2,
    styles.filterItems,
  ),
};

export const BlueFilter = () => {
  return (
    <div className={classNames.filter}>
      <div className={classNames.filterItems}>Item #1</div>
      <div className={classNames.filterItems}>Item #2</div>
      <div className={classNames.filterItems}>Item #3</div>
      <div className={classNames.filterItems}>Item #4</div>
      <div className={classNames.filterItems}>Item #5</div>
      <div className={classNames.filterItems}>Item #6</div>
    </div>
  );
};
