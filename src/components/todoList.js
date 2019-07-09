import React from "react";
import TodoForm from "./todoForm";
import TodoListItem from "./todoListItem";
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

  checkIfEmpty(item) {
    console.log(item);
    if (item.text === "") {
      return true;
    }
    return false;
  }
  //Legger todoen til i listen
  addTodo(item) {
    this.setState({
      todos: [...this.state.todos, { item }],
    });
  }
  //dealer med hva som skal skje mtp hvilke oppgave de er på
  handleAdd(item) {
    const warning = "Du må skrive en todo først";
    if (this.props.enable >= 2) {
      if (this.checkIfEmpty(item)) {
        alert(warning);
      } else {
        this.addTodo(item);
      }
    } else if (this.props.enable >= 1) {
      this.addTodo(item);
    } else {
      alert("Du må gjøre oppgave 1 først");
      return false;
    }
  }

  deleteTodo(key) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.item.key !== key),
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
        if (todo.item.key === key) {
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
        key={todo.item.key}
        toggleComplete={() => this.toggleComplete(todo.item.key)}
        todo={todo}
        onDelete={() => this.deleteTodo(todo.item.key)}
      />
    ));
    let showNumberOfTodo = this.showNumberOfTodo();
    return (
      <div>
        <div className="todoTitle"> Handleliste 🍋 </div>
        <TodoForm handleAdd={this.handleAdd} />
        {todos}
        {showNumberOfTodo}
      </div>
    );
  }
}
