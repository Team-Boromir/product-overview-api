const {DataTypes, Op} = require('sequelize');
const {sequelize, Product} = require('./db.js');



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
  return Product.findByPk(id)
};



module.exports = {
  getProducts,
  getProduct
};