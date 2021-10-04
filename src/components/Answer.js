import React from "react";
import "../styles.css";

function Answer(props) {
  return (
    <div>
      <button
        type="button"
        class="butt"
        onClick={() => props.handleClick(props.choice)}
      >
        {props.answer}
      </button>
    </div>
  );
}

export default Answer;
