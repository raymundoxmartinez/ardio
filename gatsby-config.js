/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  siteMetadata: {
    siteName: 'ARverse',
    siteTitle: 'Share and Experience.',
    siteDescription:
      'Create and experience an Augmented Reality.',
    siteAuthor: 'Raymundo Martinez',
    siteUrl: 'https://arverse.io',
    siteKeywords: [
      'ar',
      'augmented reality',
      'social network',
      'art',
      'create',
      'animation',
      '3D',
      'vr',
      'scifi',
      'future',
      'secure',
      'treasure',
    ],
    // siteLogo: 'src/resources/logo862x828.png',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "js/three.js",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        src: "https://raw.githack.com/AR-js-org/AR.js/master/three.js/build/ar-nft.js",
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    }],
}
