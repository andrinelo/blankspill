import React from "react";

const VideoDetail = props => {
  const video = props.video;
  console.log(video);

  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  console.log(url);
  return (
    <div>
      <iframe title="hei" src={url} />
      <div>{video.snippet.title}</div>
      <div>{video.snippet.description}</div>
    </div>
  );
};

export default VideoDetail;
