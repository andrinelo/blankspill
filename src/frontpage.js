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
      <div className="frontPage">
          <h1 className = "frontPageHeader">NAVN TIl KODEPLATTFORMEN</h1>
          <div className = "buttonMenu">
            <button className="frontPageBtn" onClick={this.tasks}>FORSTÅ KODING</button>
            <button className="frontPageBtn" onClick={this.video}>FØLG YOUTUBE TUTORIAL</button>
          </div>
      </div>
    );
  }
}
