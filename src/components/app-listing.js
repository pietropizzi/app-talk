import React from 'react';
import AppAction from './app-action';
import AppIcon from './app-icon';
import * as styles from './app-listing.module.css'

export default ({ app: { info, actions }, iconFixed }) => {
  return (
    <div id={info.identifier}>
      <div className={styles.titleContainer}>
        <div className={`g-module ${styles.titleInner}`}>
          <div className={styles.titleMain}>
            <a className={styles.toApps} href='#jumpToApps'>Jump to apps</a>
            <AppIcon fixed={iconFixed} />
            <h2 className={styles.title}>{info.name}</h2>
          </div>
          <div className={styles.titleSide}>
            { !!info.appstoreUrl && <a className={styles.titleLink} href={info.appstoreUrl}>{'App Store'}</a> }
            { !!info.appstoreUrl && !!info.documentationUrl && <span>&nbsp;·&nbsp;</span> }
            { !!info.documentationUrl && <a className={styles.titleLink} href={info.documentationUrl}>{'Documentation'}</a> }
          </div>
        </div>
      </div>
      <div className='g-module'>
        {
          actions.map((action) =>
            <div key={`${action.url}-${action.name}`} className={styles.appActionWrapper}>
              <AppAction action={action} />
            </div>
          )
        }
      </div>
    </div>
  );
};
