import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"

export default function Four0Four() {
  return (
    <StaticQuery
        query={four0fourQuery}
        render={data => {
          const { site } = data;
          const { siteMetadata: { title, tagLine }} = site;
          const fullTitle = `${title} - ${tagLine}`;
          return (
            <div>
              <Layout>
                <Helmet>
                  <title>{fullTitle}</title>
                </Helmet>
                <Header isSmall metaData={site.siteMetadata} />
                <h1 className='g-module g-headline-seperator'>404</h1>
                <Intro />
              </Layout>
            </div>
          );
        }}
      />
  );
}

const four0fourQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        tagLine
        description
        url
      }
    }
  }
`;
