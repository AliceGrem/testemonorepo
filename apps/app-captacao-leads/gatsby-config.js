module.exports = {
  siteMetadata: {
    title: `Aquisição Icarros`,
    description: `Sua Loja Vendendo mais no iCarros. Tudo sobre carros novos, usados e seminovos.`,
    keywords: `carros, automóveis, veículos, carros novos, seminovo, usado, 0km, comprar, vender, comparar, financiamento, tabela-fipe, notícias, vídeos, automotivo`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/icarros.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'react-icarros-sandbox-private',
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-breakpoints',
  ],
};
