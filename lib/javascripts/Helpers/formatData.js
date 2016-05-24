import d3 from 'd3';
/**
 * @function formatData
 * @param  {Number} value   [description]
 * @param  {String} prefix  [description]
 * @param  {String} suffix  [description]
 * @param  {Boolean} rounded [description]
 * @return {String}         [description]
 */
const formatData = function(value, prefix, suffix, rounded) {
    if(value == null){
      return 'no data';
    }
    if(rounded){
      return prefix + parseInt(value) + suffix;
    }
    if(value === 0){
      return prefix + 0 + suffix;
    }
    // if there is prefix, then it's money
    if((value > 1 || value < -1) && !prefix) {
      return prefix + d3.format('.2s')(value) + suffix;
    } else {
      return prefix + d3.format('.2f')(value) + suffix;
    }
}

module.exports = formatData;

