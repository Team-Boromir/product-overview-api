const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('postgres:localhost:5432/product-info', {
  define: {
    freezeTableName: true
  }
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}


sequelize.authenticate()
.then(() => {
  console.log('Connection has been established successfully.');
})
.catch((error) => {
  console.error('Unable to connect to the database:', error);
})


// testConnection();