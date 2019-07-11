import React from "react";



class TodoListItem extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.itemToShow = this.itemToShow.bind(this);
  }

  itemToShow(){
    if (this.props.todo.text.length > 18) {
    return this.props.todo.text.substring(0,18) + "...";
  }
    else {
      return this.props.todo.text;
    }
  }

  render() {
    let todo = this.itemToShow();
    return (
      <div className="todoListItem">
        <input
          className="checkbox"
          type="checkbox"
          id={this.props.todo.key}
          onClick={this.props.toggleComplete}
          checked={this.props.todo.complete}
        />
        <label
          className={this.props.todo.complete ? "completed" : "uncompleted"}
          for={this.props.todo.key}
        >
          {todo}
        </label>
        <button className="deleteButton" onClick={this.props.onDelete}>
          X
        </button>
      </div>
    );
  }
}
export default TodoListItem;
