module.exports = {
  pathPrefix: '/app-talk',
  siteMetadata: {
    title: 'AppTalk - Let iOS apps talk'
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
    `gatsby-transformer-json`
  ]
};
