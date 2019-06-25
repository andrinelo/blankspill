import React, { Component } from "react";
import Questions from "./questions.js";
import "./App.css";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
//raggi const API_KEY = "AIzaSyDV7_3l00M-Tj_FPSR0Q3F78kO14jioJ1k";
//andrine const API_KEY = "AIzaSyAdsAMX9HtHJeNfZgEmbdRsxZeyjnNpdFY";
const API_KEY = "AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value:
        "//Dette er en editor. \n//Hvis du skriver kode her og trykker Run vil output vises på siden.",
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
    console.log(this.props.history.location.state);
    const hState = this.props.history.location.state;
    if (!!hState && !!hState.question)
      this.setState({ question: hState.question });
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
  };

  handleClick() {
    try {
      const result = eval(this.state.value);
      this.setState({ result: result });
      if (Questions[this.state.question].a === eval(this.state.value)) {
        alert("Du klarte det!");
        console.log(this.state.question);
        if (this.state.question === 0) {
          this.setState({ question: this.state.question + 1 });
        } else {
          this.question3();
        }
      } else {
        alert("Prøv på nytt");
      }
    } catch {
      this.setState({ result: "" });
      alert("ikke godkjent javascript-syntaks");
    }
  }

  question1() {
    this.setState({ question: 0 });
  }
  question2() {
    this.setState({ question: 1 });
  }

  question3 = () => {
    this.props.history.push("/video");
  };

  render() {
    return (
      <div className="app">
        <button onClick={this.question1}> Tekst</button>
        <button onClick={this.question2}> Funksjoner</button>
        <button onClick={this.question3}> Video tutorial</button>
        <div className ="aceeditor">
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
        <div className="task">
          <div>{Questions[this.state.question].q}</div>
        </div>
      </div>
    );
  }
}
