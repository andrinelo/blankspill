import React, { Component } from "react";
import "./App.css";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = { aceEditorValue: "abc" };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.aceEditorValue !== nextState.aceEditorValue) {
      return false;
    } else {
      return true;
    }
  }
  handleChange = newValue => {
    this.setState({ aceEditorValue: newValue });
  };

  handleClick() {
    console.log(this.state.aceEditorValue);
  }

  render() {
    return (
      <div>
        <AceEditor
          //ref="editor" //test
          mode="javascript"
          theme="monokai"
          onChange={this.handleChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
            $blockScrolling: true,
          }}
        />
        <button className="button" onClick={this.handleClick}>
          Run
        </button>
      </div>
    );
  }
}
