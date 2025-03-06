
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceLayoutProps {
  title: string;
  description: string;
  children: React.ReactNode;
  imageUrl?: string;
}

export default function ServiceLayout({ 
  title, 
  description, 
  children,
  imageUrl = "/placeholder.svg"
}: ServiceLayoutProps) {
  return (
    <Layout>
      <section className="py-12 bg-brand-light">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-lg text-gray-700 mb-6">{description}</p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <img 
                src={imageUrl} 
                alt={title} 
                className="rounded-lg shadow-md w-full h-auto object-cover aspect-[4/3]" 
              />
            </div>
            <div>
              {children}
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                  <Link to="/contact">Request a Quote</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:+12409685060">Call Us Now</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-brand-light">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Need Professional Glass Services?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Contact Glass Genius for a free consultation and estimate on your glass project.
            Our experts are ready to help with all your glass needs.
          </p>
          <Button asChild size="lg" className="bg-brand-blue hover:bg-brand-blue/90">
            <Link to="/contact" className="flex items-center gap-2">
              Get in Touch Today
              <ArrowRight size={16} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
}
