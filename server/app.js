const express = require('express');
const products = require('../db/Product.js');
const styles = require('../db/style.js');
const app = express();
const port = 3000;

// stub for the products endpoint
app.get('/products', (req, res) => {
  products.getProducts()
  .then((products) => {
    res.status(200).send(products);
  })
  .catch((err) => {
    res.sendStatus(400);
  })
});

// Stub for the product/:product_id endpoint
app.get('/products/:product_id', (req, res) => {
  products.getProduct(req.params.product_id)
  .then((product) => {
    res.status(200).send(product);
  })
  .catch((err) => {
    console.log(err);
  })
});


// Stub for the producs/:product_id/styles endpoint
app.get('/products/:product_id/styles', (req, res) => {
  res.send(200, 'Here be the styles you requested');
});


// Stub for the products/:product_id/related
app.get('/products/:product_id/related', (req, res) => {
  res.send(200, 'Here be the related products you requested');
});



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});