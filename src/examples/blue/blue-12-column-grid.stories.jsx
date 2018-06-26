import React from 'react';
import classnames from 'classnames';

import { imgSrc } from 'src/examples/image-base64.json';
import gridStyles from 'dist/grid-12-column/css-modules.css';
import styles from 'src/examples/examples.css';
import stories from 'src/examples/blue/blue-12-column-grid.css';
import { BlueCardTitle } from './components/BlueCardTitle';
import { BlueNavigation } from './components/BlueNavigation';
import { BlueFilter } from './components/BlueFilter';


const classNames = {
  root: classnames(
    gridStyles.container,
    stories.root,
  ),
  bannerCont: classnames(
    gridStyles.gridXs12,
    stories.bannerCont,
  ),
  cardCont: classnames(
    gridStyles.gridXs12,
    stories.cardCont,
  ),
  cardCont: classnames(
    gridStyles.gridXs12,
    stories.cardCont,
  ),
  cardOfferCont: classnames(
    gridStyles.gridXs12,
    stories.cardOfferCont,
  ),
  needHelpCont: classnames(
    gridStyles.gridXs12,
    stories.needHelpCont,
  ),
  mailOfferCont: classnames(
    gridStyles.gridXs12,
    stories.mailOfferCont,
  ),
  rewardCardsCont: classnames(
    gridStyles.gridXs12,
    stories.rewardCardsCont,
  ),

};

export const name = 'Blue/Products';


export const examples = {
  '12 column grid Layout': () => (
    <div className={classNames.root}>
      <BlueNavigation />
      <div className={classNames.bannerCont}></div>
      <BlueFilter />
      <div className={classNames.cardCont}>
        <BlueCardTitle />
      </div>
      <div className={classNames.cardOfferCont}>
        <center>cardOfferCont</center>
      </div>
      <div className={classNames.needHelpCont}>
        <center>needHelpCont</center>
      </div>
      <div className={classNames.mailOfferCont}>
        <center>mailOfferCont</center>
      </div>
      <div className={classNames.rewardCardsCont}>
        <center>rewardCardsCont</center>
      </div>
    </div>
  ),
};
