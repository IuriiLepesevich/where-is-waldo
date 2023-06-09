import React from "react";
import "../../styles/SubmitBox.css";
import { useNavigate } from "react-router-dom";
import { saveResult } from "../../firebase";

function SubmitBox(props: any) {
  const { levelNumber, time } = props;
  const navigator = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    saveResult(levelNumber, e.target.username.value || "Anonymous", time);
    navigator("/");
  };
  const handleCancel = () => {
    navigator("/");
  };
  return (
    <div className="SubmitBox">
      <div className="overlay" />
      <div className="form-holder">
        <div className="heading">
          You have completed Level {levelNumber} in {time} seconds!
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="username">Submit your score!</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Anonymous"
            className="input"
          />
          <div className="button-holder">
            <input type="submit" value="Submit" className="button submit" />
            <input
              type="button"
              value="Cancel"
              className="button cancel"
              onClick={handleCancel}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default SubmitBox;
