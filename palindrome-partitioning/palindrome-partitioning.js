/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];
  let palArr = [];

  const findPalindrome = (startIdx) => {
    for (let i = startIdx; i < s.length; i++) {
      const str = s.slice(startIdx, i + 1);
      if (isPalindrome(str)) {
        palArr.push(str);
        findPalindrome(i + 1);
        palArr.pop();
      }
    }
    if (startIdx === s.length) {
      result.push(palArr.slice());
    }
  };
  findPalindrome(0);
  return result;
};

const isPalindrome = (s) => {
  if (s.length === 1) true;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};
