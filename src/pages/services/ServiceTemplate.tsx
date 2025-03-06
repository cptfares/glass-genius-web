
import React from "react";
import ServiceLayout from "@/components/services/ServiceLayout";
import { CheckCircle2 } from "lucide-react";

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
        {content}
        
        <h3 className="text-xl font-semibold mt-6 mb-4">Why Choose Glass Genius:</h3>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="text-brand-blue h-5 w-5 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </ServiceLayout>
  );
}
