const {getProducts, getProduct, getRelatedProducts} = require('../db/Product.js');

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

  it('getProducts should return a product with an id that matches the passed in id', () => {
    return getProduct(12321)
    .then((product) => {
      expect(product.id).toBe(12321);
    })
    .catch((err) => {
      console.log(err);
    });
  });

  it('getProducts should return the features included in the product object', () => {
    return getProduct(12321)
    .then((product) => {
      expect(product.features !== undefined).toBe(true);
    })
  })

});

describe('Getting related products', () => {

  it('getRelatedProducts should be a function', () => {
    expect(typeof getRelatedProducts).toBe('function');
  })

  it('getRelatedProducts should resolve to an array', () => {
    return getRelatedProducts(123433)
    .then((relatedProducts) => {
      debugger;
      expect(Array.isArray(relatedProducts)).toBe(true);
    })
  })

  

})