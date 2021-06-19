import React from "react";
import { useEffect } from "react";
import { faPlayCircle, faPauseCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Timer.css";
const Timer = (props) => {
  useEffect(() => {
    if (props.play) {
      let myInterval = setInterval(() => {
        if (props.sec === 59) {
          props.setTime([props.min + 1, 0]);
        } else {
          props.setTime([props.min, props.sec + 1]);
        }
      }, 1000);
      return () => {
        clearInterval(myInterval);
      };
    }
  }, [props]);

  return (
    <div className="Timer">
      {props.min < 10 ? `0${props.min}` : props.min}:
      {props.sec < 10 ? `0${props.sec}` : props.sec}{" "}
      <button
        type="button"
        onClick={() => {
          props.pause();
        }}
      >
        <FontAwesomeIcon
          icon={props.play ? faPauseCircle : faPlayCircle}
          size="1x"
        />
      </button>
    </div>
  );
};

export default Timer;
