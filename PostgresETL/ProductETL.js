const {Sequelize} = require('sequelize');
const sequelize = require('../db/db.js');
const Product = require('../db/Product.js');
const csv = require('csv-parser');
const fs = require('fs');
const readline = require('readline');


async function processProductData() {
  let results = [];
  const stream = fs.createReadStream('./OldData/product.csv')
  .pipe(csv())
  .on('data', (data) => {
    results.push(data)
  })
  .on('end', () => {
    Product.bulkCreate(results)
    .catch((err) => {
      debugger;
    });
  })

  // const rl = readline.createInterface({
  //   input: stream,
  //   crlfDelay: Infinity
  // });

  // for await (const line of rl) {
  //   console.log(line);
  //   debugger;
  //   Product.build({
  //     id: 124
  //   })
  // }
}



processProductData();
// testConnection();