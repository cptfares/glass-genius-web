
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      {/* Page Header */}
      <HeroSection 
        title="Contact Us" 
        subtitle="Get in touch with our team for all your glass repair and installation needs."
        isSmall={true}
      />
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Contact Glass Genius for all your glass repair and installation needs. We provide free estimates and expert service for both commercial and residential properties.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Phone</h3>
                    <a href="tel:+12409685060" className="text-gray-600 hover:text-brand-blue transition-all-200">
                      +1 240-968-5060
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Email</h3>
                    <a href="mailto:glassgeniusservices@gmail.com" className="text-gray-600 hover:text-brand-blue transition-all-200">
                      glassgeniusservices@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Service Area</h3>
                    <p className="text-gray-600">
                      Serving Reston, Virginia and a 20-mile radius
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-blue/10 text-brand-blue shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 6:00 PM
                    </p>
                    <p className="text-gray-600">
                      Saturday: 9:00 AM - 4:00 PM
                    </p>
                    <p className="text-gray-600">
                      24/7 Emergency Services Available
                    </p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Our Service Areas</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
                <span className="text-gray-600">Reston</span>
                <span className="text-gray-600">Herndon</span>
                <span className="text-gray-600">Vienna</span>
                <span className="text-gray-600">Tysons</span>
                <span className="text-gray-600">Falls Church</span>
                <span className="text-gray-600">Fairfax</span>
                <span className="text-gray-600">Ashburn</span>
                <span className="text-gray-600">Sterling</span>
                <span className="text-gray-600">Chantilly</span>
                <span className="text-gray-600">McLean</span>
                <span className="text-gray-600">Oakton</span>
                <span className="text-gray-600">Great Falls</span>
                <span className="text-gray-600">Centreville</span>
                <span className="text-gray-600">Manassas</span>
                <span className="text-gray-600">Annandale</span>
                <span className="text-gray-600">Springfield</span>
                <span className="text-gray-600">Burke</span>
                <span className="text-gray-600">Lorton</span>
                <span className="text-gray-600">Woodbridge</span>
                <span className="text-gray-600">Leesburg</span>
              </div>
            </div>
            
            <div>
              <ContactForm title="Send Us a Message" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map or Additional Content */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Need Glass Services?</h2>
            <p className="text-gray-600 mb-8">
              Whether you need emergency glass repair, custom glass installation, or consultation for your commercial or residential property, we're here to help. Contact us today for a free estimate and expert service.
            </p>
            <div className="flex justify-center">
              <a 
                href="tel:+12409685060" 
                className="inline-flex items-center gap-2 py-3 px-6 bg-brand-blue text-white rounded-md font-medium hover:bg-brand-blue/90 transition-all-200"
              >
                <Phone size={18} />
                <span>Call Us: +1 240-968-5060</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
