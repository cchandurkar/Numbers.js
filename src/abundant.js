import divisors from './divisors';
import {sum} from './series';
export default (number) => sum(divisors(number)) > 2 * number;
