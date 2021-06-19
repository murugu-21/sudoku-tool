import { faPlayCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Board.css";

const DummyBoard = (props) => {
  return (
    <div className="Board">
      {[...Array(9)]
        .map(() => Array(9).fill(" "))
        .map((row, r) =>
          row.map((item, c) => {
            let right = "1px solid rgb(0,0,0)",
              bottom = "1px solid rgb(0,0,0)",
              left = null,
              top = null;

            if (c === 2 || c === 5) right = "2px solid rgb(0,0,0)";
            if (r === 2 || r === 5) bottom = "2px solid rgb(0,0,0)";
            if (c === 8) right = "3px solid rgb(0,0,0)";
            if (r === 8) bottom = "3px solid rgb(0,0,0)";
            if (c === 0) left = "3px solid rgb(0, 0, 0)";
            if (r === 0) top = "3px solid rgb(0, 0, 0)";
            return (
              <div
                className="cell"
                key={r * 9 + c}
                style={{
                  borderTop: top,
                  borderBottom: bottom,
                  borderLeft: left,
                  borderRight: right,
                }}
                onClick={() => {
                  props.play();
                }}
              >
                {r === 4 && c === 4 && (
                  <FontAwesomeIcon
                    icon={faPlayCircle}
                    style={{ color: "#0072e3" }}
                    size="lg"
                  />
                )}
              </div>
            );
          })
        )}
    </div>
  );
};

export default DummyBoard;
