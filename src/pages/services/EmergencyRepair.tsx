
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function EmergencyRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Emergency Glass Repair",
    provider: {
      "@type": "LocalBusiness",
      name: "Glass Genius",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Reston",
        addressRegion: "VA",
        postalCode: "20190",
        addressCountry: "US",
      },
      telephone: "+12409685060",
    },
    areaServed: "DMV (D.C., Maryland, Virginia)",
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: "https://glassgenius.com/emergency",
      servicePhone: "+12409685060",
      availableLanguage: "English",
    },
    hoursAvailable: "Mo-Su 00:00-24:00",
  };

  return (
    <>
      <Seo
        title="24/7 Emergency Glass Repair | Glass Genius"
        description="Fast response when you need it most. We provide emergency glass repair services around the clock for residential and commercial properties throughout the DMV (D.C., Maryland, Virginia) region."
        canonicalUrl="/services/emergency-repair"
        schema={schema}
      />
      <ServiceTemplate
        title="24/7 Emergency Glass Repair"
        imageUrl="/img5.jpeg"
        description="Fast response when you need it most. We provide emergency glass repair services around the clock for residential and commercial properties throughout the DMV region."
        features={[
          "Available 24 hours a day, 7 days a week",
          "Rapid response times",
          "Temporary boarding up services",
          "Complete glass replacement",
          "Residential and commercial emergency services",
          "Licensed and insured technicians",
          "Serving the entire DMV region",
          "Direct insurance billing options",
        ]}
        content={
          <>
            <p>
              Glass emergencies don't wait for business hours. That's why 
              Glass Genius provides 24/7 emergency glass repair services 
              throughout Washington D.C., Northern Virginia, and Maryland. Whether it's a 
              broken storefront window, shattered home glass, or any glass 
              emergency, our team is ready to respond quickly.
            </p>
            <p className="mt-4">
              Our emergency glass repair services include immediate boarding up 
              to secure your property, followed by permanent glass replacement as 
              soon as possible. We handle all types of emergency situations, from 
              break-ins and vandalism to weather damage and accidents.
            </p>
            <p className="mt-4">
              When you call our emergency line, you'll speak with a glass 
              professional who will dispatch a technician to your location as 
              quickly as possible. Our emergency team arrives equipped with the 
              tools and materials needed to secure your property and assess the 
              damage. We work efficiently to minimize disruption and restore 
              safety and security to your home or business throughout the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
