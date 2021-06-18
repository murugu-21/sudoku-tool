import "./Cell.css";
const Cell = (props) => {
  let reference = null;
  if (props.isFocus && reference !== null) reference.focus();
  return (
    <div
      className="cell"
      tabIndex={0}
      style={{
        color: props.color,
        borderLeft: props.left,
        borderTop: props.top,
        borderRight: props.right,
        borderBottom: props.bottom,
        backgroundColor: props.bgColor,
      }}
      ref={(input) => {
        reference = input;
      }}
      onClick={() => {
        props.handleClick();
      }}
    >
      {props.value && typeof props.value === "number" && props.value}
      {props.value && typeof props.value === "object" && (
        <div className="notes">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((value, index) => {
            return (
              <div
                className="notes_cell"
                key={index}
                style={{
                  color: "#0072e3",
                }}
              >
                {props.value.includes(value) && value}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Cell;
