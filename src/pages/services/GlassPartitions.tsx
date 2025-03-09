
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function GlassPartitions() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Partitions",
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
        title="Custom Glass Partitions & Dividers | Glass Genius"
        description="Create elegant, functional spaces with custom glass partitions from Glass Genius. Serving the DMV (D.C., Maryland, Virginia) region with quality glass solutions."
        canonicalUrl="/services/glass-partitions"
        schema={schema}
      />
      <ServiceTemplate
        title="Custom Glass Partitions & Dividers"
        imageUrl="/office.jpeg"
        description="Create elegant, functional spaces with custom glass partitions for offices and homes throughout the DMV region."
        features={[
          "Frameless and framed glass partition systems",
          "Office dividers and conference rooms",
          "Sliding glass door partitions",
          "Frosted and decorative glass options",
          "Acoustic glass for sound insulation",
          "Custom designs for any space",
          "Commercial and residential applications",
          "Professional installation with minimal disruption",
        ]}
        content={
          <>
            <p>
              Glass Genius designs and installs custom glass partitions and 
              dividers for commercial and residential spaces throughout Washington D.C., 
              Northern Virginia, and Maryland. Our glass partition solutions create 
              open, light-filled environments while providing necessary separation 
              and privacy.
            </p>
            <p className="mt-4">
              We offer a variety of glass partition systems, including frameless 
              glass walls, aluminum framed partitions, sliding glass doors, and 
              fixed panel systems. Our glass options include clear, frosted, 
              tinted, and decorative patterns to achieve your desired level of 
              privacy and aesthetic appeal.
            </p>
            <p className="mt-4">
              For commercial spaces, our glass partitions create modern office 
              environments that foster collaboration while maintaining acoustic 
              privacy. In homes, glass partitions can separate living areas while 
              preserving sightlines and light flow. Our team handles every aspect 
              of your partition project, from design and measurements to 
              professional installation throughout the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
