
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ContactForm from "@/components/contact/ContactForm";
import { Check, CircleDollarSign, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Commercial = () => {
  return (
    <Layout>
      {/* Page Header */}
      <HeroSection 
        title="Commercial Glass Services" 
        subtitle="Expert glass solutions for businesses, offices, and commercial properties."
        isSmall={true}
      />
      
      {/* Services Content */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png" 
                alt="Commercial glass installation" 
                className="rounded-lg shadow-md w-full object-cover max-h-[500px]"
              />
            </div>
            
            <div className="animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">Commercial Glass Solutions</h2>
              <p className="text-gray-600 mb-6">
                Glass Genius provides professional glass services for all commercial properties, including storefronts, offices, retail spaces, and more. Our experienced team delivers high-quality workmanship with a focus on durability, safety, and aesthetics.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that commercial glass installations require precision and attention to detail, which is why our skilled technicians ensure every project meets the highest standards of quality.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Storefront Glass</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Office Partitions</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Entry Systems</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Glass Doors</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Security Glass</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Display Cases</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Glass Railings</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Custom Solutions</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Our Commercial Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Storefront Glass</h3>
                <p className="text-gray-600 mb-4">
                  Make a lasting impression with our custom storefront glass solutions. We design and install attractive, durable storefront systems that enhance your business's curb appeal.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Frameless Systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Aluminum Framing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Display Windows</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Office Partitions</h3>
                <p className="text-gray-600 mb-4">
                  Create modern, open workspaces with our glass office partitions. They provide privacy while maintaining an open, collaborative environment and allowing natural light to flow.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Frameless Partitions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Sliding Doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Frosted Options</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Entry Systems</h3>
                <p className="text-gray-600 mb-4">
                  Our commercial glass entry systems combine functionality with elegant design, creating an inviting entrance for your customers and clients.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Single & Double Doors</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">ADA Compliant Options</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Security Hardware</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-soft border border-gray-100">
                <h3 className="text-xl font-bold mb-3">Security Glass</h3>
                <p className="text-gray-600 mb-4">
                  Protect your business with our security glass solutions, designed to withstand impact and provide enhanced safety for your property.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Tempered Glass</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Laminated Glass</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="text-brand-blue shrink-0" size={16} />
                    <span className="text-gray-600">Break-Resistant Options</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg border border-gray-100 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Why Choose Glass Genius for Commercial Services</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m14.5 9-5 5"/><path d="m9.5 9 5 5"/></svg>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Quality Assurance</h4>
                  <p className="text-gray-600">
                    We use premium materials that meet industry standards.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                    <Clock size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Timely Completion</h4>
                  <p className="text-gray-600">
                    We understand that time is money for your business.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                    <CircleDollarSign size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Competitive Pricing</h4>
                  <p className="text-gray-600">
                    Quality commercial glass services at fair prices.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-brand-blue/10 text-brand-blue mx-auto mb-4">
                    <Shield size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">Licensed & Insured</h4>
                  <p className="text-gray-600">
                    Your business is protected with our coverage.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Commercial Space?</h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Contact Glass Genius today for a free consultation and estimate for your commercial glass project. Our team is ready to provide expert solutions for your business.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/contact">Request a Free Estimate</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600">
                Get in touch for commercial glass solutions that meet your business needs.
              </p>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Commercial;
