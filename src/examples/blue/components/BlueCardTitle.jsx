import React from 'react';
import classnames from 'classnames';

import gridStyles from 'dist/grid-12-column/css-modules.css';
import styles from './BlueCardTitle.css';
import imgSrc from '../../images/mastercard-1.png';

console.log('styles', styles);

const classNames = {
  root: classnames(
    gridStyles.container,
    styles.root,
  ),
  image: classnames(
    gridStyles.gridXs12,
    styles.image,
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
      <div className={classNames.imageCont}>
        <img src={imgSrc}  className={classNames.image} />
      </div>
      <div className={classNames.title}>
      Cash Rewards
      </div>
      <div className={classNames.offers}>
      $150 online cash rewards bonus offer
      <ul>
        <li>
        1% cash back on every purchase, 2% at grocery stores and wholesale clubs and 3% on gas for the first $2,500 in combined grocery/wholesale club/gas purchases each quarter Calculate rewards
        </li>
        <li>
        Earn unlimited 1.5 points for every $1 you spend on all purchases everywhere, every time and no expiration on points Calculate Rewards
        </li>
        <li>
        Get up to $200 in combined Airline Incidental and TSA Pre✓ ® /Global Entry Statement Credits
        </li>
      </ul>
      </div>
      <div className={classNames.annualFees}>
        <span>
        0% Intro APR† for 15 billing cycles for purchases, and any balance transfers made in the first 60 days of opening your account. After that, a Variable APR that’s currently 14.49% - 24.49% will apply.
        </span>
      </div>
      <div className={classNames.buttons}>
        buttons
      </div>
    </div>
  );
};
