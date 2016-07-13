
import {expect} from 'chai';
import {isGeometric} from '../../src/series';

describe("#isGeometric", () => {

  // Nth Number
  it("Should return whether series is geometric progression", () => {
    expect(isGeometric([3, 12, 48])).to.be.true;
  });

});
