import React from "react";
import "../../styles/Timer.css";

function Timer(props: any) {
  const { time } = props;

  return (
    <div className="Timer">
      {String(Math.floor(time / 60)).padStart(2, "0")}:
      {String(Math.floor(time % 60)).padStart(2, "0")}
    </div>
  );
}

export default Timer;
