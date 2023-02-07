import React from 'react';
import { Link } from 'gatsby';
import * as styles from './header.module.css';

export default ({ metaData, isSmall }) => {
  return (
    <div className={styles.container}>
      <div className='g-module'>
        <div className={styles.logoRow}>
          <h1 className={styles.logoTitle}>
            <a className={styles.logo} href='/'>{metaData.title}</a>
          </h1>
          <nav>
            <ul className={styles.navList}>
              <li><Link className={styles.navLink} to='/about' activeStyle={{ color: '#3f8273' }}>About</Link></li>
              <li><a className={styles.navLink} href='https://github.com/pietropizzi/app-talk'>GitHub</a></li>
              <li><a className={styles.navLink} href='https://twitter.com/pietropizzi'>Twitter</a></li>
            </ul>
          </nav>
        </div>
        <div className={styles.content}>
          <h2 className={styles.title}>{metaData.tagLine}</h2>
          { !isSmall &&
            <div>
              <div className={`g-type-thin ${styles.introText}`}>
                { metaData.description }
                &nbsp;<Link to='/about'>Learn&nbsp;more</Link> or <a href='#jumpToApps'>See&nbsp;the&nbsp;apps</a>.
              </div>
              <div className={`g-type-thin ${styles.explainerText}`}>
                Is an app / URL missing? Did you find an error? Help me keep the documentation up-to-date. <a href='https://github.com/pietropizzi/app-talk/blob/master/CONTRIBUTING.md'>See how to contribute</a>.
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};
