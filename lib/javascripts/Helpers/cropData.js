/**
 * @function cropData
 * @param  {Array} arr [description]
 * @param  {Number} num [description]
 * @return {Array}     [description]
 */
function cropData(arr, num) {
  if (arr.length > num) {
    return arr.slice(arr.length - num, arr.length);
  }
  return arr;
}
module.exports = cropData;
