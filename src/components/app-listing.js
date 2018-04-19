import React from 'react';
import AppAction from './app-action';
import AppIcon from './app-icon';
import './app-listing.module.css'

export default ({ app: { info, actions }, iconUrl }) => {
  return (
    <div id={info.identifier}>
      <div styleName='titleContainer'>
        <AppIcon url={iconUrl} />
        <h2 styleName='title'>{info.name}</h2>
      </div>
      {
        actions.map((action) =>
          <div key={action.url} styleName='appActionWrapper'>
            <AppAction action={action} />
          </div>
        )
      }
    </div>
  );
};
