import React, { Component } from 'react'
import ReactPlayer from 'react-player'
 
class Video extends Component {
  render () {
    return <ReactPlayer url={this.props.url} playing />
  }
}

export default Video;