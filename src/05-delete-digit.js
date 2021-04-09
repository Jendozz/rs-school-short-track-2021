/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const numberArr = String(n).split('');
  const arrStrNumb = [];
  for (let i = 0; i < numberArr.length; i++) {
    const numb = numberArr.slice();
    numb.splice(i, 1);
    arrStrNumb.push(numb);
  }
  for (let k = 0; k < arrStrNumb.length; k++) {
    arrStrNumb[k] = Number(arrStrNumb[k].join(''));
  }
  return Math.max(...arrStrNumb);
}

module.exports = deleteDigit;
