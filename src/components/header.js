import React from 'react';
import Link from 'gatsby-link';
import './header.module.css';

export default ({ metaData, isSmall }) => {
  return (
    <div styleName='container'>
      <div className='g-module'>
        <div styleName='logoRow'>
          <h1 styleName='logoTitle'>
            <a styleName='logo' href='/'>{metaData.title}</a>
          </h1>
          <nav>
            <ul styleName='navList'>
              <li><Link styleName='navLink' to='/about' activeStyle={{ color: '#3f8273' }}>About</Link></li>
              <li><a styleName='navLink' href='https://github.com/pietropizzi/app-talk'>GitHub</a></li>
              <li><a styleName='navLink' href='https://twitter.com/pietropizzi'>Twitter</a></li>
            </ul>
          </nav>
        </div>
        <div styleName='content'>
          <h2 styleName='title'>{metaData.tagLine}</h2>
          { !isSmall &&
            <div>
              <div className='g-type-thin' styleName='introText'>
                { metaData.description }
                &nbsp;<Link to='/about'>Learn&nbsp;more</Link> or <a href='#jumpToApps'>See&nbsp;the&nbsp;apps</a>.
              </div>
              <div className='g-type-thin' styleName='explainerText'>
                Is an app / URL missing? Did you find an error? Help me keep the documentation up-to-date. <a href='https://github.com/pietropizzi/app-talk/blob/master/CONTRIBUTING.md'>See how to contribute</a>.
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
