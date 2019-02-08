import React from 'react';
import AppIcon from './app-icon';
import './jump-to-apps.module.css'

export default class JumpToApps extends React.Component {

  render() {
    const { apps } = this.props;
    return (
      <div id='jumpToApps'>
        <div styleName='innerContainer'>
          <div className='g-module'>
            <div styleName='titleContainer'>
              <div className='g-type-h4' styleName='titleText'>{'Jump to app'}</div>
              <div className='g-type-h4' styleName='titleText'>{`All apps (${apps.length})`}</div>
            </div>
            <div styleName='appsContainer'>
              {
                apps.map(({ app: { info }, iconResolutions }) =>
                  <a href={`#${info.identifier}`} key={info.identifier} styleName='app'>
                    <AppIcon large resolutions={iconResolutions} />
                    <div styleName='appTitle'>
                      { info.name }
                    </div>
                  </a>
                )
              }
            </div>
          </div>
        </div>
        <h3 className='g-module g-headline-seperator'>{'App details'}</h3>
      </div>
    );
  }
}
