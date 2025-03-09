
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function ResidentialGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Residential Glass Services",
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
        title="Residential Glass Services | Glass Genius"
        description="Complete residential glass solutions for homes throughout the DMV (D.C., Maryland, Virginia) region. From windows to custom glass features, Glass Genius enhances your home with quality glass."
        canonicalUrl="/services/residential-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Residential Glass Services"
        imageUrl="/slidingdoor.jpg"
        description="Complete residential glass solutions for homes throughout the DMV region. From windows to custom glass features, we enhance your home with quality glass."
        features={[
          "Window repair and replacement",
          "Shower doors and enclosures",
          "Custom mirrors and glass tabletops",
          "Glass door installation and repair",
          "Interior glass features and room dividers",
          "Energy-efficient glass options",
          "Security glass for enhanced protection",
          "Design consultation for custom projects",
        ]}
        content={
          <>
            <p>
              Glass Genius offers comprehensive residential glass services to 
              homeowners throughout Washington D.C., Northern Virginia, and Maryland. 
              Our residential glass solutions enhance your home's beauty, 
              functionality, and value while meeting your specific needs and preferences.
            </p>
            <p className="mt-4">
              Our residential services include window repair and replacement, 
              shower enclosures, mirrors, glass tabletops, door installation, 
              glass railings, and custom glass features. We provide high-quality 
              materials and craftsmanship for both practical everyday items and 
              statement architectural elements.
            </p>
            <p className="mt-4">
              Our experienced team works closely with homeowners to understand 
              their vision and requirements. From initial consultation through 
              professional installation, we ensure a smooth process and exceptional 
              results. Whether you're replacing broken glass or undertaking a major 
              renovation, Glass Genius delivers beautiful, durable, and functional 
              glass solutions for homes throughout the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
