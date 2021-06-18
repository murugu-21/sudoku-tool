import deleteArrayElement from "./DeleteArrayElement";
const RemoveCandidates = (board, r, c) => {
  let i, j;
  //removes candidates for corresponding rows, column, box
  if (typeof board[r][c] === "number") {
    for (i = 0; i < board.length; i++) {
      if (typeof board[i][c] === "object") {
        board[i][c] = deleteArrayElement(board[i][c], board[r][c]);
      }
      if (typeof board[r][i] === "object") {
        board[r][i] = deleteArrayElement(board[r][i], board[r][c]);
      }
    }
    i = Math.floor(r / 3) * 3;
    j = Math.floor(c / 3) * 3;
    for (let c1 = i; c1 < i + 3; c1++) {
      for (let c2 = j; c2 < j + 3; c2++) {
        if (typeof board[c1][c2] === "object") {
          board[c1][c2] = deleteArrayElement(board[c1][c2], board[r][c]);
        }
      }
    }
  }
  //removes candidates for board[r][c]
  if (typeof board[r][c] === "object") {
    for (i = 0; i < board.length; i++) {
      if (typeof board[i][c] === "number") {
        board[r][c] = deleteArrayElement(board[r][c], board[i][c]);
      }
      if (typeof board[r][i] === "number") {
        board[r][c] = deleteArrayElement(board[r][c], board[r][i]);
      }
    }
    i = Math.floor(r / 3) * 3;
    let j = Math.floor(c / 3) * 3;
    for (let c1 = i; c1 < i + 3; c1++) {
      for (let c2 = j; c2 < j + 3; c2++) {
        if (typeof board[c1][c2] === "number") {
          board[r][c] = deleteArrayElement(board[r][c], board[c1][c2]);
        }
      }
    }
  }
  return board;
};
export default RemoveCandidates;
