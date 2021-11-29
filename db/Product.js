const {DataTypes, Op} = require('sequelize');
const {sequelize, Product, Feature, RelatedProduct} = require('./db.js');



const getProducts = (count = 5, page = 1) => {
  return Product.findAll({
    offset: page * count - count,
    limit: count,
    raw: true
  })
};

const getProduct = (id) => {
  return Promise.all([
    Product.findByPk(id, {
      raw: true
    }),
    Feature.findAll({
      attributes: ['value', 'feature'],
      where: {
        ProductId: id
      },
      raw: true
    })
  ])
  .then((results) => {
    let product = results[0];
    product.features = results[1];
    return product;
  })
  .catch((err) => {
    console.log(err);
  })
};


const getRelated = (product_id) => {
  // Get the related_product_id for the passed in product_id
  return RelatedProduct.findAll({
    attributes: [
      'RelatedProductId'
    ],
    where: {
      CurrentProductId: product_id
    },
    raw: true
  })
  // Then we need to change the returned models into an array of just the values
  .then((models) => {
    return models.map((model) => {
      return model.RelatedProductId;
    })
  })
}


module.exports = {
  getProducts,
  getProduct,
  getRelated
};