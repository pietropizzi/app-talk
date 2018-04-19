import React from 'react';
import './app-icon.module.css';

export default ({ large, url }) => {
  return (
    <div
      styleName={'container' + (large ? ' containerLarge' : '')}
      style={{ backgroundImage: `url(${url})` }}
    />
  );
}
