/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  const uniqueSymbols = [];
  for (let j = 0; j < arr.length; j++) {
    if (j === 0) {
      uniqueSymbols.push(arr[j]);
    } else if (uniqueSymbols[uniqueSymbols.length - 1] !== arr[j]) {
      uniqueSymbols.push(arr[j]);
    }
  }
  for (let i = 0; i < uniqueSymbols.length; i++) {
    let count = 0;
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] === uniqueSymbols[i] && arr[k - 1] === uniqueSymbols[i]) {
        count++;
      }
      if (arr[k - 1] !== uniqueSymbols[i] && arr[k - 1] !== undefined && count === 0) {
        count++;
      }
      if (arr[k - 1] === undefined && arr[k + 1] === uniqueSymbols[i]) {
        count++;
      }
    }
    if (count > 1) {
      uniqueSymbols[i] = count + uniqueSymbols[i];
    }
  }
  return uniqueSymbols.join('');
}

module.exports = encodeLine;
