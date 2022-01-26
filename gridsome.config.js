// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
/*
module.exports = {
  siteName: 'Gridsome',
  plugins: []
}
*/
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
    siteName: 'CBE Bus',
    siteDescription:'cbe online bus ticketing system',
    // templates: {
    //     BlogPost: '/blog/:slug',
    // },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [tailwindcss, autoprefixer],
            },
        },
    },
    plugins:[
        {
            use: '@gridsome/source-strapi',
            options: {
              apiURL:process.env.STRAPI_URL,
              queryLimit: 1000, // Defaults to 100
              plural: true,
              contentTypes: ['transport-service-providers','bus-details','booked-tickets','route-details','route-lists','seat-types'],
            //   singleTypes: ['seats'],
      
            }
          },
    ]
};