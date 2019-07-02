import React, { Component } from "react";
import Questions from "./questions.js";
import TodoList from "./components/todoList.js";
import "./App.css";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
import { tsExternalModuleReference } from "@babel/types";
//raggi const API_KEY = "AIzaSyDV7_3l00M-Tj_FPSR0Q3F78kO14jioJ1k";
//andrine const API_KEY = "AIzaSyAdsAMX9HtHJeNfZgEmbdRsxZeyjnNpdFY";
const API_KEY = "AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value:
        "var todos = [];\nfunction addTodo(item){\n//skriv din kode her\nreturn todos;\n}",
      result: "",
      question: 0,
      videos: [],
      selectedVideo: null,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.question1 = this.question1.bind(this);
    this.question2 = this.question2.bind(this);
    this.question3 = this.question3.bind(this);
  }

  componentDidMount() {
    const hState = this.props.history.location.state;
    if (!!hState && !!hState.question)
      this.setState({ question: hState.question });
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
  };

  handleClick() {
    try {
      const test = Questions[this.state.question].test;
      if (test(this.state.value)) {
        this.setState({
          question: this.state.question + 1,
          value: Questions[this.state.question + 1].startValue,
        });
      } else {
        //kan legge inn feilmelding her
        //kjøres hvis syntaks er riktig, men feil logikk
        alert("Det ble feil, prøv en gang til :)");
      }
    } catch {
      alert("ikke godkjent javascript-syntaks");
    }
  }

  question1() {
    this.setState({
      question: 0,
      value: Questions[0].startValue,
    });
  }
  question2() {
    this.setState({ question: 1, value: Questions[1].startValue });
  }
  question3() {
    this.setState({ question: 2 });
  }

  render() {
    return (
      <div className="container">
        <div className="taskBar">
          <button onClick={this.question1}> Oppgave 1 </button>
          <button onClick={this.question2}> Oppgave 2 </button>
          <button onClick={this.question3}> Oppgave 3 </button>
        </div>
        <div className="app">
          <div>
            <div className="task">{Questions[this.state.question].q}</div>
            <div className="aceEditor">
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
            </div>
          </div>
          <TodoList enable={this.state.question} />
        </div>
      </div>
    );
  }
}
