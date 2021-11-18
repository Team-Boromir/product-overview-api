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

});

const Photo = sequelize.define('Photo', {

});

// I'm not sure how to do a relational set up and will need to look into this
const Related_Product = sequelize.define('Relate_Product', {

});

const Sku = sequelize.define('Sku', {

});

const Style = sequelize.define('Style', {

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