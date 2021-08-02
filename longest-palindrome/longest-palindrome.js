/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    const arr = [];
    let result = 0;
    let sArr = s.split('').sort();
    console.log(sArr);
    for(let i = 0; i < sArr.length; i++){
        if(arr[arr.length -1] === sArr[i]){
            arr.pop();
            result++;
        }else{
            arr.push(sArr[i]);
        }
    }
    result *=2
    if(arr.length > 0){
        result++;
    }
    return result;
};