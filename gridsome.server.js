// gridsome.server.js

const axios = require('axios')
require("dotenv").config();
module.exports = function (api) {
    api.loadSource(async actions => {
      const { data } = await axios.get(`${process.env.STRAPI_URL}/transport-service-providers/`)
      const collection = actions.addCollection({
        typeName: 'BusServiceProvider',
        path: '/BusServiceProvider/:id'
      })
      for(const course of data) {
        collection.addNode({
          id: course.id,
          path: '/BusServiceProvider/' + course.id,
          name: course.bspName,
          slogan: course.slogan,
          description: course.description,
          logo: course.logo,
          website:course.website,
          city:course.address.city,
          phone:course.address.phone,
          email:course.address.email,
        })
      }
    })
}