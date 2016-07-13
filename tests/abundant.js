import {expect} from 'chai';
import {isAbundant} from '../src';

describe("#abundant", () => {

  // 12 is the first adbundant
  it("12 is an abundant number", () => {
    expect(isAbundant(12)).to.be.true;
  });

  // Series of first 5 abundant numbers
  it("Numbers 12, 18, 20, 24, 30, 36 are abundant", () => {
    var abundantSeries = [12, 18, 20, 24, 30, 36].map( (n) => isAbundant(n) ).reduce( (a, b) => a && b);
    expect(abundantSeries).to.be.true;
  });

});
