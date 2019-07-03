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
        <div className="frontPageHeader">
          <h1>DETTE ER HJEMMESIDEN</h1>
        </div>
          <button className="frontPageBtn" onClick={this.tasks}>FORSTÅ KODING</button>
          <button className="frontPageBtn" onClick={this.video}>FØLG VALGFRI YOUTUBE TUTORIAL</button>
      </div>
    );
  }
}
