/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  // throw new Error('Not implemented');
  const result = true;
  const arr = n.split('');
  if (arr.includes('-')) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== '-') {
        if (arr[i] < 0 || arr[i] > 'F') {
          return false;
        }
      }
    }
  } else {
    return false;
  }
  return result;
}

module.exports = isMAC48Address;
