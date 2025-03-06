
import React from "react";
import { Phone } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const StickyPhoneButton = () => {
  const handleClick = () => {
    toast({
      title: "Calling Glass Genius",
      description: "Connecting you to our service line..."
    });
  };

  return (
    <a
      href="tel:+12409685060"
      onClick={handleClick}
      aria-label="Call Glass Genius for immediate assistance"
      className="fixed bottom-6 right-6 bg-brand-blue text-white rounded-full p-4 shadow-lg hover:bg-brand-blue/90 transition-all duration-300 transform hover:scale-105 z-50"
    >
      <Phone size={24} />
    </a>
  );
};

export default StickyPhoneButton;
