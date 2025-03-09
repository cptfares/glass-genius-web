
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function SecurityGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Security Glass",
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
  };

  return (
    <>
      <Seo
        title="Security Glass Solutions | Glass Genius"
        description="Enhance protection for your property with security glass solutions from Glass Genius. Serving the DMV (D.C., Maryland, Virginia) region with advanced glass security options."
        canonicalUrl="/services/security-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Security Glass Solutions"
        imageUrl="/placeholder.svg"
        description="Enhance protection for your property with security glass solutions throughout the DMV region."
        features={[
          "Laminated security glass options",
          "Bullet-resistant glass systems",
          "Forced entry protection",
          "Security film installation",
          "Residential and commercial applications",
          "Custom solutions based on security needs",
          "Professional installation and certification",
          "Improved protection without sacrificing aesthetics",
        ]}
        content={
          <>
            <p>
              Glass Genius provides advanced security glass solutions for homes 
              and businesses across Washington D.C., Northern Virginia, and Maryland that 
              require enhanced protection. Our security glass products offer 
              resistance to forced entry, ballistic impacts, and other security threats 
              while maintaining visual appeal.
            </p>
            <p className="mt-4">
              We offer various security glass options, including laminated glass 
              that holds together when shattered, tempered glass with increased 
              strength, and specialized security glass systems designed for 
              specific threat levels. We also provide security window films that 
              can be applied to existing glass to improve its security performance.
            </p>
            <p className="mt-4">
              Our security glass experts will assess your specific needs and 
              recommend the appropriate solutions for your property. Whether you're 
              protecting a retail storefront, securing a residential property, or 
              meeting specialized security requirements for a commercial facility, 
              Glass Genius has the expertise to implement effective security glass 
              solutions throughout the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
