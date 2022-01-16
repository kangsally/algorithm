/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let answer = 0;

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'X') {
        answer++;
        findBattleship(i, j);
      }
    }
  }

  function findBattleship(i, j) {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || board[i][j] === '.') return;
    board[i][j] = '.';
    findBattleship(i - 1, j);
    findBattleship(i + 1, j);
    findBattleship(i, j - 1);
    findBattleship(i, j + 1);
  }

  return answer;
};