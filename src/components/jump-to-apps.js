import React from 'react';
import AppIcon from './app-icon';
import './jump-to-apps.module.css'

export default class JumpToApps extends React.Component {

  onAppClick = ({ identifier, name }) => () => {
    clicky.log(`#${identifier}`, name);
  };

  render() {
    return (
      <div id='jumpToApps'>
        <div styleName='innerContainer'>
          <div className='g-module'>
            <div className='g-type-h4' styleName='jumpToAppText'>{'Jump to app'}</div>
            <div styleName='appsContainer'>
              {
                this.props.apps.map(({ app: { info }, iconResolutions }) =>
                  <a href={`#${info.identifier}`} key={info.identifier} styleName='app' onClick={this.onAppClick(info)}>
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
        <h3 className='g-module g-headline-seperator'>{'All apps'}</h3>
      </div>
    );
  }
}
