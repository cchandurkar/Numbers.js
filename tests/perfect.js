import {expect} from 'chai';
import {isPerfect} from '../src';

describe("#perfect", () => {

  // 12 is the first adbundant
  it("6 is a perfect number", () => {
    expect(isPerfect(6)).to.be.true;
  });

  // // Series of first 5 abundant numbers
  // it("Numbers 12, 18, 20, 24, 30, 36 are abundant", () => {
  //   var abundantSeries = [12, 18, 20, 24, 30, 36].map( (n) => isPerfect(n) ).reduce( (a, b) => a && b);
  //   expect(abundantSeries).to.be.true;
  // });

});
