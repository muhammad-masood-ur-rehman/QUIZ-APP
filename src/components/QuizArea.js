import React from "react";
import Question from "./Question";
import AnswerList from "./AnswerList";
import Greeting from "./Greeting";
import GoodStatus from "./GoodStatus";
import PoorStatus from "./PoorStatus";
import "../styles.css";

function QuizArea(props) {
  if (props.isFinished && props.isPass) {
    return (
      <div>
        <Greeting />
        <GoodStatus />
      </div>
    );
  }
  if (props.isFinished && props.isFail) {
    return (
      <div>
        <Greeting />
        <PoorStatus />
      </div>
    );
  }

  return (
    <div>
      <Question dataSet={props.dataSet} />
      <AnswerList handleClick={props.handleClick} dataSet={props.dataSet} />
    </div>
  );
}

export default QuizArea;
