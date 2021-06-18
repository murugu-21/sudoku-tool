import deleteArrayElement from "./DeleteArrayElement";

const GenerateCandidates = (board, r, c) => {
  let newBoard = JSON.parse(JSON.stringify(board)),
    i,
    j;
  if (typeof newBoard[r][c] === "number") {
    for (i = 0; i < newBoard.length; i++) {
      if (typeof newBoard[i][c] === "object") {
        newBoard[i][c] = deleteArrayElement(newBoard[i][c], newBoard[r][c]);
      }
      if (typeof newBoard[r][i] === "object") {
        newBoard[r][i] = deleteArrayElement(newBoard[r][i], newBoard[r][c]);
      }
    }
    i = Math.floor(r / 3) * 3;
    j = Math.floor(c / 3) * 3;
    for (let c1 = i; c1 < i + 3; c1++) {
      for (let c2 = j; c2 < j + 3; c2++) {
        if (typeof newBoard[c1][c2] === "object") {
          newBoard[c1][c2] = deleteArrayElement(
            newBoard[c1][c2],
            newBoard[r][c]
          );
        }
      }
    }
  }

  return newBoard;
};

export default GenerateCandidates;
