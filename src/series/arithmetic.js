import nthArithmetic from './nthArithmetic';
import sort from './sort';
export default (series) => nthArithmetic(sort(series), series.length) === series[series.length - 1];
