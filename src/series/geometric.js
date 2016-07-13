import nthGeometric from './nthGeometric';
import sort from './sort';
export default (series) => nthGeometric(sort(series), series.length) === series[series.length - 1];
