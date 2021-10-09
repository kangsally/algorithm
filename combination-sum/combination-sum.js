/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);

  const func = (prevIdx, arr, sum) => {
    for (let i = prevIdx; i < candidates.length; i++) {
      const currNum = candidates[i];
      let currSum = sum + currNum;
      if (currSum > target) continue;
      let comb = [...arr, currNum];
      if (currSum === target) {
        result.push(comb);
      }
      if (currSum < target) {
        func(i, comb, currSum);
      }
    }
  };
  func(0, [], 0);

  return result;
};