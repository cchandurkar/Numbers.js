export default (series) => series.length > 0 ? Math.max(...series) - Math.min(...series) : undefined;
