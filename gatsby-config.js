module.exports = {
  siteMetadata: {
    title: "daniel stefan.",
    author: "Daniel Stefan Klose",
    siteUrl: `https://daniel-stefan.dev`,
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sass`,
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    `gatsby-plugin-fontawesome-css`,
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog/`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
