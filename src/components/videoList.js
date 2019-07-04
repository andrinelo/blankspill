import React from "react";
import VideoListItem from "./videoListItem.js";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return <VideoListItem onUserSelected={props.onVideoSelect} video={video} />;
  });
  return <ul className="videoListItem">{videoItems}</ul>;
};

export default VideoList;
