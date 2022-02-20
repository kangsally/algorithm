/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
  const result = [0];
  
  for(let i = 1; i <= n; i++){
    result.push(result[Math.floor(i/2)] + Math.floor(i%2))
  }
  
  return result;
};

