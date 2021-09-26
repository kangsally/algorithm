/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const matRow = mat[0].length;
  const matColumn = mat.length;
  const totalLength = matRow * matColumn;

  if (totalLength !== r * c) {
    return mat;
  }

  const newArr = mat.flat();
  const result = newArr.reduce((acc, value) => {
    const lastIdx = acc.length - 1;
    if (acc[lastIdx] === undefined || acc[lastIdx].length >= c) {
      acc.push([value]);
    } else {
      acc[lastIdx].push(value);
    }
    return acc;
  }, []);
  return result;
};

