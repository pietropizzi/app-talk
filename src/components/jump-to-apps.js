import React from 'react';
import AppIcon from './app-icon';
import './jump-to-apps.module.css'

export default ({ apps }) => {
  return (
    <div styleName='container'>
      <div className='g-module'>
        <div className='g-type-h4' styleName='jumpToAppText'>{'Jump to app'}</div>
        <div styleName='appsContainer'>
          {
            apps.map(({ app: { info }, iconUrl }) =>
              <a href={`#${info.identifier}`} key={info.identifier} styleName='app'>
                <AppIcon large url={iconUrl} />
                <div styleName='appTitle'>
                  { info.name }
                </div>
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
}
