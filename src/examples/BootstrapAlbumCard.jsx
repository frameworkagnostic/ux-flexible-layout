import React from 'react';

import styles from 'dist/grid-12-column/css-modules.css';

const imageProps = {
  style: {
    backgroundColor: '#cdcdcd',
  },
};

const divProps = {
  style: {
    backgroundColor: 'lightblue',
    marginBottom: '10px',
  },
};


export const BootstrapAlbumCard = () => (
  <div className={styles.container}>
    <div className={styles.gridXs12}>
      <center style={{...imageProps.style, height: '225px' }}>Image</center>
    </div>
    <div className={styles.gridXs12}>
      <center style={{...divProps.style, height: '159px' }}>Button</center>
    </div>
  </div>
);
