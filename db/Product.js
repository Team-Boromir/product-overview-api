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
  debugger;
  return products;
};

const getProduct = () => {
  debugger;
};



module.exports = {
  getProducts,
  getProduct
};