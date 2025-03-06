
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Building2, Home, Clock, ArrowRight, Hammer, GanttChartSquare, Columns, Scan } from "lucide-react";

const Services = () => {
  return (
    <Layout>
      {/* Page Header */}
      <HeroSection 
        title="Our Services" 
        subtitle="Professional glass repair and installation services for commercial and residential properties."
        isSmall={true}
      />
      
      {/* Services List */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Glass Solutions</h2>
            <p className="text-gray-600">
              At Glass Genius, we offer a wide range of glass repair and installation services for both commercial and residential properties. Our experienced team is equipped to handle any glass project, no matter the size or complexity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Commercial Glass */}
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 group hover:shadow-md transition-all-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Building2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Commercial Glass</h3>
              <p className="text-gray-600 mb-4">
                Expert solutions for storefronts, office partitions, entry systems, and more for your business.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Storefront Glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Office Partitions</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Entry Systems</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Safety & Security Glass</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all-200">
                <Link to="/commercial">Learn More</Link>
              </Button>
            </div>
            
            {/* Residential Glass */}
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 group hover:shadow-md transition-all-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Home size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Residential Glass</h3>
              <p className="text-gray-600 mb-4">
                Custom glass solutions for homes including windows, doors, shower enclosures, and mirrors.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Window Repairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Glass Doors</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Shower Enclosures</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Custom Mirrors</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all-200">
                <Link to="/residential">Learn More</Link>
              </Button>
            </div>
            
            {/* 24/7 Emergency Services */}
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 group hover:shadow-md transition-all-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">24/7 Emergency Services</h3>
              <p className="text-gray-600 mb-4">
                Immediate response for glass emergencies any time of day or night.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Break-In Repairs</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Emergency Boarding</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Rapid Response</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">24/7 Availability</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all-200">
                <Link to="/emergency">Learn More</Link>
              </Button>
            </div>
            
            {/* Glass Repair */}
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 group hover:shadow-md transition-all-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Hammer size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Glass Repair</h3>
              <p className="text-gray-600 mb-4">
                Expert repair services for all types of damaged glass in commercial and residential properties.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Broken Window Repair</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Glass Replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Foggy Window Fix</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Scratch Removal</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all-200">
                <Link to="/services/glass-repair">Learn More</Link>
              </Button>
            </div>
            
            {/* Custom Glass */}
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 group hover:shadow-md transition-all-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <GanttChartSquare size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Glass Solutions</h3>
              <p className="text-gray-600 mb-4">
                Tailored glass designs and installations for unique architectural requirements.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Custom Cut Glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Decorative Glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Patterned Glass</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Specialty Shapes</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all-200">
                <Link to="/services/custom-glass">Learn More</Link>
              </Button>
            </div>
            
            {/* Glass Installation */}
            <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100 group hover:shadow-md transition-all-300">
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue/10 text-brand-blue mb-4">
                <Columns size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Glass Installation</h3>
              <p className="text-gray-600 mb-4">
                Professional installation services for all types of glass products.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Window Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Door Installation</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Shower Enclosures</span>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight size={14} className="text-brand-blue" />
                  <span className="text-gray-600">Mirror Installation</span>
                </li>
              </ul>
              <Button asChild variant="outline" className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all-200">
                <Link to="/services/glass-installation">Learn More</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-100">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue shrink-0 mx-auto md:mx-0">
                <Scan size={28} />
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold mb-2">Free Consultation & Estimates</h3>
                <p className="text-gray-600 mb-4 md:mb-0">
                  Contact us today to schedule a free consultation and estimate for your glass project.
                </p>
              </div>
              <div className="shrink-0 ml-auto">
                <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Glass Genius</h2>
            <p className="text-gray-600">
              With our expertise, quality materials, and commitment to customer satisfaction, we deliver exceptional glass solutions for every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M8.6 19a2 2 0 0 1-1.4-.6L4.6 15a2 2 0 0 1 0-2.8L8.6 8a2 2 0 0 1 2.8 0"/><path d="M15.4 19a2 2 0 0 0 1.4-.6l2.6-3.4a2 2 0 0 0 0-2.8L15.4 8a2 2 0 0 0-2.8 0"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Expert Technicians</h3>
              <p className="text-gray-600">
                Our skilled technicians have years of experience in glass repair and installation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Fast Response</h3>
              <p className="text-gray-600">
                We provide prompt service with quick response times for all glass needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 7V3h6v4"/><path d="M9 10h.01"/><path d="M9 14h.01"/><path d="M9 18h.01"/><path d="M3 7l3 3 3-3"/><path d="m6 10 3 3-3 3"/><path d="M3 14h.01"/><path d="M3 18h.01"/><path d="M14 14h.01"/><path d="M14 18h.01"/><path d="M18 14h.01"/><path d="M18 18h.01"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Quality Materials</h3>
              <p className="text-gray-600">
                We use only high-quality glass and materials for durability and safety.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-soft text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"/><path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"/><path d="m18.5 8.5 3.5 3.5-3.5 3.5-3.5-3.5 3.5-3.5Z"/><path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"/></svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Competitive Pricing</h3>
              <p className="text-gray-600">
                We offer fair and transparent pricing for all our glass services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
