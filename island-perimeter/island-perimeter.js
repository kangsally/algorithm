/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    let perimeter = 0;
    for(let i = 0; i < grid[0].length; i++){
        for(let j = 0; j < grid.length; j++){
            console.log(i, j)
            if(grid[j][i] === 1){
                if(i === 0){
                    perimeter++;
                }
                if(i === grid[0].length - 1){
                    perimeter++;
                }
                if(j === 0){
                    perimeter++;
                }
                if(j === grid.length - 1){
                    perimeter++;
                }
                if(i > 0){
                    if(grid[j][i-1] === 0){
                        perimeter++;
                    }
                }
                if(i < grid[0].length - 1){
                    if(grid[j][i+1] === 0){
                        perimeter++;
                    }
                }
                if(j > 0){
                    if(grid[j-1][i] === 0){
                        perimeter++;
                    }
                }
                if(j < grid.length - 1){
                    if(grid[j+1][i] === 0){
                        perimeter++;
                    }
                }

            }

        }
    }
    return perimeter;
};

// 왼쪽 테두리  + 1
// 오른쪽 테두리 + 1
// 위쪽 테두리 + 1
// 아래쪽 테두리 + 1
// 나머지
// 땅 + 땅 + 0
// 땅 + 물 + 1

// for(let i = 0; i < grid[0].length; i++){
//     for(let j = 0; j < grid.length; j++){
//         // 왼쪽 테두리: i = 0;
//         // 오른쪽 테두리: i = grid.length - 1;
//         // 위쪽 테두리: j = 0;
//         // 아래쪽 테두리: j = grid[0].length -1;

//     }
// }