import React from 'react';
import Img from 'gatsby-image';
import * as styles from './app-icon.module.css';

export default (props) => {
  const { large, fixed } = props;
  if (fixed === undefined) {
    console.log(fixed);
  }
  return (
    <div className={`${styles.container} ${large ? styles.containerLarge : ''}`}>
      <Img fixed={fixed} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
