import { useState } from "react";
import "./Game.css";
import Board from "./Board";
import NumberPad from "./NumberPad";
import Validate from "./Validate";
import Expire from "./Expire";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Question = () => {
  const history = useHistory();
  const [board, setBoard] = useState(
    [...Array(9)].map(() => Array(9).fill(null))
  );
  const [[row, col], setFocus] = useState([0, 0]);
  const [message, setMessage] = useState(null);

  const handleInput = (key) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    if (key === "Delete") {
      newBoard[row][col] = null;
    } else {
      newBoard[row][col] = key;
    }
    setBoard(newBoard);
  };
  //Changing board variable calls below two function
  const mismatch = (board) => {
    let mismatch = Validate(board);
    if (mismatch) {
      return mismatch;
    } else {
      alert("Already solved puzzle!!!");
    }
  };
  const calDone = (board) => {
    let done = Array(9).fill(0);
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board.length; j++) {
        if (typeof board[i][j] === "number") {
          done[board[i][j] - 1]++;
        }
      }
    }
    return done;
  };

  const handleKey = (key) => {
    if (key === " " || key === "ArrowRight") {
      setFocus([row, (col + 1) % 9]);
    } else if (key === "ArrowLeft") {
      setFocus([row, (col + 8) % 9]);
    } else if (key === "ArrowUp") {
      setFocus([(row + 8) % 9, col]);
    } else if (key === "ArrowDown") {
      setFocus([(row + 1) % 9, col]);
    } else {
      if (key === "Backspace" || key === "Delete") {
        key = "Delete";
        handleInput(key);
      } else if ([1, 2, 3, 4, 5, 6, 7, 8, 9].includes(parseInt(key))) {
        handleInput(parseInt(key));
      }
    }
  };
  const handleSubmit = () => {
    const newMismatch = mismatch(board);
    for (let i = 0; i < newMismatch.length; i++) {
      for (let j = 0; j < newMismatch[i].length; j++) {
        if (newMismatch[i][j]) {
          setMessage({ variant: "danger", message: "mismatch puzzle" });
          return;
        }
      }
    }

    let isPuzzle = [...Array(9)].map(() => Array(9).fill(false));
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (typeof board[i][j] === "number") {
          isPuzzle[i][j] = true;
        }
      }
    }
    localStorage.setItem("history", JSON.stringify([board]));
    localStorage.setItem("time", JSON.stringify([0, 0]));
    localStorage.setItem("level", 2);
    localStorage.setItem("isPuzzle", JSON.stringify(isPuzzle));
    history.push("/");
  };
  return (
    <>
      <div
        className="flex-container"
        tabIndex={0}
        onKeyDown={(e) => {
          handleKey(e.key);
        }}
      >
        <div className="board-container" style={{ marginRight: "3%" }}>
          <Board
            board={board}
            r={row}
            c={col}
            mismatch={mismatch(board)}
            isPuzzle={[...Array(9)].map(() => Array(9).fill(true))}
            changeFocus={(r, c) => {
              setFocus([r, c]);
            }}
          />
          {message && (
            <Expire
              message={message.message}
              variant={message.variant}
              expired={() => setMessage(null)}
            ></Expire>
          )}
        </div>

        <div className="flex-column-container" style={{ marginTop: "3rem" }}>
          <NumberPad
            keypress={(key) => {
              handleInput(key);
            }}
            done={calDone(board)}
          />
        </div>
      </div>
      <Button variant="primary" onClick={() => handleSubmit()}>
        submit
      </Button>
    </>
  );
};

export default Question;
