const express = require('express');
const products = require('../db/Product.js');
const styles = require('../db/style.js');
const app = express();
const port = 3000;

app.get('/products', (req, res) => {
  products.getProducts()
  .then((products) => {
    res.status(200).send(products);
  })
  .catch((err) => {
    res.sendStatus(400);
  });
});

app.get('/products/:product_id', (req, res) => {
  products.getProduct(req.params.product_id)
  .then((product) => {
    res.status(200).send(product);
  })
  .catch((err) => {
    console.log(err);
  });
});


app.get('/products/:product_id/styles', (req, res) => {
  styles.getStyles(req.params.product_id)
  .then((styles) => {
    res.status(200).send(styles);
  })
  .catch((err) => {
    console.log(err);
  });
});


app.get('/products/:product_id/related', (req, res) => {
  products.getRelated(req.params.product_id)
  .then((relatedProducts) => {
    res.status(200).send(relatedProducts);
  })
  .catch((err) => {
    console.log(err);
  });
});



app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});