/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let left = 0;
  let right = t.length - 1;
  let start = 0;
  let last = s.length - 1;
  
  if(!s){
    return true;
  }

  while (left <= right) {
    console.log(t[left], s[start], t[right], s[last], left, right, start, last);
    if (t[left] === s[start]) {
      if (start === last) {
        return true;
      }
      start++;
    }
    if (t[right] === s[last]) {
      if (start === last) {
        return true;
      }
      last--;
    }
    left++;
    right--;
  }

  return false;
};
