/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let result = 0;
  const func = (s, arr) => {
    for (let i = s; i < nums.length; i++) {
      const newArr = [...arr, nums[i]];
      const xor = newArr.reduce((acc, curr) => acc ^ curr);
      result += xor;
      if (s < nums.length - 1) {
        func((s += 1), newArr);
      }
    }
  };
  func(0, []);

  return result;
};


