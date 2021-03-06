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
};