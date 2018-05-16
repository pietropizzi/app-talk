import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import { Helmet } from 'react-helmet';

export default ({ data: { site  }}) => {
  const { siteMetadata: { title, tagLine }} = site;
  const fullTitle = `${title} - ${tagLine}`;

  return (
    <div>
      <Helmet>
        <title>{fullTitle}</title>
      </Helmet>
      <Header isSmall metaData={site.siteMetadata} />
      <h1 className='g-module g-headline-seperator'>About</h1>
      <Intro />
    </div>
  );
};
