const {getStyles} = require('../db/style.js');

describe('Getting Products', () => {

  it('getStyles should be a function', () => {
    expect(typeof getStyles).toBe('function');
  });

  it('getStyles should resolve to an object', () => {
    return getStyles(12354)
    .then((styles) => {
      expect(typeof styles).toBe('object');
    })
  });

});