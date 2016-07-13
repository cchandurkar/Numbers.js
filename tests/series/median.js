
import {expect} from 'chai';
import {median} from '../../src/series';

describe("#median", () => {

  // Median of odd length series
  it("Median of odd series returns a middle number after sort", () => {
    expect(median([3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 39, 40, 56])).to.equal(23);
  });

  // Median of even length series
  it("Median of even series returns an average of middle two numbers after sort", () => {
    expect(median([3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56])).to.equal(22);
  });

});
