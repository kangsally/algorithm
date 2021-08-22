/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums = nums.sort((a, b) => b - a );
    return search(nums);
    
    function search (nums){
      if(nums.length < 3){
        return 0;
      }
      if(nums[0] < nums[1] + nums[2]){
        return nums[0] + nums[1] + nums[2];
      }
      nums.shift();
      return search(nums);
    }
};