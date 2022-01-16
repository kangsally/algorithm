/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let answer = null;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      answer = mid;
      break;
    }
    if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  if (answer === null) {
    if (left <= right) {
      answer = nums[left] <= target ? left : left + 1;
    } else {
      answer = nums[right] >= target ? right : right + 1;
    }
  }

  return answer;
};
