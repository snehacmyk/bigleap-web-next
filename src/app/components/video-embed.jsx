import React from "react";

const VideoEmbed = ({ src, title = "YouTube video player" }) => (
  <iframe
    src={src}
    title={title}
    frameBorder="0"
    allow="autoplay; encrypted-media"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
    style={{ width: "100%", height: "400px" }}
  />
);

export default VideoEmbed;