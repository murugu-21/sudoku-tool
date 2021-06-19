import {
  faEraser,
  faLightbulb,
  faPen,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tools.css";
const Tools = (props) => {
  return (
    <div className="Tools">
      <button
        className="item undo"
        key={0}
        disabled={props.disable}
        onClick={() => props.handleUndo()}
      >
        <FontAwesomeIcon icon={faUndo} size="1x" />
      </button>
      <div className="item eraser" key={1} onClick={() => props.onDelete()}>
        <FontAwesomeIcon icon={faEraser} size="1x" />
      </div>
      <div className="item pen" key={2} onClick={() => props.changePen()}>
        <FontAwesomeIcon
          icon={faPen}
          style={{ color: props.isPen ? "blue" : "black" }}
          size="1x"
        />
      </div>
      <div
        className="item hint"
        key={3}
        onClick={() => {
          props.handleSolve();
        }}
      >
        <FontAwesomeIcon icon={faLightbulb} size="1x" />
      </div>
    </div>
  );
};

export default Tools;
