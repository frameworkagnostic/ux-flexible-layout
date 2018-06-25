import React from 'react';
import classnames from 'classnames';

import { imgSrc } from './image-base64.json';
import gridStyles from 'dist/grid-12-column/css-modules.css';
import examples from './examples.css';

const classNames = {
  root: classnames(
    gridStyles.gridXs6,
    gridStyles.container,
    examples.purple50
  ),
  contentCont: classnames(
    gridStyles.gridXs8,
    gridStyles.box,
    examples.purple100,
    examples.root,
  ),
  imageCont: classnames(
    gridStyles.gridXs4,
    gridStyles.box,
    examples.purple200,
    examples.root,
    gridStyles.flex,
  ),
  image: classnames(
    gridStyles.alignSelfCenter
  )
};

export const BootstrapFeaturedPost = () => {
  return (
    <div className={classNames.root}>
      <div className={classNames.contentCont}>
        <span>World</span>
        <h2>Featured post</h2>
        <h4>Nov 12</h4>
        <p>This is a wider card with supporting text below as a natural lead-in to additional content.</p>
        <a href="#">Continue reading</a>
      </div>
      <div className={classNames.imageCont}>
        <img
          className={classNames.image}
          src={imgSrc} />
      </div>
    </div>
  );
};
