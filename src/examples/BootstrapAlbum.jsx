import React from 'react';
import classnames from 'classnames';
import { BootstrapAlbumCard } from './BootstrapAlbumCard';
import styles from 'dist/grid-12-column/css-modules.css';

const divProps = {
  style: {
    backgroundColor: 'lightblue',
    margin: '5px 2px'
  },
};

export const BootstrapAlbum = () => (
  <div className={styles.container}>
    <div className={classnames(styles.gridXs12)}>
      <center style={{...divProps.style, height: '56px' }}>Navigation</center>
    </div>

    <div className={classnames(styles.gridXs12)}>
      <center style={{...divProps.style, height: '370px' }}>jumbotron</center>
    </div>

    <div className={classnames(styles.gridXs12, styles.gridSm4)}>
      <BootstrapAlbumCard />
    </div>
    <div className={classnames(styles.gridXs12, styles.gridSm4)}>
      <BootstrapAlbumCard />
    </div>
    <div className={classnames(styles.gridXs12, styles.gridSm4)}>
      <BootstrapAlbumCard />
    </div>

    <div className={classnames(styles.gridXs12)}>
      <center style={{...divProps.style, height: '152px' }}>footer</center>
    </div>

  </div>
);
