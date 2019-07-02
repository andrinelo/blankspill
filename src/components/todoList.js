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
  }

 checkIfEmpty(item){
  	if (item===""){
  		return true;
  	}
  	return false;
  } 

 

  addTodo(item) {
    const warning = "Du må skrive en todo først";
    if (this.props.enable >= 2){
    	if (this.checkIfEmpty(item)){
		alert(warning);
   		 }
    	else {
      	this.setState({ todos: [<li>{item}</li>, ...this.state.todos] });
    	}
    }
    else if(this.props.enable >= 1){
    	this.setState({ todos: [<li>{item}</li>, ...this.state.todos]});
    }
    else {
    	alert("Du må gjøre oppgave 1 først");
    	return false}

  }

  deleteTodo(index) {
    let todoArray = this.state.todos;
    todoArray.splice(index, 1);
    this.setState({ todos: todoArray });
  }

  render() {
    let todos = this.state.todos.map((val, key) => {
      return (
        <TodoListItem
          key={key}
          text={val}
          deleteMethod={() => this.deleteTodo(key)}
        />
      );
    });
    return (
      <div className="todoApp">
        <div> Todo app</div>
        <TodoForm onAdd={this.addTodo} />
        {todos}
      </div>
    );
  }
}
