module.exports = {
  pathPrefix: '/app-talk',
  siteMetadata: {
    title: 'AppTalk',
    tagLine: 'Let iOS apps talk',
    description: 'A user contributable directory of iOS apps with x-callback-urls.',
    url: 'https://app-talk.com'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/data/icons`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `source`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
};
