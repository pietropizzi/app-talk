import React from 'react';
import Header from '../components/header';
import Intro from '../components/intro';
import Layout from '../components/layout';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from "gatsby"

export default function About(props) {
  return (
    <StaticQuery
        query={aboutQuery}
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
                <h1 className='g-module g-headline-seperator'>About</h1>
                <Intro />
              </Layout>
            </div>
          );
        }}
      />
  );
};

const aboutQuery = graphql`
  query AboutQuery {
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

