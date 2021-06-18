import "./NumberPad.css";
const NumberPad = (props) => {
  return (
    <div className="NumberPad">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, idx) => {
        return (
          <button
            key={idx}
            className="NumberKey"
            onClick={() => props.keypress(item)}
            disabled={props.done[idx] >= 9}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default NumberPad;
