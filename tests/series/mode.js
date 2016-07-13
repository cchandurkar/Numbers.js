
import {expect} from 'chai';
import {mode} from '../../src/series';

describe("#mode", () => {

  let md = mode([13, 18, 13, 14, 13, 16, 14, 21, 13]);

  // Median of odd length series
  it("Should return maximum occurance number", () => {
    expect(md).to.equal(13);
  });

  // Median of odd length series
  it("Should be of type number", () => {
    expect(md).to.be.a('number');
  });

});
