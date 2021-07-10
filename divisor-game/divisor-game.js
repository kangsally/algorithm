/**
 * @param {number} n
 * @return {boolean}
 */

// var divisorGame = function(n) {
//     if(n <= 1){
//         return false;
//     }
    
//     for(let x = 1; x < n; x++ ){
//         if(n % x === 0 && !divisorGame(n-x) ){
//             return true;
//         }
//     }
//     return false;
// };


var divisorGame = function(n, cache = [] ) {
    if(n <= 1){
        return false;
    }
    
    if(cache[n] !== undefined){
        return cache[n];
    }
    
    for(let x = 1; x < n; x++ ){
        if(n % x === 0 && !divisorGame(n-x, cache) ){
            cache[n] = true;
            return true;
        }
    }
    cache[n] = false;
    return false;
};

