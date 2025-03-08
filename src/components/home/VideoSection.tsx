
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none overflow-hidden">
        <h2 className="text-9xl md:text-[10rem] lg:text-[15rem] font-extrabold text-black whitespace-nowrap">
          OUR WORK IN ACTION
        </h2>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Work in Action</h2>
          <p className="text-gray-600">
            Watch our skilled technicians transform spaces with expert glass installations and repairs.
          </p>
        </div>
        
        <div className="aspect-video rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto relative bg-black">
          <video 
            ref={videoRef}
            className="w-full h-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png"
          >
            <source src="/glass-installation.mov" type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
          
          <div 
            className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/10 transition-colors cursor-pointer group"
            onClick={handlePlayPause}
          >
            <div className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-white/80 flex items-center justify-center group-hover:scale-110 transition-transform">
              <PlayCircle className="h-10 w-10 md:h-12 md:w-12 text-brand-blue fill-brand-blue" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Button 
            asChild 
            variant="outline" 
            className="flex items-center gap-2" 
            size="lg"
          >
            <Link to="/portfolio">
              <PlayCircle size={20} />
              View More Videos
            </Link>
          </Button>
          
          <Button asChild className="bg-brand-blue hover:bg-brand-blue/90" size="lg">
            <Link to="/contact">Get a Free Estimate</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
