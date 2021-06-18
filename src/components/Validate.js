const Validate = (board) => {
  let newMismatch = [...Array(9)].map(() => Array(9).fill(false)),
    flag = true;
  let r, c, i;
  for (r = 0; r < board.length; r++) {
    for (c = 0; c < board.length; c++) {
      if (typeof board[r][c] === "object") {
        flag = false;
      }
      for (i = 0; i < board.length; i++) {
        if (board[r][c] === board[i][c] && i !== r && board[r][c] !== null) {
          newMismatch[r][c] = true;
          newMismatch[i][c] = true;
          flag = false;
        }
        if (board[r][c] === board[r][i] && i !== c && board[r][c] !== null) {
          newMismatch[r][c] = true;
          newMismatch[r][i] = true;
          flag = false;
        }
      }
      i = Math.floor(r / 3) * 3;
      let j = Math.floor(c / 3) * 3;
      for (let c1 = i; c1 < i + 3; c1++) {
        for (let c2 = j; c2 < j + 3; c2++) {
          if (
            board[r][c] === board[c1][c2] &&
            c1 !== r &&
            c2 !== c &&
            board[r][c] !== null
          ) {
            newMismatch[r][c] = true;
            newMismatch[c1][c2] = true;
            flag = false;
          }
        }
      }
    }
  }
  if (flag) {
    return false;
  }
  return newMismatch;
};

export default Validate;
