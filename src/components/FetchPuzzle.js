import data from "./data";

const FetchPuzzle = (level) => {
  let len = Object.keys(data[level.toString()]).length,
    idx = Math.floor(Math.random() * len),
    board = data[level][idx];
  return board;
};

export default FetchPuzzle;
