/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  const result = [];
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftSqure = nums[left] ** 2;
    const rightSqure = nums[right] ** 2;
    if (leftSqure > rightSqure) {
      result.unshift(leftSqure);
      left++;
    } else {
      result.unshift(rightSqure);
      right--;
    }
  }

  return result;
};

