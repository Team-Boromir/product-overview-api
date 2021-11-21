const {DataTypes, Op} = require('sequelize');
const {sequelize, Product, Feature, RelatedProduct} = require('./db.js');



const getProducts = (count = 5, page = 1) => {
  let products = Product.findAll({
    where: {
      id: {
        [Op.lte]: count
      }
    }
  })
  return products;
};

const getProduct = (id) => {
  return Promise.all([
    Product.findByPk(id),
    Feature.findAll({
      where: {
        product_id: id
      }
    })
  ])
  .then((results) => {
    let product = results[0].dataValues;
    product.features = results[1].map((model) => {
      let feature = {};
      feature.feature = model.feature;
      feature.value = model.value;
      return feature;
    });
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
      'related_product_id'
    ],
    where: {
      current_product_id: product_id
    }
  })
  // Then we need to change the returned models into an array of just the values
  .then((models) => {
    return models.map((model) => {
      return model.related_product_id;
    })
  })
}


module.exports = {
  getProducts,
  getProduct,
  getRelated
};