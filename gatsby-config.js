require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  proxy: {
    prefix: `/api`,
    url: `https://app.snipcart.com/api/sessions`,
  },
  siteMetadata: {
    title: `Onbegrensd`,
    description: `Onbegrensd, pre-order webshop voor custom made T-shirts, hoodies, sweaters en accessoires`,
    author: `Nick Van Royen`,
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
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Onbegrensd`,
        short_name: `Onbegrensd`,
        start_url: `/`,
        background_color: `#000`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/favicon-onbegrensd.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-snipcartv3',
      options: {
        apiKey: process.env.SNIPCART_API_KEY,
      },
    },
  ],
};
