
import {expect} from 'chai';
import {range} from '../../src/series';

describe("#range", () => {

  it("Should return a range as summation of max and minnumber in array", () => {
    expect(range([13, 18, 13, 14, 13, 16, 14, 21, 13])).to.equal(8);
  });

  it("Should return 0 for single valued array", () => {
    expect(range([2])).to.equal(0);
  });

  it("Should return undefined for empty array", () => {
    expect(range([])).to.be.undefined;
  });

});
