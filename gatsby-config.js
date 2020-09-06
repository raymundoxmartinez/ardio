/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path')

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
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/app/*`] }
    },
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        '@src': path.join(__dirname, 'src'),
        '@components': path.join(__dirname, 'src/components'),
        '@atoms': path.join(__dirname, 'src/components/atoms'),
        '@molecules': path.join(__dirname, 'src/components/molecules'),
        '@templates': path.join(__dirname, 'src/components/templates'),
        '@forms': path.join(__dirname, 'src/components/forms'),
        '@pages': path.join(__dirname, 'src/components/pages'),
        '@theme': path.join(__dirname, 'src/theme'),
      },
    }
  ],
}
