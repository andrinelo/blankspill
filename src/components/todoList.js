import React from "react";
import TodoForm from "./todoForm";
import TodoListItem from "./todoListItem";
import Alert from "react-s-alert";
import "react-s-alert/dist/s-alert-css-effects/jelly.css";
import "../App.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    this.checkIfEmpty = this.checkIfEmpty.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
    this.showNumberOfTodo = this.showNumberOfTodo.bind(this);
  }

  checkIfEmpty(todo) {
    if (todo.text === "") {
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
  //dealer med hva som skal skje mtp hvilke oppgave de er på
  handleAdd(todo) {
    console.log(todo);
    const warning = "Du må skrive en todo først";
    if (this.props.enable >= 2) {
      if (this.checkIfEmpty(todo)) {
        Alert.warning(warning, {
          position: "top-right",
          effect: "jelly",
          timeout: 4000,
        });
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
      return timeToDoAlltask + " minutter for å gjøre det du skal";
    }
  }
  /* Funker ikke sånn det skal */
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

  render() {
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
        <div className="todoTitle"> Handleliste 🍋 </div>
        <TodoForm handleAdd={this.handleAdd} />
        {todos}
        {showNumberOfTodo}
      </div>
    );
  }
}
