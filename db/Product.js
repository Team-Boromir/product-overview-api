const {DataTypes, Op} = require('sequelize');
const {sequelize, Product, Feature} = require('./db.js');



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


module.exports = {
  getProducts,
  getProduct
};