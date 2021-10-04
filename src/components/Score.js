import React from "react";
import Correct from "./Correct";
import Incorrect from "./Incorrect";
import "../styles.css";

function Score(props) {
  return (
    <div class="score">
      <Correct correct={props.correct} />
      <Incorrect incorrect={props.incorrect} />
    </div>
  );
}

export default Score;
