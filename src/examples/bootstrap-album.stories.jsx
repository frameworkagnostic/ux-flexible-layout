
import React from 'react';

import styles from 'dist/grid-12-column/css-modules.css';
import { BootstrapAlbum } from './BootstrapAlbum';
import { BootstrapFeaturedPost } from './BootstrapFeaturedPost';
import UXBootstrapFeaturedPost from './image/UXBootstrapFeaturedPost.jpg';

export const name = 'Bootstrap/12 column grid';

export const examples = {
  'album': () => <BootstrapAlbum />,
  'feature post': () => (
    <section>
      <BootstrapFeaturedPost />
      <img src={UXBootstrapFeaturedPost} style={{ width: '50%'}}/>
    </section>
  ),
};
