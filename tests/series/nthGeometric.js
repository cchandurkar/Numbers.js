
import {expect} from 'chai';
import {nthGeometric} from '../../src/series';

describe("#nthGeometric", () => {

  // Nth Number
  it("Should return nth number in series", () => {
    expect(nthGeometric([3, 12, 48], 6)).to.equal(3072);
  });

});
