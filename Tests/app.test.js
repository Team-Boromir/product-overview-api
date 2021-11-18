const pactum = require('pactum');

// This is just making sure that I am setting up the tests right
describe('setting up pactum and jest', () => {
  it ('should be a teapot', () => {
    return pactum.spec()
      .get('http://httpbin.org/status/418')
      .expectStatus(418);
  });
});


describe('Product api has the expected endpoings', () => {
  it('should have a GET /products endpoing', () => {
    return pactum.spec()
      .get('/product')
      .expectStatus(200);
  })
})