const {Sequelize, DataTypes, Op} = require('sequelize');
const {USER_NAME, PASSWORD, DB_URL, DB_PORT} = require('../config/config.js');

const sequelize = new Sequelize('product', USER_NAME, PASSWORD, {
  dialect: 'postgres',
  logging: false,
  host: DB_URL,
  port: DB_PORT,
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
  style_id: {
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
const RelatedProduct = sequelize.define('Related_Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  current_product_id: {
    type: DataTypes.INTEGER
  },
  related_product_id: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
});

const Sku = sequelize.define('Sku', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  style_id: {
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
  style_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  product_id: {
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
  "default?": {
    type: DataTypes.BOOLEAN
  }
}, {
  timestamps: false
});


module.exports = {
  sequelize,
  Product,
  Feature,
  Photo,
  RelatedProduct,
  Sku,
  Style
};