// VideoSlides component to receive video slide data and render them
import React from "react";

const VideoSlides = ({ slides }) => {
    return (
        <div className="video-slides">
            {slides.map((slide, idx) => (
                <div key={idx} className="video-slide">
                    <iframe
                        src={slide.iframe}
                        title={slide.caption || `Video Slide ${idx + 1}`}
                        frameBorder="0"
                        allow="autoplay; encrypted-media"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        style={{ width: "100%", height: "400px" }}
                    />
                    {slide.caption && <div className="caption">{slide.caption}</div>}
                </div>
            ))}
        </div>
    );
};

export default VideoSlides;
