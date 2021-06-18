import DeleteArrayList from "./DeleteArrayList";

const HiddenSingle = ({ board, item, i, j }) => {
  if (typeof item === "object" && item !== null) {
    let possible = item;
    // ensures single is hidden & not naked
    if (possible.length > 1) {
      let possibleRow = possible,
        possibleColumn = possible,
        possibleBox = possible;

      for (let row = 0; row < board.length; row++) {
        if (row !== i && typeof board[row][j] === "object") {
          possibleRow = DeleteArrayList(possibleRow, board[row][j]);
        }
        if (row !== j && typeof board[i][row] === "object") {
          possibleColumn = DeleteArrayList(possibleColumn, board[i][row]);
        }
      }
      if (possibleRow.length === 1) return possibleRow[0];
      if (possibleColumn.length === 1) return possibleColumn[0];
      let r = Math.floor(i / 3) * 3,
        c = Math.floor(j / 3) * 3;
      for (let c1 = r; c1 < r + 3; c1++) {
        for (let c2 = c; c2 < c + 3; c2++) {
          if (!(c1 === i && c2 === j) && typeof board[c1][c2] === "object") {
            possibleBox = DeleteArrayList(possibleBox, board[c1][c2]);
          }
        }
      }
      if (possibleBox.length === 1) return possibleBox[0];
    }
  }
  return false;
};

export default HiddenSingle;
