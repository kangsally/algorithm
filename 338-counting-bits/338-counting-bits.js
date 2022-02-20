/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const arr = Array.from({length: n + 1}, (v, i) => i.toString(2));
  
  return arr.map((value) => value.match(/1/g)? value.match(/1/g).length : 0);

};
