import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  handleClick() {
    this.props.onSearchTermChange(this.state.term);
  }
  render() {
    return (
      <div>
        <label>Video Search</label>
        <input onChange={this.onInputChange} value={this.state.term} />
        <button className="seachBarButton" onClick={this.handleClick}>
          Søk
        </button>
      </div>
    );
  }
}
export default SearchBar;
