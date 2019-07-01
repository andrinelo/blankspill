import React from "react";
import "../App.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleAdd(event) {
    event.preventDefault();
    this.props.onAdd(this.state.value);
    this.setState({ value: "" });
  }

  render() {
    return (
      <div>
        <div className="todoForm">
          <form onSubmit={this.handleAdd}>
            <input
              placeholder="Kjøpe hest"
              onChange={this.handleChange}
              value={this.state.value}
            />
            <button onClick={this.handleAdd}>Legg til</button>
          </form>
        </div>
      </div>
    );
  }
}
