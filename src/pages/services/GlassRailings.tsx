import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function GlassRailings() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Railings",
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
        title="Modern Glass Railing Systems | Glass Genius"
        description="Enhance your property with elegant glass railings from Glass Genius. We install custom glass railing systems throughout the DMV (D.C., Maryland, Virginia) region."
        canonicalUrl="/services/glass-railings"
        schema={schema}
      />
      <ServiceTemplate
        title="Modern Glass Railing Systems"
        imageUrl="/GlassRailing.jpeg"
        description="Enhance your property with elegant glass railings that provide safety without sacrificing views or style across the DMV region."
        features={[
          "Frameless and semi-frameless options",
          "Custom designs for staircases and balconies",
          "Interior and exterior applications",
          "Various mounting systems available",
          "Tempered and laminated safety glass",
          "Durable hardware in multiple finishes",
          "Professional installation and compliance with building codes",
        ]}
        content={
          <>
            <p>
              Transform your staircases, balconies, and decks with modern glass
              railing systems from Glass Genius. Our custom glass railings
              combine safety with sophisticated style, creating an open, airy
              feel while maintaining protection throughout Washington D.C.,
              Northern Virginia, and Maryland.
            </p>
            <p className="mt-4">
              We offer various glass railing systems, including frameless,
              semi-frameless, and post designs with stainless steel, aluminum,
              or wood components. Our glass options include clear, frosted, or
              tinted tempered safety glass that meets or exceeds all local
              building code requirements.
            </p>
            <p className="mt-4">
              Our experienced team handles every aspect of your glass railing
              project, from initial design and precise measurements to
              professional installation. Glass railings not only provide safety
              but also enhance the visual appeal of your property, allowing
              unobstructed views and maximizing the flow of natural light
              throughout the DMV area.
            </p>
          </>
        }
      />
    </>
  );
}
