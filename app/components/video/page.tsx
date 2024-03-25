// components/VideoBackground.js
import React from 'react';

const VideoBackground = ({ videoSource }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-100]">
      <video
        className="object-cover w-full h-full border-4 border-red-800"
        autoPlay
        muted
        loop
        playsInline
        src={videoSource}
      />
    </div>
  );
};

export default VideoBackground;
