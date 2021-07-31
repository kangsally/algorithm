/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    let islandNum = 0;
    const findIsland = (i, j) => {
    if(i < 0 || j < 0 || i > grid[0].length - 1 || j > grid.length -1 || grid[j][i] === "0") return;
        grid[j][i] = "0";
        findIsland(i-1, j);
        findIsland(i+1, j);
        findIsland(i, j+1);
        findIsland(i, j-1);
}
    for(let i = 0; i < grid[0].length; i++){
        for(let j = 0; j < grid.length; j++){
            if(grid[j][i] === "1"){
                islandNum++;
                findIsland(i, j);
            }
        }
    }

    return islandNum;
};

// var numIslands = function(grid) {
//     let islandNum = 0;
//     let memo = {};
//     const findIsland = (i, j) => {
//     if(i < 0 || j < 0 || i > grid[0].length - 1 || j > grid.length -1 || grid[j][i] === "0" || memo[j+'-'+i] ) return;
//         memo[j+'-'+i] = true;
//         findIsland(i-1, j);
//         findIsland(i+1, j);
//         findIsland(i, j+1);
//         findIsland(i, j-1);
// }
//     for(let i = 0; i < grid[0].length; i++){
//         for(let j = 0; j < grid.length; j++){
//             if(grid[j][i] === "1" && !memo[j+'-'+i]){
//                 console.log(memo)
//                 islandNum++;
//                 findIsland(i, j, grid, memo);
//             }
//         }
//     }

//     return islandNum;
// };

