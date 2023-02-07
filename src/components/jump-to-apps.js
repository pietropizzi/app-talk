import React from 'react';
import AppIcon from './app-icon';
import * as styles from './jump-to-apps.module.css'

export default class JumpToApps extends React.Component {

  render() {
    const { apps } = this.props;
    return (
      <div id='jumpToApps'>
        <div className={styles.innerContainer}>
          <div className='g-module'>
            <div className={styles.titleContainer}>
              <div className={`g-type-h4 ${styles.titleText}`}>{'Jump to app'}</div>
              <div className={`g-type-h4 ${styles.titleText}`}>{`All apps (${apps.length})`}</div>
            </div>
            <div className={styles.appsContainer}>
              {
                apps.map(({ app: { info }, iconFixed }) =>
                  <a href={`#${info.identifier}`} key={info.identifier} className={styles.app}>
                    <AppIcon large fixed={iconFixed} />
                    <div className={styles.appTitle}>
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
