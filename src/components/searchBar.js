import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(event.target.value);
  }
  render() {
    return (
      <div>
        <label>Video Search</label>
        <input onChange={this.onInputChange} value={this.state.term} />
      </div>
    );
  }
}
export default SearchBar;
