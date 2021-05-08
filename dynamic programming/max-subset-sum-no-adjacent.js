function maxSubsetSumNoAdjacent(array) {
  // Write your code here.
  if(!array.length) return 0;
  if(array.length === 1) return array[0];
  let second = Math.max(array[0], array[1]);
  let first = array[0];
  for(let i = 2; i < array.length; i++){
    const currentMax = Math.max(second, first + array[i]);
    first = second;
    second = currentMax;
  }
  return second;
}

// Do not edit the line below.
exports.maxSubsetSumNoAdjacent = maxSubsetSumNoAdjacent;

/*

array -> [7, 10, 12, 7, 9, 14]

maxSums -> [7, 10, 19, 19, 28, 33]

maxSums[i] = max { (1) maxSums[i-1] (2) maxSums[i-2] + array[i] }

*/
