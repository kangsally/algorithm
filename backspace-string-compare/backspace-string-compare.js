/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  const editString = (str) => {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
      if (arr.length === 0 && str[i] === '#') {
        continue;
      }
      if (str[i] === '#') {
        arr.pop();
      } else {
        arr.push(str[i]);
      }
    }
    return arr.join('');
  }

  return editString(s) === editString(t);
};
