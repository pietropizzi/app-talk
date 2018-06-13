import React from 'react';
import AppAction from './app-action';
import AppIcon from './app-icon';
import './app-listing.module.css'

export default ({ app: { info, actions }, iconResolutions }) => {
  return (
    <div id={info.identifier}>
      <div styleName='titleContainer'>
        <div styleName='titleInner' className='g-module'>
          <div styleName='titleMain'>
            <a styleName='toApps' href='#jumpToApps'>Jump to apps</a>
            <AppIcon resolutions={iconResolutions} />
            <h2 styleName='title'>{info.name}</h2>
          </div>
          <div styleName='titleSide'>
            { !!info.appstoreUrl && <a styleName='titleLink' href={info.appstoreUrl}>{'App Store'}</a> }
            { !!info.appstoreUrl && !!info.documentationUrl && <span>&nbsp;·&nbsp;</span> }
            { !!info.documentationUrl && <a styleName='titleLink' href={info.documentationUrl}>{'Documentation'}</a> }
          </div>
        </div>
      </div>
      <div className='g-module'>
        {
          actions.map((action) =>
            <div key={`${action.url}-${action.name}`} styleName='appActionWrapper'>
              <AppAction action={action} />
            </div>
          )
        }
      </div>
    </div>
  );
};
