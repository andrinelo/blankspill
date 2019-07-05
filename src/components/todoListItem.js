import React from "react";

class TodoListItem extends React.Component {
  render() {
    return (
      <div className="todoListItem">
        <input
          type="checkbox"
          id={this.props.todo.item.key}
          onClick={this.props.toggleComplete}
        />
        <label for={this.props.todo.item.key}>
          {this.props.todo.item.text}
        </label>
        <button onClick={this.props.onDelete}>X</button>
      </div>
    );
  }
}
export default TodoListItem;
