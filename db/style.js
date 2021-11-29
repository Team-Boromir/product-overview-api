const {DataTypes, Op} = require('sequelize');
const {sequelize, Style, Photo, Sku} = require('./db.js');



const getStyles = (product_id) => {
  // The data the client is expecting is an object with a product_id property and a results property
  let stylesContainer = {product_id: product_id};
  // After collecting all of the styles in this array I will add it to the styles container
  let styles = [];
  // debugger;
  return Style.findAll({
    attributes: ['id', 'name', 'original_price', 'sale_price', 'default?', 'ProductId'],
    where: {
      ProductId: product_id
    },
    include: [{
      model: Photo,
      attributes: ['url', 'thumbnail_url']
    }, {
      model: Sku,
      attributes: ['id', 'size', 'quantity']
    }]
  })
  .then((results) => {
    styles = results;
    // Iterate over the results
    return results;
  })
};


module.exports = {
  getStyles
};




// // Now for each style we need to make a query promise to get the pictures and styles
// let promises = styles.map((style) => {
//   return Promise.all([
//     Photo.findAll({
//       attributes: ['url', 'thumbnail_url'],
//       where: {
//         StyleId: style.id
//       },
//       raw: true
//     }),
//     Sku.findAll({
//       attributes: ['id', 'size', 'quantity'],
//       where: {
//         StyleId: style.id
//       },
//       raw: true
//     })
//   ])
//   .catch((err) => {
//     debugger;
//   })
// })
// // This is a little bit confusing but now that we have collected an array of picture and sku query promises we need to make we need to actually use Promise.all to wait for all of the queries to return data
// return Promise.all(promises)
// .then((results) => {
//   // All the data is stored in results and we just need to parse it and add it to the correct style in the styles array
//   for (let i = 0; i < styles.length; i++) {
//     styles[i].photos = results[i][0];
//     let skus = results[i][1];
//     styles[i].skus = {};
//     skus.forEach((sku) => {
//       styles[i].skus[sku.id] = {
//         quantity: sku.quantity,
//         size: sku.size
//       }
//     })
//   }
//   // Add the styles to the stylesContainer
//   stylesContainer.results = styles;
//   // stylesContainer will be what is available when .then is invoked after using getStyles()
//   return stylesContainer;
// });