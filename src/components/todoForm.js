import React from "react";
import shortid from "shortid";
import "../App.css";

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleAdd(event) {
    event.preventDefault();
    this.props.handleAdd({
      key: shortid.generate(),
      text: this.state.text,
      complete: false,
    });
    this.setState({ text: "" });
  }

  render() {
    return (
      <div>
        <div className="todoForm">
          <form onSubmit={this.handleAdd}>
            <input
              className="todoInput"
              name="text"
              placeholder="Skriv her"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button className="leggTil" onClick={this.handleAdd}>
              Legg til
            </button>
          </form>
        </div>
      </div>
    );
  }
}
