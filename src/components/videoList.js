import React from "react";
import VideoListItem from "./videoListItem.js";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onUserSelected={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });
  return <ul>{videoItems}</ul>;
};

export default VideoList;
