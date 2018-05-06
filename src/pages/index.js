import React from 'react';
import AppListing from '../components/app-listing';
import JumpToApps from '../components/jump-to-apps';
import Header from '../components/header';
import { Helmet } from 'react-helmet';

export default ({ data: { site, apps: { edges: appEdges }, appIcons: { edges: iconEdges }} }) => {
  const apps = appEdges.map(({ node: app }) => {
    const { identifier } = app.info;
    const iconEdge = iconEdges.find(({ node }) => {
      return node.base.split('.')[0] === identifier;
    });
    const iconUrl = iconEdge ? iconEdge.node.publicURL : '';

    return {
      app,
      iconUrl
    }
  });

  return (
    <div>
      <Helmet>
        <title>{`${site.siteMetadata.title} - ${site.siteMetadata.tagLine}`}</title>
        <meta name='description' content={site.siteMetadata.description} />
      </Helmet>
      <Header metaData={site.siteMetadata} />
      <JumpToApps apps={apps} />
      {
        apps.map(({ app, iconUrl }) =>
          <AppListing key={app.info.identifier} app={app} iconUrl={iconUrl} />
        )
      }
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        tagLine
        description
      }
    }
    appIcons: allFile(filter: { relativeDirectory: { eq: "images/app-icons" }}) {
      edges {
        node {
          base
          publicURL
        }
      }
    }
    apps: allAppsJson(sort: { fields: [id], order: ASC }) {
      edges {
        node {
          info {
            identifier
            name
            appstoreUrl
            documentationUrl
          }
          actions {
            name
            description
            url
            parameters {
              name
              description
              options {
                description
              }
            }
          }
        }
      }
    }
  }
`
