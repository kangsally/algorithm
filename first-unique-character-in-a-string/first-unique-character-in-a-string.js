/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    const first = s.indexOf(s[i]);
    const last = s.lastIndexOf(s[i]);

    if (first !== -1 && first === last) {
      return first;
    }
  }
  return -1;
};