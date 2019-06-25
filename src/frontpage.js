import React from "react";

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
      <div>
        <h1>DETTE ER HJEMMESIDEN</h1>
        <button onClick={this.tasks}>Oppgaver</button>
        <button onClick={this.video}>Video tutorial</button>
      </div>
    );
  }
}
