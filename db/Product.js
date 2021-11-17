const sequelize = require('./db.js');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  name: {
    
  }
})