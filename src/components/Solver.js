const Solver = ({ board, techniques }) => {
  let newBoard = JSON.parse(JSON.stringify(board)),
    i,
    j,
    k;
  for (i = 0; i < newBoard.length; i++) {
    for (j = 0; j < newBoard[i].length; j++) {
      for (k = 0; k < techniques.length; k++) {
        let item = techniques[k]({
          board: board,
          item: newBoard[i][j],
          i: i,
          j: j,
        });

        if (item) {
          newBoard[i][j] = item;
          return {
            newBoard: newBoard,
            i: i,
            j: j,
            message: techniques[k].name,
          };
        }
      }
    }
  }
  return false;
};

export default Solver;
