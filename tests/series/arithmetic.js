
import {expect} from 'chai';
import {isArithmetic} from '../../src/series';

describe("#isArithmetic", () => {

  // Nth Number
  it("Should return whether series is artihmetic progression", () => {
    expect(isArithmetic([5,8,11])).to.be.true;
  });

});
