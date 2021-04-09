/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const intArr = [];
  for (let i = 0; i < matrix.length; i++) {
    intArr.push(matrix[i].slice());
  }
  for (let k = 0; k < intArr.length; k++) {
    for (let q = 0; q < intArr[k].length; q++) {
      intArr[k][q] = 0;
    }
  }
  for (let z = 0; z < matrix.length; z++) {
    for (let j = 0; j < matrix[z].length; j++) {
      if (matrix[z][j] === true) {
        if (intArr[z - 1]) {
          intArr[z - 1][j] += 1;
          if (intArr[j - 1]) {
            intArr[z - 1][j - 1] += 1;
          }
          if (intArr[j + 1]) {
            intArr[z - 1][j + 1] += 1;
          }
        }
        if (intArr[z]) {
          if (intArr[j + 1]) {
            intArr[z][j + 1] += 1;
          }
          if (intArr[j - 1]) {
            intArr[z][j - 1] += 1;
          }
        }
        if (intArr[z + 1]) {
          intArr[z + 1][j] += 1;
          if (intArr[j - 1]) {
            intArr[z + 1][j - 1] += 1;
          }
          if (intArr[j + 1]) {
            intArr[z + 1][j + 1] += 1;
          }
        }
      }
    }
  }
  return intArr;
}

module.exports = minesweeper;
