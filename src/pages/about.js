import React from 'react';
import Header from '../components/header';

export default ({ data: { site } }) => {
  return (
    <div>
      <Header metaData={site.siteMetadata} isSmall />
      <div className='g-module'>
        <h1>About</h1>
      </div>
    </div>
  );
}
