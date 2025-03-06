
import { NavLink } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark pt-16 text-white">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Glass Genius Glass Repair</h3>
            <p className="text-gray-300 mb-6">
              Expert glass repair services for residential and commercial properties in Reston, Virginia and surrounding areas. No job is too big or too small for us.
            </p>
            <div className="flex items-center gap-3 mb-3">
              <Phone size={18} className="text-brand-blue" />
              <a href="tel:+12409685060" className="text-gray-300 hover:text-brand-blue transition-all-200">
                +1 240-968-5060
              </a>
            </div>
            <div className="flex items-center gap-3 mb-3">
              <Mail size={18} className="text-brand-blue" />
              <a href="mailto:glassgeniusservices@gmail.com" className="text-gray-300 hover:text-brand-blue transition-all-200">
                glassgeniusservices@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-brand-blue shrink-0 mt-1" />
              <p className="text-gray-300">
                Serving Reston, Virginia and a 20-mile radius
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <NavLink to="/" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Home</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>About Us</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Our Services</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/commercial" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Commercial Glass</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/residential" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Residential Glass</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/portfolio" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Portfolio</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-300 hover:text-brand-blue transition-all-200 flex items-center gap-2">
                  <ArrowRight size={14} />
                  <span>Contact Us</span>
                </NavLink>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Service Areas</h3>
            <p className="text-gray-300 mb-4">
              We proudly serve Reston, Virginia and a 20-mile radius, including:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-gray-300">Herndon</span>
              <span className="text-gray-300">Vienna</span>
              <span className="text-gray-300">Tysons</span>
              <span className="text-gray-300">Falls Church</span>
              <span className="text-gray-300">Fairfax</span>
              <span className="text-gray-300">Ashburn</span>
              <span className="text-gray-300">Sterling</span>
              <span className="text-gray-300">Chantilly</span>
              <span className="text-gray-300">McLean</span>
              <span className="text-gray-300">Oakton</span>
              <span className="text-gray-300">Great Falls</span>
              <span className="text-gray-300">Centreville</span>
              <span className="text-gray-300">Manassas</span>
              <span className="text-gray-300">Annandale</span>
              <span className="text-gray-300">Springfield</span>
              <span className="text-gray-300">Burke</span>
              <span className="text-gray-300">Lorton</span>
              <span className="text-gray-300">Woodbridge</span>
              <span className="text-gray-300">Leesburg</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 py-6 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Glass Genius Glass Repair. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
