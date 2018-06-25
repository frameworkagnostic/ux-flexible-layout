import React from 'react';
import classnames from 'classnames';

import gridStyles from 'dist/grid-12-column/css-modules.css';
import styles from './BlueCardTitle.css';

const classNames = {
  root: classnames(
    gridStyles.container,
  ),
  image: classnames(
    gridStyles.gridXs12,
  ),
  title: classnames(
    gridStyles.gridXs12,
  ),
  offers: classnames(
    gridStyles.gridXs12,
  ),
  annualFees: classnames(
    gridStyles.gridXs12,
  ),
  buttons: classnames(
    gridStyles.gridXs12,
  ),
};

export const BlueCardTitle = () => {
  return (
    <div className={classNames.root}>
      <div className={classNames.image}>
        image
      </div>
      <div className={classNames.title}>
        title
      </div>
      <div className={classNames.offers}>
        offers
      </div>
      <div className={classNames.annualFees}>
        annualFees
      </div>
      <div className={classNames.buttons}>
        buttons
      </div>
    </div>
  );
};
