const pactum = require('pactum');

// This is just making sure that I am setting up the tests right
describe('setting up pactum and jest', () => {
  it ('should be a teapot', () => {
    return pactum.spec()
      .get('http://httpbin.org/status/418')
      .expectStatus(418);
  });
});


describe('Product api has the expected endpoints', () => {
  it('should have a GET /products endpoint', () => {
    return pactum.spec()
      .get('http://localhost:3000/products')
      .expectStatus(200);
  })
})