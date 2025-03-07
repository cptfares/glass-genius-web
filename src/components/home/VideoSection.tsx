
import React from "react";
import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";
import { Link } from "react-router-dom";

const VideoSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">See Our Work in Action</h2>
          <p className="text-gray-600">
            Watch our skilled technicians transform spaces with expert glass installations and repairs.
          </p>
        </div>
        
        <div className="aspect-video rounded-lg overflow-hidden shadow-xl max-w-4xl mx-auto">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
            title="Glass Genius Services Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
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
