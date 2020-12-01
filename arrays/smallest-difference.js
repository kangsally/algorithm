function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  let number = Math.abs(arrayOne[0] - arrayTwo[0]);
  let result = [arrayOne[0], arrayTwo[0]];
  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      if (Math.abs(arrayOne[i] - arrayTwo[j]) < number) {
        number = Math.abs(arrayOne[i] - arrayTwo[j]);
        result = [arrayOne[i], arrayTwo[j]];
      }
    }
  }
  return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
