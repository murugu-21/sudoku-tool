import deleteArrayElement from "./DeleteArrayElement";

const InitialGenerate = (board) => {
  const newBoard = JSON.parse(JSON.stringify(board));
  let r, c, i;
  for (r = 0; r < newBoard.length; r++) {
    for (c = 0; c < newBoard[r].length; c++) {
      if (newBoard[r][c] === null) {
        newBoard[r][c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        for (i = 0; i < newBoard.length; i++) {
          if (typeof newBoard[i][c] === "number") {
            newBoard[r][c] = deleteArrayElement(newBoard[r][c], newBoard[i][c]);
          }
          if (typeof newBoard[r][i] === "number") {
            newBoard[r][c] = deleteArrayElement(newBoard[r][c], newBoard[r][i]);
          }
        }
        i = Math.floor(r / 3) * 3;
        let j = Math.floor(c / 3) * 3;
        for (let c1 = i; c1 < i + 3; c1++) {
          for (let c2 = j; c2 < j + 3; c2++) {
            if (typeof newBoard[c1][c2] === "number") {
              newBoard[r][c] = deleteArrayElement(
                newBoard[r][c],
                newBoard[c1][c2]
              );
            }
          }
        }
      }
    }
  }
  return newBoard;
};

export default InitialGenerate;
