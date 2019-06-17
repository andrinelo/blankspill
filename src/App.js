import React, { Component } from "react";
import "./App.css";
import "./video.js";
import brace from "brace";
import AceEditor from "react-ace";
import ReactPlayer from "react-player";
import "brace/mode/javascript";
import "brace/theme/monokai";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { value: "5+7", result: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange = newValue => {
    this.setState({ value: newValue });
  };

  handleClick() {
    try {
      const result = eval(this.state.value);
      this.setState({ result: result });
    } catch {
      console.log("meow");
    }
  }

  render() {
    return (
      <div>
        {/*
        <ReactPlayer
          url="https://www.youtube.com/watch?v=y7hVM8CFsGE"
          playing
      />*/}
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={this.state.value}
          onChange={this.handleChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
            $blockScrolling: true,
          }}
        />
        <button className="button" onClick={this.handleClick}>
          Run
        </button>
        <div>{this.state.result}</div>
      </div>
    );
  }
}
