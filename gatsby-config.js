module.exports = {
  siteMetadata: {
    title: `Design+Code`,
    description: `React development porftolio project.`,
    author: `Chris Carty`,
    keywords: "chris carty portfolio web design react development architecture",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-plugin-styled-components`,

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
