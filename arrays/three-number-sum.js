function threeNumberSum(array, targetSum) {
  const newArr = array.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < newArr.length - 1; i++) {
    let leftPointer = i + 1;
    let rightPointer = newArr.length - 1;

    while (leftPointer < rightPointer) {
      const firstNum = newArr[i];
      const middleNum = newArr[leftPointer];
      const lastNum = newArr[rightPointer];
      const sum = firstNum + middleNum + lastNum;
      if (sum === targetSum) {
        result.push([firstNum, middleNum, lastNum]);
        leftPointer++;
        rightPointer--;
        continue;
      }
      if (sum < targetSum) {
        leftPointer++;
      }
      if (sum > targetSum) {
        rightPointer--;
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
