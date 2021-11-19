const {getProducts, getProduct} = require('../db/Product.js');

describe('Getting Products', () => {

  it('getProducts should be a function', () => {
    expect(typeof getProducts).toBe('function');
  });

  it('should return 5 products by default', () => {
    return getProducts()
    .then((products) => {
      expect(products.length).toBe(5);
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('should be able to specify quantity of products returned with count', () => {
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

  it('getProducts should be a function', () => {
    expect(typeof getProduct).toBe('function');
  });

});