/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  // highlight-start
  siteMetadata: {
    title: `Title from siteMetadata`,
    description: `A simple description about pandas eating lots ...`,
    author: `gatsbyjs`,
  },
  // highlight-end
  plugins: [
    {
      resolve:`gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#6b37df`,
        theme_color: `#6b37df`,
        display: `standalone`,
        icon: `./static/favicon.ico`
      },
      
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    { 
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}