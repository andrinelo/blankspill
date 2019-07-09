import React from "react";

class TodoListItem extends React.Component {
  render() {
    return (
      <div className="todoListItem">
        <input
          type="checkbox"
          id={this.props.todo.key}
          onClick={this.props.toggleComplete}
          checked={this.props.todo.complete}
        />
        <label
          className={this.props.todo.complete ? "todoListItemText" : ""}
          for={this.props.todo.key}
        >
          {this.props.todo.text}
        </label>
        <button className="deleteButton" onClick={this.props.onDelete}>
          X
        </button>
      </div>
    );
  }
}
export default TodoListItem;
