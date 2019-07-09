import React, { Component } from "react";
import SearchBar from "./components/searchBar";
import VideoList from "./components/videoList";
import VideoDetail from "./components/videoDetails";
import YTSearch from "youtube-api-search";
import "./App.css";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";
//raggi const API_KEY = "AIzaSyDV7_3l00M-Tj_FPSR0Q3F78kO14jioJ1k";
//andrine const API_KEY = "AIzaSyAdsAMX9HtHJeNfZgEmbdRsxZeyjnNpdFY";
const API_KEY = "AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s";

export default class Video extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value: "//heihei, dette er en kommentar",
      result: "",
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch("Funny animals");
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    // this.question1 = this.question1.bind(this);
    // this.question2 = this.question2.bind(this);
  }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      const chosenData = [data[0], data[1], data[2]];
      this.setState({
        videos: chosenData,
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
      alert("ikke godkjent javascript-syntaks");
    }
  }

  /* question1() {
    this.props.history.push("/game");
  }

  question2() {
    this.props.history.push({
      pathname: "/game",
      state: { question: 1 },
    });
  }

  question3 = () => {
    this.props.history.push("/video");
  };*/

  render() {
    return (
      <div className="container">
        <div className="header">
        JavaScript Programmering
        </div>
        <div className="appVideo">
          <div className="aceEditor">
            <AceEditor
              mode="javascript"
              theme="monokai"
              value={this.state.value}
              onChange={this.handleChange}
              name="UNIQUE_ID_OF_DIV"
              height="460px"
              width="500px"
              editorProps={{
                $blockScrolling: true,
              }}
            />
            <button className="button" onClick={this.handleClick}>
              Run
            </button>
            <div className="output">{this.state.result}</div>
          </div>
          <div className="videoPage">
            <VideoDetail video={this.state.selectedVideo} />
            <SearchBar
              onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
            />
            <div>
              <VideoList
                onVideoSelect={userSelected =>
                  this.setState({ selectedVideo: userSelected })
                }
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        <span className="smallScreen">
          💻 
        </span>
      </div>
    );
  }
}
