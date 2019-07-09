import React from "react";
import "./App.css";

export default class Frontpage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.tasks = this.tasks.bind(this);
    this.video = this.video.bind(this);
  }

  tasks() {
    this.props.history.push("/game");
  }
  video() {
    this.props.history.push("/video");
  }
  render() {
    return (
      <div className="container">
        <div className="frontPage">
            <h1 className = "frontPageHeader">blanke ark</h1>
            <div className = "buttonMenu">
              <button className="frontPageBtn" onClick={this.tasks}>forstå koding</button>
              <button className="frontPageBtn" onClick={this.video}>følg youtube tutorial</button>
            </div>
        </div>
        <span className="smallScreen">
          💻 
        </span>
      </div>
    );
  }
}
