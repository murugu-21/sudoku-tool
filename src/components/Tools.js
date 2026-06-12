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
        disabled={props.disable}
        onClick={() => props.handleUndo()}
      >
        <FontAwesomeIcon icon={faUndo} size="1x" />
      </button>
      <button className="item eraser" onClick={() => props.onDelete()}>
        <FontAwesomeIcon icon={faEraser} size="1x" />
      </button>
      <button
        className={props.isPen ? "item pen active" : "item pen"}
        onClick={() => props.changePen()}
      >
        <FontAwesomeIcon icon={faPen} size="1x" />
      </button>
      <button className="item hint" onClick={() => props.handleSolve()}>
        <FontAwesomeIcon icon={faLightbulb} size="1x" />
      </button>
    </div>
  );
};

export default Tools;
