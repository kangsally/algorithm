/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    
    const missingNums = [];
    let num = 1;
    
    while(missingNums.length !== k){
        if(arr.findIndex((value) => num === value) === -1){
            missingNums.push(num);
        }
        num++;
        
    }
    return missingNums[k - 1];
};