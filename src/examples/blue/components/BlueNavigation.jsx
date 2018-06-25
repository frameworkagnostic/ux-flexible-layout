import React from 'react';
import classnames from 'classnames';

import gridStyles from 'dist/grid-12-column/css-modules.css';
import styles from './BlueNavigation.css';

const classNames = {
  root: classnames(
    gridStyles.container,
  ),
  navigation: classnames(
    gridStyles.container,
  ),
  navigationItemsLeft: classnames(
    gridStyles.gridXs2,
  ),
  navigationItemsRight: classnames(
    gridStyles.gridXs6,
    styles.navigationItemsRight,
  ),
};

export const BlueNavigation = () => {
  return (
    <div className={classNames.navigation}>
      <div className={classNames.navigationItemsLeft}>Item #1</div>
      <div className={classNames.navigationItemsLeft}>Item #2</div>
      <div className={classNames.navigationItemsLeft}>Item #3</div>
      <div className={classNames.navigationItemsRight}>Item #4</div>
    </div>
  );
};
