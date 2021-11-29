const {Sequelize, DataTypes, Op} = require('sequelize');
const {USER_NAME, PASSWORD} = require('../config/config.js');

const sequelize = new Sequelize('product-info', USER_NAME, PASSWORD, {
  dialect: 'postgres',
  logging: false
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


// Set up the associations between the tables
// Products has a one to many relationship with features
Product.hasMany(Feature);
Feature.belongsTo(Product);

// Products has a one to many relationship with styles
Product.hasMany(Style);
Style.belongsTo(Product);

// Products has a many to many relationship with products through the related_products table
Product.belongsToMany(Product, {as: 'CurrentProductId', through: RelatedProduct})
Product.belongsToMany(Product, {as: 'RelatedProductId', through: RelatedProduct})

// Styles has a one to many relationship with photos
Style.hasMany(Photo);
Photo.belongsTo(Style);

// Styles has a one to many relationship with skus
Style.hasMany(Sku);
Sku.belongsTo(Style);

sequelize.sync();


module.exports = {
  sequelize,
  Product,
  Feature,
  Photo,
  RelatedProduct,
  Sku,
  Style
};