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
  }

  checkIfEmpty(item) {
    if (item === "") {
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
    return (
      <div>
        <div className="todoTitle"> Todo app</div>
        <TodoForm handleAdd={this.handleAdd} />
        {todos}
        Antall gjøremål du har igjen er {this.state.todos.length}
      </div>
    );
  }
}
