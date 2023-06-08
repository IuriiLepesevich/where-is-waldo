import React from "react";
import "../../styles/MessageBox.css";

function MessageBox(props: any) {
  const { isCorrect } = props;

  return (
    <div
      className="MessageBox"
      style={{
        backgroundColor: `${isCorrect ? "green" : "red"}`,
      }}
    >
      {isCorrect ? "Well Done!" : "Try more"}
    </div>
  );
}

export default MessageBox;
