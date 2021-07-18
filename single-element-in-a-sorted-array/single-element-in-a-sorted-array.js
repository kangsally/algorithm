/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    if(nums.length === 1){
        return nums[0];
    }
    let minIdx = 0;
    let maxIdx = nums.length - 1;

    while(minIdx < maxIdx){
        if(nums[minIdx] !== nums[minIdx + 1]){
            return nums[minIdx];
        }
        if(nums[maxIdx] !== nums[maxIdx - 1]){
            return nums[maxIdx];
        }
        let tempMidIdx = Math.floor((maxIdx + minIdx)/2);
        let midIdx = nums[tempMidIdx] === nums[tempMidIdx + 1]? tempMidIdx + 1 :  tempMidIdx;
        if(nums[midIdx] !== nums[midIdx - 1] && nums[midIdx] !== nums[midIdx + 1]){
            return nums[midIdx];
        }
        
        let leftLength = midIdx - minIdx + 1;
        let rightLength = maxIdx - minIdx;
        
        if(leftLength % 2 === 0){
            minIdx = midIdx + 1;
        }else{
            maxIdx = midIdx;
        }
    }
    
};