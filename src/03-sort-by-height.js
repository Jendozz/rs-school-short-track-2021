/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const index = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      index.push(i);
    }
  }
  for (let z = 0; z < arr.length; z++) {
    if (arr[z] === -1) {
      arr.splice(z, 1);
      z--;
    }
  }
  arr.sort((a, b) => a - b);
  if (index.length > 0) {
    for (let k = 0; k < index.length; k++) {
      arr.splice(index[k], 0, -1);
    }
  }
  return arr;
}

module.exports = sortByHeight;
