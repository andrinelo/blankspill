import React, { Component } from "react";
import Questions from "./questions.js";
import TodoList from "./components/todoList.js";
import "./App.css";
import brace from "brace";
import AceEditor from "react-ace";
import Alert from "react-s-alert";
//import "react-s-alert/dist/s-alert-css-effects/slide.css";
//import "react-s-alert/dist/s-alert-css-effects/scale.css";
//import "react-s-alert/dist/s-alert-css-effects/bouncyflip.css";
//import "react-s-alert/dist/s-alert-css-effects/flip.css";
//import "react-s-alert/dist/s-alert-css-effects/genie.css";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
//import "react-s-alert/dist/s-alert-css-effects/stackslide.css";
import "brace/mode/javascript";
import "brace/theme/monokai";
import { tsExternalModuleReference } from "@babel/types";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: Questions[0].startValue,
      question: 0,
      completed: [],
      hint: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickRun = this.handleClickRun.bind(this);
    this.toggleHint = this.toggleHint.bind(this);
    this.changeQuestion = this.changeQuestion.bind(this);
  }

  componentDidMount() {
    const hState = this.props.history.location.state;
    if (!!hState && !!hState.question) {
      this.setState({ question: hState.question });
    }
    var i;
    var completed = [];
    for (i = 0; i < Questions.length; i++) {
      completed.push(false);
    }
    this.setState({ completed: completed });
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
  };

  handleClickRun() {
    try {
      const test = Questions[this.state.question].test;
      if (test(this.state.value)) {
        Alert.success("Gratulerer, du klarte oppgaven", {
          position: "bottom-left",
          effect: "jelly",
          timeout: 3000,
        });
        this.setState({
          question: this.state.question + 1,
          value: Questions[this.state.question + 1].startValue,
          hint: false,
          /* completed: this.state.completed.map(i => {
            if(){
            return !i;
          }}),*/
        });
      } else {
        //kjøres hvis syntaks er riktig, men feil logikk
        Alert.warning("Det ble feil, prøv en gang til :)", {
          position: "bottom-left",
          effect: "jelly",
          timeout: 4000,
        });
      }
    } catch {
      Alert.error(
        "Noe ble feil, sjekk at du har skrevet riktig navn på variabler og funksjoner, og at syntaksten er riktig.",
        {
          position: "bottom-left",
          effect: "jelly",
          timeout: 5000,
        },
      );
    }
  }

  toggleHint() {
    this.setState({ hint: !this.state.hint });
  }

  changeQuestion(id) {
    this.setState({
      question: id,
      value: Questions[id].startValue,
      hint: false,
    });
  }

  render() {
    let hint = "";
    if (this.state.hint) {
      hint = Questions[this.state.question].hint;
    }

    let link = "";
    if (this.state.question === 9){
      link = "Fortsettelse følger...";
    }
    return (
      <div className="container">
        <div className="headerGame">Lær JavaScript Programmering</div>
        {/* <div className="taskBar">
          {this.state.questions.map( (q) => {
            
            <button 
              className="taskBtn" 
              onClick={this.question1}
              color={q.isPassed? 'red' : 'green'}
            > Oppgave 1 </button>    

          }} */}
        <div className="taskBar">
          <button
            className={this.state.question === 0 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(0)}
          >
            Oppgave 1
          </button>
          <button
            className={this.state.question === 1 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(1)}
          >
            Oppgave 2
          </button>
          <button
            className={this.state.question === 2 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(2)}
          >
            Oppgave 3
          </button>
          <button
            className={this.state.question === 3 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(3)}
          >
            Oppgave 4
          </button>
          <button
            className={this.state.question === 4 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(4)}
          >
            Oppgave 5
          </button>
          <button
            className={this.state.question === 5 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(5)}
          >
            Oppgave 6
          </button>
          <button
            className={this.state.question === 6 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(6)}
          >
            Oppgave 7
          </button>
          <button
            className={this.state.question === 7 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(7)}
          >
            Oppgave 8
          </button>
          <button
            className={this.state.question === 8 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(8)}
          >
            Oppgave 9
          </button>
          <button
            className={this.state.question === 9 ? "activeTaskBtn" : "taskBtn"}
            onClick={() => this.changeQuestion(9)}
          >
            Oppgave 10
          </button>
        </div>
        <div className="app">
          <div>
            <div className="task">
              <div className="tilteAndHintContainer">
                <div className="questionTitle">
                  Oppgave {this.state.question + 1}
                </div>
                <button className={this.state.question < 9 ? "hintButton" : "pyro"} onClick={this.toggleHint}>
                  💡
                </button> 
              </div>
              <div className="question">{Questions[this.state.question].q}</div>
              <div className="question">{hint}</div>
              <a className="question" href="http://localhost:3000/video">{link}</a>
            </div>
            <div className="aceEditor">
              <AceEditor
                mode="javascript"
                theme="monokai"
                value={this.state.value}
                onChange={this.handleChange}
                name="UNIQUE_ID_OF_DIV"
                height="363px"
                width="600px"
                fontSize={16}
                editorProps={{
                  $blockScrolling: true,
                }}
              />
              <button className="button" onClick={this.handleClickRun}>
                Run
              </button>
            </div>
          </div>
          <div className="todoListPage">
            <TodoList enable={this.state.question} />
          </div>
        </div>
        <span className="smallScreen">💻</span>
      </div>
    );
  }
}
