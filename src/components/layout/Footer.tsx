
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
              Expert glass repair services for residential and commercial properties in the DMV (D.C., Maryland, Virginia) region. No job is too big or too small for us.
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
                Serving the entire DMV (D.C., Maryland, Virginia) region
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
              We proudly serve the entire DMV (D.C., Maryland, Virginia) region, including:
            </p>
            <div className="grid grid-cols-2 gap-2">
              <span className="text-gray-300">Washington, D.C.</span>
              <span className="text-gray-300">Arlington, VA</span>
              <span className="text-gray-300">Alexandria, VA</span>
              <span className="text-gray-300">Fairfax, VA</span>
              <span className="text-gray-300">Loudoun County, VA</span>
              <span className="text-gray-300">Prince William, VA</span>
              <span className="text-gray-300">Montgomery County, MD</span>
              <span className="text-gray-300">Prince George's, MD</span>
              <span className="text-gray-300">Howard County, MD</span>
              <span className="text-gray-300">Reston, VA</span>
              <span className="text-gray-300">Herndon, VA</span>
              <span className="text-gray-300">Vienna, VA</span>
              <span className="text-gray-300">Tysons, VA</span>
              <span className="text-gray-300">Falls Church, VA</span>
              <span className="text-gray-300">Ashburn, VA</span>
              <span className="text-gray-300">Sterling, VA</span>
              <span className="text-gray-300">Chantilly, VA</span>
              <span className="text-gray-300">McLean, VA</span>
              <span className="text-gray-300">Oakton, VA</span>
              <span className="text-gray-300">Great Falls, VA</span>
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
