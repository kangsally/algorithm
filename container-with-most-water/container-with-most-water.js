/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWidth = 0;
  
  while(left <= right){
    maxWidth = Math.max(maxWidth, Math.min(height[left],height[right]) * (right - left));
    if(height[left] > height[right]){
      right--;
    }else{
      left++;
    }
  }
    
  return maxWidth;
};