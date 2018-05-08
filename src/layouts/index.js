import React from 'react';
import './index.css';

export default ({ children, ...props }) =>
  <div>
    { children(props) }
  </div>
;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        tagLine
        description
        url
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
