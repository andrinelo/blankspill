import React from "react";
import TodoForm from "./todoForm";
import "../App.css";

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    //this.mapTodos = this.mapTodos.bind(this);
  }

  addTodo(item) {
    this.setState({ todos: [<li>{item}</li>, ...this.state.todos] });
    console.log(this.state.todos);
  }
  /*
	mapTodos(){
		var i;
		for (i = 0; i<this.state.todos.length; i++){
			return <div>this.state.todos[i] </div>
		}
	}*/

  render() {
    return (
      <div className="todoApp">
        <div> Todo app</div>
        <TodoForm onAdd={this.addTodo} />
        <div>{this.state.todos}</div>
      </div>
    );
  }
}
