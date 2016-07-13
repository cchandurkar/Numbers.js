import {expect} from 'chai';
import {isPerfectSquare} from '../src';

describe("#perfectSquare", () => {

  // 64 is the perfect square
  it("64 is a perfect square", () => {
    expect(isPerfectSquare(64)).to.be.true;
  });

  // 64 is the perfect square
  it("64.0 is a perfect square", () => {
    expect(isPerfectSquare(64.0)).to.be.true;
  });

});
