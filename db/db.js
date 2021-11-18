const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres:localhost:5432/product-info', {
  define: {
    freezeTableName: true
  }
});

module.exports = sequelize;