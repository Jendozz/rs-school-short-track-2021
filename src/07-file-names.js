/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const tempArr = [];
  const k = 1;
  for (let i = 0; i < names.length; i++) {
    if (tempArr.includes(names[i])) {
      tempArr.push(`${names[i]}(${k})`);
    } else {
      tempArr.push(names[i]);
    }
  }
  const resultArr = tempArr.slice();
  for (let j = 0; j < tempArr.length; j++) {
    let count = 2;
    for (let z = j + 1; z < resultArr.length; z++) {
      if (tempArr[j] === resultArr[z]) {
        const index = resultArr[z].length - 2;
        const arrIndex = resultArr[z].split('');
        arrIndex.splice(index, 1);
        arrIndex.splice(index, 0, count);
        resultArr[z] = arrIndex.join('');
        count++;
      }
    }
  }
  return resultArr;
}

module.exports = renameFiles;
