import React, { Component } from "react";
import dataSet from "../api/dataSet";
import QuizArea from "./QuizArea";
import Score from "./Score";

class Questionnaire extends Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      dataSet: dataSet,
      correct: 0,
      incorrect: 0,
      isFinished: false,
      isPass: false,
      isFail: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(choice, count) {
    if (choice === this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current === this.state.dataSet.length - 1) {
      this.setState({ isFinished: true });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
    if (this.state.correct >= 2) {
      this.setState({ isPass: true });
    } else {
      this.setState({ isFail: true });
    }
  }

  render() {
    return (
      <div>
        <QuizArea
          handleClick={this.handleClick}
          isFinished={this.state.isFinished}
          isPass={this.state.isPass}
          isFail={this.state.isFail}
          dataSet={this.state.dataSet[this.state.current]}
        />
        <Score correct={this.state.correct} incorrect={this.state.incorrect} />
      </div>
    );
  }
}

export default Questionnaire;
