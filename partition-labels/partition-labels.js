/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let lastIdxMap = {};
  let startIdx = 0;
  let tmpIdx = 0;
  let result = [];

  for (let i = 0; i < s.length; i++) {
    lastIdxMap[s[i]] = i;
  }

  for (let i = 0; i < s.length; i++) {
    const lastIdx = lastIdxMap[s[i]];
    if (tmpIdx < lastIdx) {
      tmpIdx = lastIdx;
    }
    if (tmpIdx === i) {
      result.push(tmpIdx - startIdx + 1);
      startIdx = tmpIdx + 1;
    }
  }

  return result;
};