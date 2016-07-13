import {expect} from 'chai';
import {divisors} from '../src';

describe("#divisors", function(){

  console.log("DVSRS", divisors);

  // Get Divisors
  var dvsrs = divisors(12),
      zeroDvsrs = divisors(0);

  // Returns an Array
  it("should return an array of divisors", function(){
    expect(dvsrs).to.be.an('array');
  });

  // Contains 1
  it("should contain 1", function(){
    expect(dvsrs).to.include(1);
  });

  // Contains a number itself
  it("should contain the number itself", function(){
    expect(dvsrs).to.include(12);
  });

  // Dividing a zero
  // Ideally, every number is divisor of 0
  // Here we return just a 0 as divisor as
  // putting all number in an array wouldn't make sense
  it("should return 1 for 0", function(){
    expect(zeroDvsrs).to.have.lengthOf(1);
    expect(zeroDvsrs).to.include(0);
  });

});
