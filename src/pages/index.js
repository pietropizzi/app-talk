import React from 'react';
import AppListing from '../components/app-listing';

export default ({ data: { allAppsJson: { edges: appEdges }} }) => {
  console.log(appEdges);
  return (
    <div>
      {
        appEdges.map(({ node }) => <AppListing app={node} />)
      }
    </div>
  )
}

export const query = graphql`
  query AllAppsQuery {
    allAppsJson(sort: { fields: [id], order: ASC }) {
      edges {
        node {
          info {
            identifier
            name
            iconUrl
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
