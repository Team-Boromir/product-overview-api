const {Sequelize, DataTypes, Op} = require('sequelize');
const {USER_NAME, PASSWORD} = require('../config/config.js');

const sequelize = new Sequelize('product-info', USER_NAME, PASSWORD, {
  timestamps: false,
  dialect: 'postgres'
});

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
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
}, {
  timestamps: false
});

const Feature = sequelize.define('Feature', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  product_id: {
    type: DataTypes.INTEGER
  },
  feature: {
    type: DataTypes.STRING
  },
  value: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

const Photo = sequelize.define('Photo', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  styleId: {
    type: DataTypes.INTEGER
  },
  url: {
    type: DataTypes.STRING
  },
  thumbnail_url: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

// I'm not sure how to do a relational set up and will need to look into this
const Related_Product = sequelize.define('Relate_Product', {

}, {
  timestamps: false
});

const Sku = sequelize.define('Sku', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  styleId: {
    type: DataTypes.INTEGER
  },
  size: {
    type: DataTypes.STRING
  },
  quantity: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
});

const Style = sequelize.define('Style', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  productId: {
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING
  },
  sale_price: {
    type: DataTypes.INTEGER
  },
  original_price: {
    type: DataTypes.INTEGER
  },
  default_price: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
});


module.exports = {
  sequelize,
  Product,
  Feature,
  Photo,
  Related_Product,
  Sku,
  Style
};