import RemoveCandidates from "./RemoveCandidates";

const GenerateCandidates = (board, r, c) => {
  let newBoard = JSON.parse(JSON.stringify(board)),
    i,
    j;
  if (typeof newBoard[r][c] === "number") {
    newBoard = RemoveCandidates(newBoard, r, c);
  }
  if (newBoard[r][c] === null) {
    newBoard[r][c] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (i = 0; i < board.length; i++) {
      RemoveCandidates(newBoard, i, c);
      RemoveCandidates(newBoard, r, i);
    }
    i = Math.floor(r / 3) * 3;
    j = Math.floor(c / 3) * 3;
    for (let c1 = i; c1 < i + 3; c1++) {
      for (let c2 = j; c2 < j + 3; c2++) {
        RemoveCandidates(newBoard, c1, c2);
      }
    }
  }

  return newBoard;
};

export default GenerateCandidates;
