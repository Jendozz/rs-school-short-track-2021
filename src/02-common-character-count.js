/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let result = 0;
  const s1arr = s1.split('');
  const s2arr = s2.split('');
  for (let i = 0; i < s1arr.length; i++) {
    if (s2arr.includes(s1arr[i])) {
      result++;
      s2arr.splice(s2arr.indexOf(s1arr[i]), 1);
      s1arr.splice(i, 1);
      i = -1;
    }
  }
  return result;
}

module.exports = getCommonCharacterCount;
