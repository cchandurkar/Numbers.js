import {expect} from 'chai';
import {isDeficient} from '../src';

describe("#deficient", () => {

  // Series of first few deficient numbers
  it("Numbers 1, 2, 7, 8, 9, 10, 11, 13, 16, 17 are deficient", () => {
    var deficientSeries = [1, 2, 7, 8, 9, 10, 11, 13, 16, 17].map( (n) => isDeficient(n) ).reduce( (a, b) => a && b);
    expect(deficientSeries).to.be.true;
  });

});
