
import {expect} from 'chai';
import {nthArithmetic} from '../../src/series';

describe("#nthArithmetic", () => {

  // Nth Number
  it("Should return nth number in series", () => {
    expect(nthArithmetic([5,8,11], 27)).to.equal(83);
  });

});
