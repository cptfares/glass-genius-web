import React from "react";
import Layout from "@/components/layout/Layout";
import { CalendarClock, Shield, Ban, Truck, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Seo from "@/components/seo/Seo";

const EmergencyServices = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Emergency Glass Repair",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Glass Genius",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Reston",
        "addressRegion": "VA",
        "postalCode": "20190",
        "addressCountry": "US"
      },
      "telephone": "+12409685060"
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://glassgenius.com/emergency",
      "servicePhone": "+12409685060",
      "availableLanguage": "English"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 38.9586,
        "longitude": -77.3570
      },
      "geoRadius": "32000"
    },
    "hoursAvailable": "Mo-Su 00:00-24:00"
  };

  return (
    <Layout>
      <Seo 
        title="24/7 Emergency Glass Repair Services | Glass Genius"
        description="Fast response when you need it most. We provide emergency glass repair services around the clock for residential and commercial properties in Reston, VA and surrounding areas."
        canonicalUrl="/emergency"
        schema={schema}
      />
      
      {/* Hero Section */}
      <div className="relative bg-brand-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png" 
            alt="Emergency glass repair technician responding to a call" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-brand-dark/50"></div>
        </div>
        
        <div className="container relative z-10 px-4 py-20 mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">24/7 Emergency Glass Repair</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Fast response when you need it most. We provide emergency glass repair services around the clock for residential and commercial properties.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
              <a href="tel:+12409685060">
                <Phone className="mr-2" size={20} />
                Call Our Emergency Line
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white text-brand-dark border-white hover:bg-white/90">
              <Link to="/contact">Request Emergency Service</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Immediate Response When You Need It Most</h2>
          <p className="text-lg text-gray-700 mb-8">
            Glass emergencies don't wait for business hours. That's why Glass Genius provides 24/7 emergency glass repair services throughout Reston, Virginia and surrounding areas. Whether it's a broken storefront window, shattered home glass, or any glass emergency, our team is ready to respond quickly.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <CalendarClock className="text-brand-blue h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Available 24/7/365</h3>
              <p className="text-gray-600">
                Our emergency services are available 24 hours a day, 7 days a week, 365 days a year. We understand that glass emergencies can happen at any time, and we're always ready to help.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <Truck className="text-brand-blue h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Rapid Response Time</h3>
              <p className="text-gray-600">
                Our team aims to arrive at your location as quickly as possible, typically within 60-90 minutes of your call, depending on your location within our service area.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <Shield className="text-brand-blue h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">Secure Your Property</h3>
              <p className="text-gray-600">
                We'll secure your property by boarding up broken windows or doors until permanent repairs can be made, ensuring your home or business remains protected.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <Ban className="text-brand-blue h-10 w-10 mb-4" />
              <h3 className="text-xl font-semibold mb-3">No Hidden Fees</h3>
              <p className="text-gray-600">
                We provide transparent pricing even for emergency services. While emergency rates may apply, we'll always be upfront about costs before starting any work.
              </p>
            </div>
          </div>
          
          <div className="bg-brand-blue/10 p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-bold mb-4">Common Emergency Glass Situations We Handle:</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Clock className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Broken storefront windows or doors</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Shattered home windows from break-ins or accidents</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Damaged glass doors that won't close or lock properly</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Weather-related glass damage from storms</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Vehicle impact on commercial storefronts</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                <span>Vandalism requiring immediate glass replacement</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center mb-12">
            <h3 className="text-2xl font-bold mb-4">Emergency Glass Services Hotline</h3>
            <p className="text-lg mb-6">Our emergency response team is standing by 24/7 to assist you.</p>
            <a 
              href="tel:+12409685060" 
              className="text-3xl font-bold text-brand-blue hover:underline flex items-center justify-center gap-3"
            >
              <Phone size={28} />
              +1 240-968-5060
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
              <a href="tel:+12409685060">Call For Emergency Service</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/contact">Contact Us Online</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EmergencyServices;
