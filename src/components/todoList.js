<<<<<<< HEAD
import React from 'react';
import TodoForm from './todoForm';
import TodoListItem from './todoListItem';

=======
import React from "react";
import TodoForm from "./todoForm";
import "../App.css";
>>>>>>> 2750ac8b3b2582627b2a9575e393771d7410814a

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };
    this.addTodo = this.addTodo.bind(this);
    //this.mapTodos = this.mapTodos.bind(this);
  }

<<<<<<< HEAD
	constructor(props){
		super(props);
		this.state = {
			todos: []
		};
		this.addTodo = this.addTodo.bind(this);
	}

	addTodo(item){
		if (item===''){alert("You need to add a todo");} 
		else{
		this.setState(
			{todos: [<li>{item}</li>, ...this.state.todos]}
		);
		}
		console.log(this.state.todos)
	};


	deleteTodo(index) {
		let todoArray = this.state.todos;
		todoArray.splice(index,1);
		this.setState({todos:todoArray})
	}


	render(){

		let todos = this.state.todos.map((val,key) => {
			return <TodoListItem key={key} text={val}
				deleteMethod= { () => this.deleteTodo(key)}/>
		})
		return(
			<div>
				<div> Todo list app</div>
				<TodoForm onAdd={this.addTodo}/>
				{todos}
			</div>
		);
	}
}
=======
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
>>>>>>> 2750ac8b3b2582627b2a9575e393771d7410814a
