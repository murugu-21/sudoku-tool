import {
  faLightbulb,
  faPen,
  faTrash,
  faUndo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Tools.css";
const Tools = (props) => {
  return (
    <div className="Tools">
      <button
        key={0}
        className="item undo"
        disabled={props.disable}
        onClick={() => props.handleUndo()}
      >
        <FontAwesomeIcon icon={faUndo} size="3x" />
      </button>
      <div className="item" key={1} onClick={() => props.onDelete()}>
        <FontAwesomeIcon icon={faTrash} size="3x" />
      </div>
      <div className="item" key={2} onClick={() => props.changePen()}>
        <FontAwesomeIcon
          icon={faPen}
          style={{ color: props.isPen ? "blue" : "black" }}
          size="3x"
        />
      </div>
      <div
        className="item"
        key={3}
        onClick={() => {
          props.toggleGenerate();
        }}
        style={{ color: props.isGenerate ? "red" : "black" }}
      >
        <FontAwesomeIcon icon={faLightbulb} size="3x" />
      </div>
    </div>
  );
};

export default Tools;
