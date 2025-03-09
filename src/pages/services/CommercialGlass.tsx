
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function CommercialGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Glass Services",
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
        title="Commercial Glass Solutions | Glass Genius"
        description="Complete commercial glass services for businesses throughout the DMV (D.C., Maryland, Virginia) region. From storefronts to interior glass, Glass Genius delivers quality solutions."
        canonicalUrl="/services/commercial-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Commercial Glass Solutions"
        imageUrl="/storefront.jpeg"
        description="Complete commercial glass services for businesses throughout the DMV region. From storefronts to interior glass, we deliver quality solutions."
        features={[
          "Storefront design and installation",
          "Commercial door repair and replacement",
          "Interior glass walls and partitions",
          "Glass conference rooms and offices",
          "Safety and security glass options",
          "Energy-efficient glass solutions",
          "ADA-compliant door systems",
          "Emergency commercial glass repair",
        ]}
        content={
          <>
            <p>
              Glass Genius provides comprehensive commercial glass services for 
              businesses of all sizes across Washington D.C., Northern Virginia, and Maryland. 
              We understand that commercial glass not only affects your property's 
              appearance but also its security, energy efficiency, and functionality.
            </p>
            <p className="mt-4">
              Our commercial glass services include storefront design and 
              installation, door repair and replacement, curtain walls, interior 
              glass partitions, safety glazing, and more. We work with architects, 
              contractors, and business owners to implement glass solutions that 
              meet your specific requirements and budget.
            </p>
            <p className="mt-4">
              With our experienced team and high-quality materials, we ensure 
              that every commercial glass project is completed to the highest 
              standards. From small retail shops to large office buildings, 
              Glass Genius has the expertise to handle commercial glass projects 
              of any scale throughout the DMV region. We also offer 24/7 emergency 
              services for urgent commercial glass repairs.
            </p>
          </>
        }
      />
    </>
  );
}
