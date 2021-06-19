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
      <div
        className="item undo"
        key={0}
        disabled={props.disable}
        onClick={() => props.handleUndo()}
      >
        <FontAwesomeIcon icon={faUndo} size="1x" />
      </div>
      <div className="item" key={1} onClick={() => props.onDelete()}>
        <FontAwesomeIcon icon={faTrash} size="1x" />
      </div>
      <div className="item" key={2} onClick={() => props.changePen()}>
        <FontAwesomeIcon
          icon={faPen}
          style={{ color: props.isPen ? "blue" : "black" }}
          size="1x"
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
        <FontAwesomeIcon icon={faLightbulb} size="1x" />
      </div>
    </div>
  );
};

export default Tools;
