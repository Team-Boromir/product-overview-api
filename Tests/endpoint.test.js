const pactum = require('pactum');



describe('Product api has the expected endpoints', () => {

  it('should have a GET /products endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products')
      .expectStatus(200);
  });

  it('should have a GET /products/:product_id endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products/123456')
      .expectStatus(200);
  });

  it('should have a GET /products/:product_id/styles endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products/123456/styles')
      .expectStatus(200);
  });

  it('should have a GET /products/product_id/related endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products/123456/related')
      .expectStatus(200);
  });

});


describe('/products endpoint', () => {
  it('should return an array of products', () => {
    return pactum.spec()
      .get('http://localhost:3000/products')
      .expectJsonLike([]);
  })
})