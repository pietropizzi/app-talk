module.exports = {
  pathPrefix: '/app-talk',
  siteMetadata: {
    title: 'AppTalk',
    tagLine: 'Let iOS apps talk',
    description: 'A directory of iOS apps that can be launched via URLs including ones that support x-callback-url.',
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
        name: `source`,
        path: `${__dirname}/src/`
      }
    },
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        // Exclude global styles from the plugin using a RegExp:
        // exclude: `\/global\/`
      }
    }
  ]
};
