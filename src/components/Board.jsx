import { useEffect, useState } from "react";
import "./Board.css";
import Cell from "./Cell";
const Board = (props) => {
  const [grey, setGrey] = useState(
    [...Array(9)].map(() => Array(9).fill(false))
  );

  const handleFocus = (r, c) => {
    let newGrey = [...Array(9)].map(() => Array(9).fill(false)),
      i;
    for (i = 0; i < 9; i++) {
      newGrey[i][c] = true;
      newGrey[r][i] = true;
    }
    i = Math.floor(r / 3) * 3;
    let j = Math.floor(c / 3) * 3;
    for (let c1 = i; c1 < i + 3; c1++) {
      for (let c2 = j; c2 < j + 3; c2++) {
        newGrey[c1][c2] = true;
      }
    }
    setGrey(newGrey);
  };
  useEffect(() => {
    handleFocus(props.r, props.c);
  }, [props.r, props.c]);
  const isFocus = (r, c) => {
    return props.r === r && props.c === c;
  };
  return (
    <div className="Board">
      {props.board.map((row, r) =>
        row.map((item, c) => {
          let right = "1px solid rgb(0,0,0)",
            bottom = "1px solid rgb(0,0,0)",
            left = null,
            top = null;

          if (c === 2 || c === 5) right = "2px solid rgb(0,0,0)";
          if (r === 2 || r === 5) bottom = "2px solid rgb(0,0,0)";
          if (c === 8) right = "2px solid rgb(0,0,0)";
          if (r === 8) bottom = "2px solid rgb(0,0,0)";
          if (c === 0) left = "2px solid rgb(0, 0, 0)";
          if (r === 0) top = "2px solid rgb(0, 0, 0)";
          return (
            <Cell
              key={r * 9 + c}
              value={item}
              color={props.isPuzzle[r][c] ? "black" : "#0072e3"}
              left={left}
              right={right}
              bottom={bottom}
              top={top}
              isFocus={isFocus(r, c)}
              handleClick={() => {
                props.changeFocus(r, c);
              }}
              bgColor={
                isFocus(r, c)
                  ? "#ADD8E6"
                  : props.mismatch[r][c]
                  ? "#FFA2A2"
                  : grey[r][c]
                  ? "#eaeef4"
                  : "#FFFFFF"
              }
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
