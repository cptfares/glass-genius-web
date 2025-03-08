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
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

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
            <div className="flex items-center gap-3">
              <img
                src="/lovable-uploads/f3ed474e-96f2-47b8-9787-ca848f2477f4.png"
                alt="Glass Genius Logo"
                className="h-12 md:h-14"
              />
            </div>
          </NavLink>
        </div>

        {/* Desktop Contact Bar */}
        <div className="hidden md:flex items-center gap-6 flex-grow justify-end">
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

        {/* Mobile Contact Bar */}
        <div className="flex md:hidden items-center gap-2">
          <a
            href="tel:+12409685060"
            className="flex items-center gap-1 text-xs font-medium text-brand-dark"
          >
            <Phone size={14} className="text-brand-blue" />
            <span>+1 240-968-5060</span>
          </a>
          <Button
            asChild
            size="sm"
            className="bg-brand-blue hover:bg-brand-blue/90 text-xs px-2 py-1 h-8"
          >
            <NavLink to="/contact">Get a Quote</NavLink>
          </Button>
          <button
            className="p-2 ml-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block border-t border-gray-100 mt-2 bg-white">
        <div className="container px-4 mx-auto">
          <ul className="flex justify-center space-x-8 py-3">
            {[
              { name: "HOME", to: "/" },
              { name: "ABOUT US", to: "/about" },
              { name: "24/7 EMERGENCY SERVICES", to: "/emergency" },
              { name: "COMMERCIAL GLASS", to: "/commercial" },
              { name: "RESIDENTIAL GLASS", to: "/residential" },
              { name: "PORTFOLIO", to: "/portfolio" },
              { name: "CONTACT US", to: "/contact" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    cn("nav-link", isActive && "active")
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <ServicesDropdown />
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-white z-40 transition-all duration-300 pt-20 overflow-y-auto max-h-screen",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="container px-4 mx-auto">
          <ul className="flex flex-col gap-4">
            {[
              { name: "HOME", to: "/" },
              { name: "ABOUT US", to: "/about" },
              { name: "24/7 EMERGENCY SERVICES", to: "/emergency" },
              { name: "COMMERCIAL GLASS", to: "/commercial" },
              { name: "RESIDENTIAL GLASS", to: "/residential" },
              { name: "PORTFOLIO", to: "/portfolio" },
              { name: "CONTACT US", to: "/contact" },
            ].map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className="block py-2 text-lg font-medium border-b border-gray-100"
                  onClick={closeMobileMenu}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
            <li>
              <ServicesDropdown isMobile onItemClick={closeMobileMenu} />
            </li>
          </ul>

          {/* Contact Section in Mobile Menu */}
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
