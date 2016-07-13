import sort from './sort';
export default (series) => {
 let sorted = sort(series);
 return sorted.length % 2 === 0 ? (sorted[sorted.length / 2] + sorted[(sorted.length / 2) - 1]) / 2 : sorted[(sorted.length - 1) / 2];
};
