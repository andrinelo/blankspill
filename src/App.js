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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickRun = this.handleClickRun.bind(this);
    this.question1 = this.question1.bind(this);
    this.question2 = this.question2.bind(this);
    this.question3 = this.question3.bind(this);
    this.question4 = this.question4.bind(this);
    this.question5 = this.question5.bind(this);
    this.question6 = this.question6.bind(this);
    this.question7 = this.question7.bind(this);
    this.question8 = this.question8.bind(this);
    this.question9 = this.question9.bind(this);
    this.question10 = this.question10.bind(this);
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
    this.setState({ question: 2, value: Questions[2].startValue });
  }

  question4() {
    this.setState({ question: 3, value: Questions[3].startValue });
  }

  question5() {
    this.setState({ question: 4, value: Questions[4].startValue });
  }

  question6() {
    this.setState({ question: 5, value: Questions[5].startValue });
  }
  question7() {
    this.setState({ question: 6, value: Questions[6].startValue });
  }

  question8() {
    this.setState({ question: 7, value: Questions[7].startValue });
  }
  question9() {
    this.setState({ question: 8, value: Questions[8].startValue });
  }

  question10() {
    this.setState({ question: 9, value: Questions[9].startValue });
  }
  render() {
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
            onClick={this.question1}
          >
            Oppgave 1
          </button>
          <button
            className={this.state.question === 1 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question2}
          >
            Oppgave 2
          </button>
          <button
            className={this.state.question === 2 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question3}
          >
            Oppgave 3
          </button>
          <button
            className={this.state.question === 3 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question4}
          >
            Oppgave 4
          </button>
          <button
            className={this.state.question === 4 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question5}
          >
            Oppgave 5
          </button>
          <button
            className={this.state.question === 5 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question6}
          >
            Oppgave 6
          </button>
          <button
            className={this.state.question === 6 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question7}
          >
            Oppgave 7
          </button>
          <button
            className={this.state.question === 7 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question8}
          >
            Oppgave 8
          </button>
          <button
            className={this.state.question === 8 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question9}
          >
            Oppgave 9
          </button>
          <button
            className={this.state.question === 9 ? "activeTaskBtn" : "taskBtn"}
            onClick={this.question10}
          >
            Oppgave 10
          </button>
        </div>
        <div className="app">
          <div>
            <div className="task">
              <div className="questionTitle">
                Oppgave {this.state.question + 1}
              </div>
              <p className="question">{Questions[this.state.question].q}</p>
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
