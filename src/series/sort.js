export default (series, descending) => series.slice().sort((a, b) => descending ? b-a : a - b);
