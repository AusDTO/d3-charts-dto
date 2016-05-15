import d3 from 'd3';
/**
 * @function normalise
 * @param  {Array} arr  [description]
 * @param  {Number} item [description]
 * @return {Number}      [description]
 */
const normalize = function normalize(arr, item) {
  let max = d3.max(arr);
  let min = d3.min(arr);
  let scale = d3.scale.linear().domain([min, max]).range([0, 100]);
  return scale(item);
};

module.exports = normalize;
