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
    }
  })
  .then((results) => {
    // We have all the styles and they are stored in the results array as models that we need to convert to regular objects and push them into the styles array
    results.forEach((style) => {
      styles.push(style.dataValues);
    });
    // Now for each style we need to make a query promise to get the pictures and styles
    let promises = results.map((style) => {
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
    // This is a little bit confusing but now that we have collected an array of picture and ske query promises we need to make we need to actually use Promise.all to wait for all of the queries to return data
    return Promise.all(promises)
    .then((results) => {
      // All the data is stored in results and we just need to parse it and add it to the correct style in the styles array
      for (let i = 0; i < styles.length; i++) {
        let photos = results[i][0];
        let skus = results[i][1];
        styles[i].photos = photos.map((photo) => {
          return photo.dataValues;
        });
        styles[i].skus = skus.map((sku) => {
          return sku.dataValues;
        })
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