import React from 'react';
import Img from 'gatsby-image';
import './app-icon.module.css';

export default ({ large, resolutions }) => {
  return (
    <div styleName={'container' + (large ? ' containerLarge' : '')}>
      <Img resolutions={resolutions} style={{ width: '100%', height: '100%' }} />
    </div>
  );
}
