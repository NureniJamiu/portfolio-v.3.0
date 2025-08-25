"use client";
import { useRef } from 'react';
import { Badge } from '../ui/badge';

const ShowcaseCard = ({ title, description, imageSrc, videoSrc, devTools=[] }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="group relative isolate border-x border-gray-950/5 dark:border-white/10 overflow-hidden bg-white dark:bg-gray-950 transition-colors hover:bg-gray-950/5 dark:hover:bg-white/5 shadow-sm"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Media Container with Aspect Ratio */}
      <div className="aspect-[16/10] w-full overflow-hidden p-6 border-b border-neutral-800 mb-3">
        {/* Static Image */}
        <img
          src={imageSrc}
          alt={title}
          className="block w-full h-full object-contain pointer-events-none group-hover:hidden transition-opacity duration-300 rounded-xl"
        />

        {/* Video Preview */}
        <video
          ref={videoRef}
          className="hidden w-full h-full object-contain pointer-events-none group-hover:block transition-opacity duration-300 rounded-xl"
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <div className='text-left px-4 py-2 space-y-1 border-t border-neutral-800'>
        <h6 className="font-semibold">{title}</h6>
        <p className='text-sm font-light'>{description}</p>
        <div className='pt-4 '>
          {devTools.map((tool) => (
            <Badge key={tool} className="bg-blue-500 mr-2 mb-2 hover:bg-blue-600 text-white" >{tool}</Badge>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ShowcaseCard;
