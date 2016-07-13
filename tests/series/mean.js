
import {expect} from 'chai';
import {mean} from '../../src/series';

describe("#mean", () => {

  // 12 is the first adbundant
  it("Mean of [13, 18, 13, 14, 13, 16, 14, 21, 13] is 15", () => {
    expect(mean([13, 18, 13, 14, 13, 16, 14, 21, 13])).to.equal(15);
  });

});
