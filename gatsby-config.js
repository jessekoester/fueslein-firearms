module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.vitalignspine.com'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['poppins:300,400,500,600,700'],
        display: 'swap'
      }
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        implementation: require('sass')
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'gallery',
        path: `${__dirname}/content/gallery`
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-use-query-params'
  ]
}
