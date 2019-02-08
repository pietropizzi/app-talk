import React from "react";
import "./index.css";

export default ({ children, ...props }) => <div>{children(props)}</div>;

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

    appIcons: allImageSharp(filter: { id: { regex: "data/icons/" } }) {
      edges {
        node {
          id
          resolutions(width: 64) {
            ...GatsbyImageSharpResolutions
          }
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
              required
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
`;
