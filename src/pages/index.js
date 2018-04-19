import React from 'react';
import AppListing from '../components/app-listing';
import JumpToApps from '../components/jump-to-apps';

export default ({ data: { apps: { edges: appEdges }, appIcons: { edges: iconEdges }} }) => {
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
      <JumpToApps apps={apps} />
      <div className='g-module'>
        <div className='g-type-h4'>{'All apps'}</div>
        {
          apps.map(({ app, iconUrl }) =>
            <AppListing key={app.info.identifier} app={app} iconUrl={iconUrl} />
          )
        }
      </div>
    </div>
  )
}

export const query = graphql`
  query IndexQuery {
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
