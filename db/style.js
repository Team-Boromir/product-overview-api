const {DataTypes, Op} = require('sequelize');
const {sequelize, Style, Photo, Sku} = require('./db.js');



const getStyles = (product_id) => {
  // The data the client is expecting is an object with a product_id property and a results property
  let stylesContainer = {product_id: product_id};
  // After collecting all of the styles in this array I will add it to the styles container
  let styles = [];
  return Style.findAll({
    where: {
      productId: product_id
    },
    raw: true
  })
  .then((results) => {
    styles = results;
    // Now for each style we need to make a query promise to get the pictures and styles
    let promises = styles.map((style) => {
      return Promise.all([
        Photo.findAll({
          where: {
            styleId: style.style_id
          }
        }),
        Sku.findAll({
          where: {
            styleId: style.style_id
          }
        })
      ])
    })
    // This is a little bit confusing but now that we have collected an array of picture and sku query promises we need to make we need to actually use Promise.all to wait for all of the queries to return data
    return Promise.all(promises)
    .then((results) => {
      // All the data is stored in results and we just need to parse it and add it to the correct style in the styles array
      for (let i = 0; i < styles.length; i++) {
        styles[i].photos = results[i][0];
        styles[i].skus = results[i][1];
      }
      // Add the styles to the stylesContainer
      stylesContainer.results = styles;
      // stylesContainer will be what is available when .then is invoked after using getStyles()
      return stylesContainer;
    });
  })
};


module.exports = {
  getStyles
};