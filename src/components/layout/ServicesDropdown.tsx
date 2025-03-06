
import React from "react";
import { NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

// List of all services with their routes
export const servicesList = [
  { name: "Glass Repair", path: "/services/glass-repair" },
  { name: "Window Replacement", path: "/services/window-replacement" },
  { name: "Storefront Glass", path: "/services/storefront-glass" },
  { name: "Glass Doors", path: "/services/glass-doors" },
  { name: "Mirror Installation", path: "/services/mirror-installation" },
  { name: "Shower Enclosures", path: "/services/shower-enclosures" },
  { name: "Table Tops", path: "/services/table-tops" },
  { name: "Glass Railings", path: "/services/glass-railings" },
  { name: "Window Tinting", path: "/services/window-tinting" },
  { name: "Insulated Glass Units", path: "/services/insulated-glass" },
  { name: "Emergency Glass Repair", path: "/services/emergency-repair" },
  { name: "Commercial Glass", path: "/services/commercial-glass" },
  { name: "Residential Glass", path: "/services/residential-glass" },
  { name: "Security Glass", path: "/services/security-glass" },
  { name: "Glass Partitions", path: "/services/glass-partitions" },
];

interface ServicesDropdownProps {
  isMobile?: boolean;
  onItemClick?: () => void;
}

const ServicesDropdown = ({ isMobile = false, onItemClick }: ServicesDropdownProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
    if (onItemClick) onItemClick();
  };

  // For desktop, we use hover to open the dropdown
  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  return (
    <div 
      className="relative" 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={cn(
          "flex items-center gap-1",
          isMobile ? "w-full py-2 text-lg font-medium text-left border-b border-gray-100" : "nav-link"
        )}
        onClick={isMobile ? toggleDropdown : undefined}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        OUR SERVICES
        <ChevronDown size={16} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>

      <div
        className={cn(
          "absolute bg-white shadow-lg rounded-md py-2 z-50 transition-all duration-200",
          isMobile ? "static shadow-none py-0 mt-2" : "left-0 min-w-[220px] max-h-[80vh] overflow-y-auto",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className={isMobile ? "pl-4 space-y-2" : "grid grid-cols-1 gap-1"}>
          {servicesList.map((service) => (
            <NavLink
              key={service.path}
              to={service.path}
              className={({ isActive }) => cn(
                "block px-4 py-2 text-sm hover:bg-gray-100 transition-colors",
                isActive && "bg-brand-blue/10 text-brand-blue font-medium"
              )}
              onClick={closeDropdown}
            >
              {service.name}
            </NavLink>
          ))}
          <NavLink
            to="/services"
            className={({ isActive }) => cn(
              "block px-4 py-2 text-sm font-medium border-t border-gray-100 mt-2 pt-3 hover:bg-gray-100",
              isActive && "bg-brand-blue/10 text-brand-blue"
            )}
            onClick={closeDropdown}
          >
            View All Services
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ServicesDropdown;
