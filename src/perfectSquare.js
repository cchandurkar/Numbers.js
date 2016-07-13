import divisors from './divisors';
export default (number) => {
  let sqrt = Math.sqrt(number);
  return sqrt % 1.0 === 0 && divisors(number).indexOf(sqrt) > -1;
};
