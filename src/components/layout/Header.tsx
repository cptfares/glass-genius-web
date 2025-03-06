import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ServicesDropdown from "./ServicesDropdown";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300",
        scrolled ? "py-2 bg-white shadow-md" : "py-4 bg-white/90"
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <NavLink to="/" onClick={closeMobileMenu}>
            <div className="hidden md:flex items-center gap-3">
              <img
                src="/lovable-uploads/f3ed474e-96f2-47b8-9787-ca848f2477f4.png"
                alt="Glass Genius Logo"
                className="h-12 md:h-14"
              />
            </div>
          </NavLink>
        </div>

        {/* Top contact bar */}
        <div className="flex items-center gap-6 flex-grow justify-end">
          <a
            href="tel:+12409685060"
            className="flex items-center gap-2 text-sm md:text-base font-medium text-brand-dark hover:text-brand-blue transition-all-200 whitespace-nowrap"
          >
            <Phone size={16} className="text-brand-blue" />
            <span>+1 240-968-5060</span>
          </a>
          <Button
            asChild
            className="bg-brand-blue hover:bg-brand-blue/90 whitespace-nowrap"
          >
            <NavLink to="/contact">Request A Quote</NavLink>
          </Button>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="p-2"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:block border-t border-gray-100 mt-2 bg-white">
        <div className="container px-4 mx-auto">
          <ul className="flex justify-center space-x-8 py-3">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <ServicesDropdown />
            </li>
            <li>
              <NavLink
                to="/emergency"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                24/7 EMERGENCY SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/commercial"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                COMMERCIAL GLASS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/residential"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                RESIDENTIAL GLASS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  cn("nav-link", isActive && "active")
                }
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 pt-20",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container px-4 mx-auto">
          <ul className="flex flex-col gap-4">
            <li>
              <NavLink
                to="/"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                ABOUT US
              </NavLink>
            </li>
            <li>
              <ServicesDropdown isMobile onItemClick={closeMobileMenu} />
            </li>
            <li>
              <NavLink
                to="/emergency"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                24/7 EMERGENCY SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/commercial"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                COMMERCIAL GLASS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/residential"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                RESIDENTIAL GLASS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/portfolio"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block py-2 text-lg font-medium border-b border-gray-100"
                onClick={closeMobileMenu}
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-4">
            <a
              href="tel:+12409685060"
              className="flex items-center gap-2 text-lg font-medium"
              onClick={closeMobileMenu}
            >
              <Phone size={18} className="text-brand-blue" />
              <span>+1 240-968-5060</span>
            </a>
            <Button
              asChild
              className="w-full bg-brand-blue hover:bg-brand-blue/90"
              onClick={closeMobileMenu}
            >
              <NavLink to="/contact">Request A Quote</NavLink>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
