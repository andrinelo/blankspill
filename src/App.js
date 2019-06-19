import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";
import VideoListItem from "./components/videoListItem";
import VideoDetail from "./components/videoDetails";
import YTSearch from "youtube-api-search";
import "./App.css";
//import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
const API_KEY = "AIzaSyDV7_3l00M-Tj_FPSR0Q3F78kO14jioJ1k";

export default class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: "",
      result: "",
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch("React Tutorials");
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }

  handleChange = newValue => {
    this.setState({ value: newValue });
  };

  handleClick() {
    try {
      const result = eval(this.state.value);
      this.setState({ result: result });
    } catch {
      this.setState({ result: "" });
      console.log("ikke godkjent javascript syntaks");
    }
  }

  render() {
    return (
      <div>
        <AceEditor
          mode="javascript"
          theme="monokai"
          value={this.state.value}
          onChange={this.handleChange}
          name="UNIQUE_ID_OF_DIV"
          editorProps={{
            $blockScrolling: true,
          }}
        />
        <button className="button" onClick={this.handleClick}>
          Run
        </button>
        <div>{this.state.result}</div>
        <SearchBar
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={userSelected =>
            this.setState({ selectedVideo: userSelected })
          }
          videos={this.state.videos}
        />
      </div>
    );
  }
}
