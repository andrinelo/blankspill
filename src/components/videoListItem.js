import React from "react";

const VideoListItem = props => {
  const video = props.video;
  const onUserSelected = props.onUserSelected;
  const imageUrl = video.snippet.thumbnails.default.url;

  return (
    <div className="videoListItem" onClick={() => onUserSelected(video)}>
      <img src={imageUrl} />
      {/*<div>{video.snippet.title}</div> - if u want to display title*/}
    </div>
  );
};

export default VideoListItem;
