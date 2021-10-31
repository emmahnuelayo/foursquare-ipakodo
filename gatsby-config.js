module.exports = {
  siteMetadata: {
    siteUrl: 'https://foursquare-ipakodo.org',
    title: 'foursquare-ipakodo',
    description:
      'Foursquare Gospel Church, Ipakodo district headquarters website',
    author: 'Fagbemide, Emmanuel Ayomide',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://foursquare-ipakodo.herokuapp.com`,
        queryLimit: 4000, // Default to 100
        collectionTypes: [
          `article`,
          `audio-message`,
          `event`,
          `gallery`,
          `pastorate`,
          `bulletin`,
          `council`,
          `sen-pastor`,
          `fellowship`,
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
        name: 'Foursquare Ipakodo',
        start_url: '/',
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};
