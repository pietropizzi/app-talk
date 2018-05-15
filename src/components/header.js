import React from 'react';
import Link from 'gatsby-link';
import './header.module.css';

export default ({ metaData, isSmall }) => {
  return (
    <div styleName='container'>
      <div className='g-module'>
        <h1>
          <a styleName='logo' href='/'>{metaData.title}</a>
        </h1>
        <div styleName='content'>
          <h2 styleName='title'>{metaData.tagLine}</h2>
          { !isSmall &&
            <div>
              <div className='g-type-thin' styleName='introText'>
                { metaData.description }
                &nbsp;<Link to='/about'>Learn&nbsp;more</Link> or <a href='#jumpToApps'>See&nbsp;the&nbsp;apps</a>.
              </div>
              <div className='g-type-thin' styleName='explainerText'>
                Is an app / URL missing? Did you find an error? Help me keep the documentation up-to-date. <a href='https://github.com/pietropizzi/app-talk/blob/master/docs/CONTRIBUTE.md'>See how to contribute</a>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
