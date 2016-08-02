import d3 from 'd3';
import defined from 'defined';
import formatSeconds from './formatSeconds';
/**
 * @function formatData
 * @param  {Number} value   [description]
 * @param  {String} prefix  [description]
 * @param  {String} suffix  [description]
 * @param  {Boolean} rounded [description]
 * @return {String}         [description]
 */
const formatData = function(value, _prefix, _suffix, rounded, isMoney) {
    let prefix = defined(_prefix) ? _prefix : '';
    let suffix = defined(_suffix) ? _suffix : '';

    if(value === null){
      return 'no data';
    }

    if(suffix === 's'){
      return formatSeconds(value);
    }

    if(rounded){
      return prefix + parseInt(value, 10) + suffix;
    }
    if(value === 0){
      return prefix + 0 + suffix;
    }
    // if there is prefix, then it's money
    if((value > 1 || value < -1) && !isMoney) {
      if (value > 1000) {
        return prefix + d3.format('.2s')(value) + suffix;
      } else {
        return prefix + value + suffix;
      }
    } else {
      return prefix + d3.format('.2f')(value) + suffix;
    }
}

module.exports = formatData;
