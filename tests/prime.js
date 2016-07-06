import {expect} from 'chai';
import * as numbers from '../src';

describe("#prime", () => {
  it("should be greater than 0", () => {
    expect(numbers.isPrime(7)).to.be.true;
  });
});
