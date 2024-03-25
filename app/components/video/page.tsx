// components/video/page.js
import React from 'react';

interface VideoBackgroundProps {
  videoSource: string; // Define the type of videoSource prop as string
}

const VideoBackground: React.FC<VideoBackgroundProps> = ({ videoSource }) => {
  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-[-100]">
      <video
        className="object-cover w-full h-full"
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
