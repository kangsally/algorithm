/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let majNum = nums[0];
  let memo = {};

  for (let i = 0; i < nums.length; i++) {
    memo[nums[i]] ? (memo[nums[i]] = memo[nums[i]] + 1) : (memo[nums[i]] = 1);
    majNum = memo[nums[i]] > memo[majNum] ? nums[i] : majNum;
  }
  return majNum;
};