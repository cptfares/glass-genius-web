
import Layout from "@/components/layout/Layout";
import { CheckCircle2, Home, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const residentialServices = [
  {
    title: "Window Repair & Replacement",
    description: "Fix broken windows or upgrade to energy-efficient options for your home.",
    link: "/services/window-replacement"
  },
  {
    title: "Glass Door Installation",
    description: "Beautiful sliding glass doors, french doors, and patio doors for your home.",
    link: "/services/glass-doors"
  },
  {
    title: "Shower Enclosures",
    description: "Custom shower doors and enclosures to transform your bathroom.",
    link: "/services/shower-enclosures"
  },
  {
    title: "Mirror Installation",
    description: "Custom mirrors for bathrooms, bedrooms, and decorative purposes.",
    link: "/services/mirrors"
  },
  {
    title: "Glass Tabletops",
    description: "Custom glass tops for tables, desks, and furniture protection.",
    link: "/services/glass-repair"
  },
  {
    title: "Glass Shelving",
    description: "Elegant glass shelves for your home décor needs.",
    link: "/services/glass-repair"
  }
];

const ResidentialGlass = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative bg-brand-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png" 
            alt="Residential Glass Services" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-brand-dark/50"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Residential Glass Services</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Elevate your home with custom glass solutions. From window replacements to shower enclosures, we provide quality residential glass services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
              <a href="tel:+12409685060">
                <Phone className="mr-2" size={20} />
                Call For A Free Quote
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-dark border-white hover:bg-white/90">
              <Link to="/contact">Request An Estimate</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6">Enhance Your Home With Quality Glass</h2>
          <p className="text-lg text-gray-700 mb-6">
            At Glass Genius, we provide comprehensive residential glass services to enhance the beauty, functionality, and value of your home. Our expert technicians specialize in everything from window replacements to custom shower enclosures and decorative glass features.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We understand that your home is your sanctuary, which is why we take extra care to ensure clean installation, minimal disruption, and exceptional results. Our residential glass services are designed to meet your specific needs and preferences while adhering to the highest quality standards.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 mt-10">
            <div className="flex items-center gap-3 mb-4">
              <Home className="text-brand-blue h-8 w-8 flex-shrink-0" />
              <h3 className="text-xl font-semibold">Our Residential Glass Services Include:</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Window repair and replacement</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Sliding glass door installation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Custom shower enclosures</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Bathroom mirrors</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Glass tabletops</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Decorative glass installations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Glass shelving</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Privacy glass</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Energy-efficient glass options</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Glass railings and balustrades</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Residential Services Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Residential Glass Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to={service.link}>Learn More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-brand-blue/10 p-8 rounded-lg max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Enhance Your Home?</h3>
            <p className="text-lg">
              Contact us today for a free consultation and estimate on your residential glass project.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+12409685060" 
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-brand-blue text-white rounded-md font-medium hover:bg-brand-blue/90 transition-all duration-200"
            >
              <Phone size={18} />
              <span>+1 240-968-5060</span>
            </a>
            
            <Button asChild variant="outline">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResidentialGlass;
