import React from "react";
import TodoForm from "./todoForm";
import TodoListItem from "./todoListItem";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
import "../App.css";
import { throwStatement } from "@babel/types";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.checkIfEmpty = this.checkIfEmpty.bind(this);
    this.displayWarning = this.displayWarning.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.showNumberOfTodo = this.showNumberOfTodo.bind(this);
  }

  checkIfEmpty(todo) {
    if (todo.text === "") {
      this.displayWarning("Du må skrive inn en todo først");
      return true;
    }
    return false;
  }
  //Legger todoen til i listen
  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo],
    });
  }
  displayWarning(warning) {
    Alert.warning(warning, {
      position: "top-right",
      effect: "jelly",
      timeout: 4000,
    });
  }
  //dealer med hva som skal skje mtp hvilke oppgave de er på
  handleAdd(todo) {
    if (this.props.enable >= 2) {
      if (this.checkIfEmpty(todo)) {
      } else if (this.props.enable >= 6 && this.state.todos.length >= 20) {
        this.displayWarning("Handlelisten er full");
      } else {
        this.addTodo(todo);
      }
    } else if (this.props.enable >= 1) {
      this.addTodo(todo);
    } else {
      Alert.warning("Du må gjøre oppgave 1 først", {
        position: "top-right",
        effect: "jelly",
        timeout: 4000,
      });
      return false;
    }
  }

  deleteTodo(key) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.key !== key),
    });
  }

  showNumberOfTodo() {
    if (this.props.enable >= 4) {
      let timeToDoAlltask = this.state.todos.length * 30;
      return timeToDoAlltask + " kroner for alt du skal ha";
    }
  }

  toggleComplete(key) {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.key === key) {
          return {
            ...todo,
            complete: !todo.complete,
          };
        } else {
          return todo;
        }
      }),
    });
  }

  changeEmoji() {
    if (this.props.enable >= 5) {
      return "🚀";
    }
    return "🍋";
  }

  render() {
    let headerEmoji = this.changeEmoji();
    let todos = this.state.todos.map(todo => (
      <TodoListItem
        key={todo.key}
        toggleComplete={() => this.toggleComplete(todo.key)}
        todo={todo}
        onDelete={() => this.deleteTodo(todo.key)}
      />
    ));
    let showNumberOfTodo = this.showNumberOfTodo();
    return (
      <div className="todoList">
        <div className="todoTitle"> Handleliste {headerEmoji}</div>
        <TodoForm handleAdd={this.handleAdd} />
        {todos}
        {showNumberOfTodo}
      </div>
    );
  }
}
