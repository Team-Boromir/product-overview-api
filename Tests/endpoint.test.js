const pactum = require('pactum');



describe('Product api has the expected endpoints', () => {

  it('should have a GET /products endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products')
      .expectStatus(200)
      .expectBody('Here be products');
  });

  it('should have a GET /products/:product_id endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products/123456')
      .expectStatus(200)
      .expectBody('Here be one product you requested');
  });

  it('should have a GET /products/:product_id/styles endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products/123456/styles')
      .expectStatus(200)
      .expectBody('Here be the styles you requested');
  });

  it('should have a GET /products/product_id/related endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products/123456/related')
      .expectStatus(200)
      .expectBody('Here be the related products you requested');
  });

});