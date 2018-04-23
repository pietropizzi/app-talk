import React from 'react';
import './header.module.css';

export default () => {
  return (
    <div styleName='container'>
      <div className='g-module'>
        <h1 styleName='logo'>AppTalk</h1>
        <div styleName='content'>
          <h2 styleName='title'>Let iOS apps talk</h2>
          <div className='g-type-thin' styleName='introText'>
            A directory of iOS apps that can be launched via URLs including ones that support x-callback-url. <a href=''>Learn more ></a>
          </div>
          <div className='g-type-thin' styleName='explainerText'>
            Is an app / URL missing? Did you find an error? Help me keep the documentation up-to-date. <a href=''>See how to contribute ></a>
          </div>
        </div>
      </div>
    </div>
  );
};
