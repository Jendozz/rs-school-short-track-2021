/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let startPoint = 0;
  let endPoint = array.length - 1;
  let result;
  let flag = false;
  while (!flag) {
    const center = Math.floor((startPoint + endPoint) / 2);
    if (array[center] < value) {
      startPoint = center + 1;
    } else if (array[center] > value) {
      endPoint = center - 1;
    } else {
      result = center;
      flag = true;
    }
  }
  return result;
}

module.exports = findIndex;
