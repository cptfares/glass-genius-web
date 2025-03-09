
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function StorefrontGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Storefront Glass Installation",
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
        title="Commercial Storefront Glass Installation | Glass Genius"
        description="Professional storefront glass installation services for businesses throughout the DMV (D.C., Maryland, Virginia) region. Enhance your business presence with custom glass solutions."
        canonicalUrl="/services/storefront-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Storefront Glass Installation"
        imageUrl="/storefront.jpeg"
        description="Enhance your business's appeal with custom storefront glass installations throughout the DMV region."
        features={[
          "Custom storefront entrance systems",
          "Tempered glass storefronts",
          "Aluminum framing systems",
          "ADA-compliant door installations",
          "Energy-efficient glass options",
          "Emergency repair and replacement",
          "Display window installation and repair",
        ]}
        content={
          <>
            <p>
              Glass Genius specializes in designing and installing high-quality storefront 
              glass solutions for businesses throughout Washington D.C., Maryland, and 
              Northern Virginia. Our storefront glass systems not only enhance your 
              business visibility but also provide security and durability.
            </p>
            <p className="mt-4">
              We offer a variety of options including clear, tinted, or frosted glass, 
              with aluminum framing in various finishes. Our installations are designed 
              for longevity and comply with all commercial building requirements across 
              the DMV region, including energy-efficiency standards and safety codes.
            </p>
            <p className="mt-4">
              Our professional team handles the entire process, from consultation and 
              accurate measurements to expert installation and cleanup. We can work around 
              your business hours to minimize disruption, ensuring your new storefront 
              glass creates the perfect impression for your customers while maintaining 
              the functionality and security your business needs.
            </p>
          </>
        }
      />
    </>
  );
}
