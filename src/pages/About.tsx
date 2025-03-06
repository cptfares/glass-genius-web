
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import { Check } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Page Header */}
      <HeroSection 
        title="About Us" 
        isSmall={true}
      />
      
      {/* About Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png" 
                alt="Glass installation professionals" 
                className="rounded-lg shadow-md w-full max-h-[500px] object-cover"
              />
            </div>
            
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Glass Genius provides an excellent mobile service to meet all your glass doors and windows needs. Our continued dedication to providing quality services with the highest level of workmanship and customer service is what sets us apart in today's competitive glass industry.
              </p>
              <p className="text-gray-600 mb-6">
                No job is too big or too small for us.
              </p>
              <p className="text-gray-700 font-medium mb-6">
                Our mission is to create happiness through our services.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Quality Workmanship</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Expert Technicians</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Mobile Service</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Prompt Response</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Free Estimates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Competitive Pricing</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Why Choose Glass Genius?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Experience & Expertise</h3>
                <p className="text-gray-600">
                  Our team of skilled technicians has years of experience in glass repair and installation, ensuring high-quality workmanship on every project.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Customer Satisfaction</h3>
                <p className="text-gray-600">
                  We prioritize customer satisfaction and strive to exceed expectations with our professional service and attention to detail.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Quality Materials</h3>
                <p className="text-gray-600">
                  We use only high-quality glass and materials to ensure durability, safety, and aesthetic appeal for all our installations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Prompt & Reliable</h3>
                <p className="text-gray-600">
                  We value your time and provide prompt, reliable service with clear communication throughout the entire process.
                </p>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold mb-6 text-center">Our Service Area</h2>
            <p className="text-gray-600 text-center mb-8">
              We proudly serve Reston, Virginia and a 20-mile radius, including:
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Herndon</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Vienna</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Tysons</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Falls Church</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Fairfax</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Ashburn</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Sterling</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Chantilly</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">McLean</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Oakton</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Great Falls</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Centreville</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Manassas</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Annandale</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Springfield</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Burke</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Lorton</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Woodbridge</div>
              <div className="bg-white p-4 rounded border border-gray-100 text-center shadow-sm">Leesburg</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Request a Free Estimate</h2>
              <p className="text-gray-600">
                Contact us today to get a free estimate for your glass repair or installation project.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
