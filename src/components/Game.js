import { useEffect, useState } from "react";
import "./Game.css";
import Timer from "./Timer";
import Board from "./Board";
import NumberPad from "./NumberPad";
import Tools from "./Tools";
import NewGameDropDown from "./NewGameDropDown";
import FetchPuzzle from "./FetchPuzzle";
import InitialGenerate from "./InitialGenerate";
import deleteArrayElement from "./DeleteArrayElement";
import Solver from "./Solver";
import NakedSingle from "./NakedSingle";
import HiddenSingle from "./HiddenSingle";
import GenerateCandidates from "./GenerateCandidates";
import Validate from "./Validate";
import DummyBoard from "./DummyBoard";
import Expire from "./Expire";
import Celebration from "./Celebration";
const Game = () => {
  const [[min, sec], setTime] = useState([0, 0]);
  const [play, setPlay] = useState(true);
  const [board, setBoard] = useState(
    [...Array(9)].map(() => Array(9).fill(null))
  );
  const [[row, col], setFocus] = useState([0, 0]);
  const [history, setHistory] = useState([]);
  const [isPen, setPen] = useState(false);
  const [isPuzzle, setIsPuzzle] = useState(
    [...Array(9)].map(() => Array(9).fill(false))
  );
  const [message, setMessage] = useState(null);
  const [level, setLevel] = useState(0);
  const [celebration, setCelebration] = useState(false);
  const saveState = (history) => {
    if (history.length > 1) {
      localStorage.setItem("history", JSON.stringify(history));
      localStorage.setItem("isPuzzle", JSON.stringify(isPuzzle));
      localStorage.setItem("time", JSON.stringify([min, sec]));
      localStorage.setItem("level", level);
    }
  };
  const updateBoard = (newBoard, row, col) => {
    let newHistory = JSON.parse(JSON.stringify(history));
    newBoard = GenerateCandidates(newBoard, row, col);
    newHistory.push(newBoard);
    setBoard(newBoard);
    setHistory(newHistory);
    saveState(newHistory);
  };

  const handleInput = (key) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    if (key === "Delete") {
      if (isPuzzle[row][col] || typeof board[row][col] === "object") {
        setMessage({
          variant: "warning",
          message: "No can dos ville babydoll!!!",
        });
        return;
      } else {
        newBoard[row][col] = null;
      }
    } else {
      if (isPen) {
        if (
          typeof newBoard[row][col] === "object" &&
          newBoard[row][col] !== null
        ) {
          if (newBoard[row][col].includes(key)) {
            newBoard[row][col] = deleteArrayElement(newBoard[row][col], key);
          } else {
            newBoard[row][col].push(key);
          }
        } else {
          newBoard[row][col] = [key];
        }
      } else {
        newBoard[row][col] = key;
      }
    }
    updateBoard(newBoard, row, col);
  };
  const handleSolve = () => {
    let result = Solver({
      board: board,
      techniques: [NakedSingle, HiddenSingle],
    });
    if (result) {
      setFocus([result.i, result.j]);
      setMessage({ variant: "info", message: result.message });
      updateBoard(result.newBoard, result.i, result.j);
    }
  };
  //Changing board variable calls below two function
  const mismatch = (board) => {
    let mismatch = Validate(board);
    if (mismatch) {
      return mismatch;
    }
    setCelebration(true);
    setPlay(false);
    localStorage.removeItem("history", history);
    localStorage.setItem("completed", level);
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

  const handleUndo = () => {
    let newHistory = JSON.parse(JSON.stringify(history));
    newHistory.pop();
    let newBoard = newHistory[newHistory.length - 1];
    setBoard(newBoard);
    setHistory(newHistory);
  };

  const generatePuzzle = (level) => {
    let newBoard = FetchPuzzle(level);
    let newIsPuzzle = [...Array(9)].map(() => Array(9).fill(false));
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        if (typeof newBoard[i][j] === "number") {
          newIsPuzzle[i][j] = true;
        }
      }
    }

    newBoard = InitialGenerate(newBoard);
    setIsPuzzle(newIsPuzzle);
    setBoard(newBoard);
    setHistory([newBoard]);
    setTime([0, 0]);
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

  useEffect(() => {
    let stored = JSON.parse(localStorage.getItem("history"));
    if (stored) {
      let newBoard = stored[stored.length - 1];
      console.log(newBoard[0].length);
      let newHistory = stored;
      setTime(JSON.parse(localStorage.getItem("time")));
      setIsPuzzle(JSON.parse(localStorage.getItem("isPuzzle")));
      setLevel(parseInt(localStorage.getItem("level")));
      setBoard(newBoard);
      setHistory(newHistory);
    } else {
      let storedLevel = parseInt(localStorage.getItem("completed"));
      if (storedLevel) {
        setLevel(storedLevel);
        generatePuzzle(storedLevel);
      } else {
        setLevel(0);
        generatePuzzle(0);
      }
    }
  }, []);
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
          <div
            className="utility"
            style={{
              fontWeight: "bold",
              alignItems: "center",
              marginLeft: "2%",
              justifyContent: "space-between",
            }}
          >
            <div>
              Difficulty:
              <select
                className="difficulty"
                value={level}
                onChange={(event) => {
                  setLevel(event.target.value);
                  generatePuzzle(event.target.value);
                }}
              >
                <option value={0}>easy</option>
                <option value={1}>medium</option>
                <option value={2}>hard</option>
              </select>
            </div>

            <Timer
              min={min}
              sec={sec}
              play={play}
              setTime={(time) => setTime(time)}
              pause={() => {
                setPlay(!play);
              }}
            />
          </div>
          {play && (
            <Board
              board={board}
              r={row}
              c={col}
              mismatch={mismatch(board)}
              isPuzzle={isPuzzle}
              changeFocus={(r, c) => {
                setFocus([r, c]);
              }}
            />
          )}
          {celebration && (
            <Celebration
              level={level}
              min={min}
              sec={sec}
              newGame={(level) => {
                setLevel(level);
                generatePuzzle(level);
                setCelebration(false);
                setPlay(true);
              }}
            />
          )}
          {!celebration && !play && (
            <DummyBoard
              play={() => {
                setPlay(!play);
              }}
            />
          )}
          {message && (
            <Expire
              message={message.message}
              variant={message.variant}
              expired={() => setMessage(null)}
            ></Expire>
          )}
        </div>

        <div className="flex-column-container" style={{ marginTop: "3rem" }}>
          <NewGameDropDown
            title={"New Game"}
            onClick={(level) => {
              setLevel(level);
              generatePuzzle(level);
            }}
          />
          <Tools
            disable={history.length === 1}
            handleUndo={() => {
              handleUndo();
            }}
            onDelete={() => handleInput("Delete")}
            isPen={isPen}
            changePen={() => setPen(!isPen)}
            handleSolve={() => handleSolve()}
          />
          <NumberPad
            keypress={(key) => {
              handleInput(key);
            }}
            done={calDone(board)}
          />
        </div>
      </div>
    </>
  );
};

export default Game;
