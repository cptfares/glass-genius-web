
import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceTemplateProps {
  title: string;
  description: string;
  content: React.ReactNode;
  features: string[];
  imageUrl?: string;
}

export default function ServiceTemplate({ 
  title, 
  description, 
  content, 
  features,
  imageUrl 
}: ServiceTemplateProps) {
  return (
    <ServiceLayout 
      title={title}
      description={description}
      imageUrl={imageUrl}
    >
      <div className="space-y-4">
        <article>
          {content}
        
          <div className="my-8 p-4 bg-gray-50 rounded-lg border border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Phone className="text-brand-blue h-6 w-6 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm text-gray-500">Call us for a free quote</p>
                <a href="tel:+12409685060" className="text-lg font-medium hover:text-brand-blue transition-colors">
                  +1 240-968-5060
                </a>
              </div>
            </div>
            <Button asChild className="w-full sm:w-auto bg-brand-blue hover:bg-brand-blue/90">
              <a href="tel:+12409685060">Call Now</a>
            </Button>
          </div>
        
          <h3 className="text-xl font-semibold mt-6 mb-4">Why Choose Glass Genius:</h3>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 className="text-brand-blue h-5 w-5 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </ServiceLayout>
  );
}
