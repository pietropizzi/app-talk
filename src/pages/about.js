import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';

export default ({ data: { site  }}) => {
  return (
    <div>
      <Header isSmall metaData={site.siteMetadata} />
      <h1 className='g-module g-headline-seperator'>About</h1>
      <Intro />
    </div>
  );
};
