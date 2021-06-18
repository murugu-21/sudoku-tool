import RemoveCandidates from "./RemoveCandidates";

const InitialGenerate = (board) => {
  const newBoard = JSON.parse(JSON.stringify(board));
  let r, c;
  for (r = 0; r < newBoard.length; r++) {
    for (c = 0; c < newBoard[r].length; c++) {
      if (newBoard[r][c] === null) {
        newBoard[r][c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        board = RemoveCandidates(newBoard, r, c);
      }
    }
  }
  return newBoard;
};

export default InitialGenerate;
