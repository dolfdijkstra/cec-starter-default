module.exports = {
  siteMetadata: {
    title: 'CEC Default Starter',
    author: 'Content and Experience Cloud',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-cec',
      options: {
        contentServer:
          'https://experiencedemo-gse00015123.uscom-east-1.oraclecloud.com',
        channelToken: '3983db029cfc8d185826fbc5bc7c5633',
        fromCache: false,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'cec-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
  ],
}
