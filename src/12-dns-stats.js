/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function hasProp(obj, str) {
  const keys = Object.keys(obj);
  if (keys.includes(str)) {
    return true;
  }
  return false;
}

function sortDnsArr (arr) {
  const resArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    if (resArr.length === 0) {
      resArr.push(`.${arr[i]}`);
    } else {
      resArr.push(`${resArr[resArr.length - 1]}.${arr[i]}`);
    }
  }
  return resArr;
}

function getDNSStats(domains) {
  const domArr = [];
  for (let i = 0; i < domains.length; i++) {
    domArr.push(domains[i].split('.'));
  }
  const result = {};
  for (let k = 0; k < domArr.length; k++) {
    domArr[k] = sortDnsArr(domArr[k]);
    for (let z = 0; z < domArr[k].length; z++) {
      if (hasProp(result, domArr[k][z])) {
        result[domArr[k][z]] += 1;
      } else {
        result[domArr[k][z]] = 1;
      }
    }
  }
  return result;
}

module.exports = getDNSStats;
