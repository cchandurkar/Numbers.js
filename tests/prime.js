import {expect} from 'chai';
import {isPrime} from '../src';

describe("#prime", () => {
  it("7, 11, 13 are prime numbers", () => {
    var primeSeries = [7, 11, 13].map( (n) => isPrime(n) ).reduce( (a, b) => a && b);
    expect(primeSeries).to.be.true;
  });
});
