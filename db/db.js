const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('postgres:localhost:5432/product-info');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    validate: {
      isInt: true
    }
  },
  name: {
    type: DataTypes.STRING
  },
  slogan: {
    type: DataTypes.STRING
  },
  description: {
    type: DataTypes.STRING(1000)
  },
  category: {
    type: DataTypes.STRING
  },
  default_price: {
    type: DataTypes.INTEGER
  }
});

const Feature = sequelize.define('Feature', {
  id: {},
  product_id: {},
  feature: {},
  value: {}
});

const Photo = sequelize.define('Photo', {
  id: {},
  styleId: {},
  url: {},
  thumbnail_url: {}
});

// I'm not sure how to do a relational set up and will need to look into this
const Related_Product = sequelize.define('Relate_Product', {

});

const Sku = sequelize.define('Sku', {
  id: {},
  styleId: {},
  size: {},
  quantity: {}
});

const Style = sequelize.define('Style', {
  id: {},
  productId: {},
  name: {},
  sale_price: {},
  original_price: {},
  default_price: {}
});



module.exports = {
  sequelize,
  Product,
  Feature,
  Photo,
  Relate_Product,
  Sku,
  Style
};