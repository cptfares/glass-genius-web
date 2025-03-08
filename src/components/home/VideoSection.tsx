import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section className="py-10 md:py-16 bg-gray-50 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <h2 className="text-7xl sm:text-9xl md:text-[10rem] lg:text-[15rem] font-extrabold text-black whitespace-nowrap animate-fade-in">
          OUR WORK IN ACTION
        </h2>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
            See Our Work in Action
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Watch our skilled technicians transform spaces with expert glass
            installations and repairs.
          </p>
        </div>

        <div className="aspect-video rounded-lg overflow-hidden shadow-xl mx-auto relative bg-black max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            playsInline
            preload="metadata"
            poster="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png"
            onEnded={() => setIsPlaying(false)}
          >
            <source src="/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors cursor-pointer group"
              onClick={handlePlayPause}
            >
              <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
                <PlayCircle className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-brand-blue fill-brand-blue" />
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8 md:mt-10">
          <Button
            asChild
            variant="outline"
            className="flex items-center gap-2 w-full sm:w-auto"
            size="lg"
          >
            <Link to="/portfolio">
              <PlayCircle size={18} className="md:size-20" />
              <span className="text-sm sm:text-base">View More Videos</span>
            </Link>
          </Button>

          <Button
            asChild
            className="bg-brand-blue hover:bg-brand-blue/90 w-full sm:w-auto"
            size="lg"
          >
            <Link to="/contact">
              <span className="text-sm sm:text-base">Get a Free Estimate</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
