import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import styles from '../dist/grid-12-column/css-modules.css';

console.log('styles', styles);

storiesOf('Welcome', module).add('to Storybook', () => (
  <div className={styles.container}>
    <div className={styles.gridXs12}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>

    <div className={styles.gridXs6}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>
    <div className={styles.gridXs6}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>

    <div className={styles.gridXs3}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>
    <div className={styles.gridXs3}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>
    <div className={styles.gridXs3}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>
    <div className={styles.gridXs3}>
      <center style={{backgroundColor: 'lightblue', margin: '10px 5px' }}>12</center>
    </div>

  </div>
));
