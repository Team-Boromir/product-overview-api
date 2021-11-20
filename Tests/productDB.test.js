const {getProducts, getProduct} = require('../db/product.js');

describe('Getting Products', () => {

  it('getProducts should be a function', () => {
    expect(typeof getProducts).toBe('function');
  });

  it('getProducts should return 5 products by default', () => {
    return getProducts()
    .then((products) => {
      expect(products.length).toBe(5);
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('getProducts should be able to specify quantity of products returned with count', () => {
    return getProducts(10)
    .then((products) => {
      expect(products.length).toBe(10);
    })
    .catch((err) => {
      console.log(err);
    })
  })

});

describe('Getting a Product', () => {

  it('getProduct should be a function', () => {
    expect(typeof getProduct).toBe('function');
  });

  it('getProduct should return a product with an id that matches the passed in id', () => {
    return getProduct(12321)
    .then((product) => {
      debugger;
      expect(product.id).toBe(12321);
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('getProduct should return the features included in the product object', () => {
    return getProduct(12321)
    .then((product) => {
      expect(product.features !== undefined).toBe(true);
    })
  })

});