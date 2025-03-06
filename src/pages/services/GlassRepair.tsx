
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function GlassRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Glass Repair",
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
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "description": "Free estimates for glass repair services"
    }
  };

  return (
    <>
      <Seo 
        title="Professional Glass Repair Services | Glass Genius"
        description="Expert glass repair solutions for residential and commercial properties in Reston, VA and surrounding areas."
        canonicalUrl="/services/glass-repair"
        schema={schema}
      />
      <ServiceTemplate
        title="Professional Glass Repair Services"
        description="Expert glass repair solutions for residential and commercial properties in Reston, VA and surrounding areas."
        imageUrl="/placeholder.svg"
        features={[
          "24/7 emergency glass repair services",
          "Experienced and certified technicians",
          "High-quality materials and workmanship",
          "Free estimates and consultations",
          "Fast response times and efficient service",
          "Fully insured and licensed glass repair",
          "Satisfaction guaranteed on all repairs"
        ]}
        content={
          <>
            <p>
              At Glass Genius, we specialize in providing comprehensive glass repair services for both residential and commercial properties. Our skilled technicians can handle any glass repair project, from small cracks to complete replacements.
            </p>
            <p className="mt-4">
              We understand that damaged glass can be a safety hazard and an eyesore. That's why we offer prompt, professional service to restore your glass to its original condition or replace it entirely if necessary.
            </p>
            <p className="mt-4">
              Our glass repair services include fixing broken windows, damaged storefronts, cracked mirrors, table tops, shower doors, and more. We use only the highest quality materials to ensure durability and longevity.
            </p>
          </>
        }
      />
    </>
  );
}
