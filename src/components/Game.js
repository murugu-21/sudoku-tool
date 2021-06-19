import { useEffect, useState } from "react";
import Timer from "./Timer";
import Board from "./Board";
import NumberPad from "./NumberPad";
import "./Game.css";
import Tools from "./Tools";
import NewGame from "./NewGame";
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
const Game = () => {
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [play, setPlay] = useState(true);
  const [board, setBoard] = useState(
    [...Array(9)].map(() => Array(9).fill(null))
  );
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [history, setHistory] = useState([]);
  const [isPen, setPen] = useState(false);
  const [mismatch, setMismatch] = useState(
    [...Array(9)].map(() => Array(9).fill(false))
  );
  const [isPuzzle, setIsPuzzle] = useState(
    [...Array(9)].map(() => Array(9).fill(false))
  );
  const [message, setMessage] = useState(null);
  const updateBoard = (newBoard, row, col) => {
    let newHistory = JSON.parse(JSON.stringify(history));
    let newMismatch = Validate(newBoard);
    newBoard = GenerateCandidates(newBoard, row, col);
    newHistory.push(newBoard);
    setBoard(newBoard);
    setHistory(newHistory);
    if (newMismatch) {
      setMismatch(newMismatch);
    } else {
      alert("Congrats you completed the puzzle");
    }
  };

  const handleInput = (key) => {
    let newBoard = JSON.parse(JSON.stringify(board));
    if (key === "Delete") {
      if (isPuzzle[row][col] || typeof board[row][col] === "object") {
        setMessage("No can dos ville babydoll!!!");
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
      setRow(result.i);
      setCol(result.j);
      updateBoard(result.newBoard, result.i, result.j);
    }
  };
  //Changing board variable calls this function
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

  useEffect(() => {
    let newBoard = FetchPuzzle(0);
    let newIsPuzzle = JSON.parse(JSON.stringify(isPuzzle));
    for (let i = 0; i < newBoard.length; i++) {
      for (let j = 0; j < newBoard[i].length; j++) {
        if (typeof newBoard[i][j] === "number") {
          newIsPuzzle[i][j] = true;
        }
      }
    }
    setIsPuzzle(newIsPuzzle);
    newBoard = InitialGenerate(newBoard);
    setBoard(newBoard);
    setHistory([newBoard]);
  }, []);
  return (
    <>
      <Timer
        min={min}
        sec={sec}
        play={play}
        setMin={(min) => setMin(min)}
        setSec={(sec) => {
          setSec(sec);
        }}
        pause={() => {
          setPlay(!play);
        }}
      />
      <div className="flex-container">
        <div className="board-container" style={{ marginRight: "3%" }}>
          {play && (
            <Board
              board={board}
              r={row}
              c={col}
              mismatch={mismatch}
              isPuzzle={isPuzzle}
              changeFocus={(r, c) => {
                setRow(r);
                setCol(c);
              }}
            />
          )}

          {!play && (
            <DummyBoard
              play={() => {
                setPlay(!play);
              }}
            />
          )}
          {message && (
            <Expire
              message={message}
              variant={"warning"}
              expired={() => setMessage(null)}
            ></Expire>
          )}
        </div>

        <div className="flex-column-container">
          <NewGame />
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
