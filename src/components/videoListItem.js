import React from "react";
const VideoListItem = props => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <li onClick={() => onUserSelected(video)}>
      <img src={imageUrl} />
      <div>{video.snippet.title}</div>
    </li>
  );
};

export default VideoListItem;
