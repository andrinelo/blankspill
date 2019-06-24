import React from "react";

const VideoDetail = props => {
  const video = props.video;

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe src={url} />
      <div className="details">
        <strong>{video.snippet.title}</strong>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
