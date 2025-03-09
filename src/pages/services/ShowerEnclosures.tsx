
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function ShowerEnclosures() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Shower Enclosures",
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
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 38.9586,
        longitude: -77.3570,
      },
      geoRadius: "50 miles",
    },
  };

  return (
    <>
      <Seo
        title="Custom Shower Enclosures & Doors | Glass Genius"
        description="Transform your bathroom with beautiful, custom shower enclosures and doors from Glass Genius. Serving the DMV (D.C., Maryland, Virginia) region."
        canonicalUrl="/services/shower-enclosures"
        schema={schema}
      />
      <ServiceTemplate
        title="Custom Shower Enclosures & Doors"
        imageUrl="/image2.jpeg"
        description="Transform your bathroom with beautiful, custom shower enclosures and doors from Glass Genius. Serving throughout the DMV (D.C., Maryland, Virginia) region."
        features={[
          "Custom designs tailored to your space",
          "Frameless, semi-frameless, and framed options",
          "Wide selection of glass types and hardware",
          "Precise measurements and professional installation",
          "Water-tight seals and proper drainage consideration",
          "Easy maintenance and cleaning",
          "Durable materials for long-lasting beauty",
        ]}
        content={
          <>
            <p>
              Elevate your bathroom's aesthetics and functionality with custom
              shower enclosures and doors from Glass Genius. We design and install
              beautiful shower solutions that transform ordinary bathrooms into
              luxurious retreats throughout Washington D.C., Northern Virginia, and Maryland.
            </p>
            <p className="mt-4">
              Our shower glass experts work with you to create the perfect
              enclosure for your space, whether you prefer a minimalist frameless
              design, a semi-frameless style, or a traditional framed enclosure.
              We offer various glass options, including clear, frosted, patterned,
              and tinted, along with a selection of hardware finishes to
              complement your bathroom decor.
            </p>
            <p className="mt-4">
              Each shower enclosure is custom-measured, fabricated, and installed
              by our skilled technicians to ensure a perfect fit and proper
              function. With attention to detail and quality craftsmanship, Glass
              Genius delivers shower enclosures that combine beauty, durability,
              and value for customers across the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
