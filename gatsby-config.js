require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Ince portfolio`,
    description: `Nhat Toan's portfolio`,
    author: `@ince`,
    copyright: `Ince.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ince portfolio`,
        short_name: `Ince`,
        start_url: `/`,
        background_color: `#EE5256`,
        theme_color: `#EE5256`,
        display: `standalone`,
        icon: `src/images/ince.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
