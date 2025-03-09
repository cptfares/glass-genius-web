import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function TableTops() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Partitions",
    provider: {
      "@type": "LocalBusiness",
      name: "Liberty Glass and Doors",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington D.C.",
        addressRegion: "DC",
        postalCode: "20001",
        addressCountry: "US",
      },
      telephone: "+12025501101",
    },
    areaServed: "Washington D.C., Maryland, Virginia",
  };

  return (
    <>
      <Seo
        title="Frameless Glass Wall Partitions | Liberty Glass and Doors"
        description="Enhance your home or office with stylish and functional frameless glass wall partitions. Call now for a free quote! (202) 550-1101."
        canonicalUrl="/services/glass-partitions"
        schema={schema}
      />
      <ServiceTemplate
        title="Frameless Glass Wall Partitions"
        imageUrl="/IMG_8354.png"
        description="Liberty Glass and Doors provides premium glass wall partitions and dividers, offering stylish solutions for both residential and commercial spaces."
        features={[
          "Frameless and framed glass partition systems",
          "Glass wall dividers and custom glass doors",
          "Office partitions and conference room enclosures",
          "Sliding and moveable glass wall systems",
          "Frosted and decorative glass options",
          "Acoustic glass for sound insulation",
          "Commercial and residential installations",
          "Professional installation with minimal disruption",
        ]}
        content={
          <>
            <p>
              If you want to create an open and modern look for your space while
              maintaining separation, glass wall partitions are the perfect
              solution. Liberty Glass and Doors specializes in high-quality
              glass partition installations for homes and offices.
            </p>
            <p className="mt-4">
              Our glass partition solutions help businesses create stylish,
              functional office spaces that enhance collaboration while
              maintaining privacy. In residential settings, they provide elegant
              room divisions without blocking natural light.
            </p>
            <p className="mt-4">
              We offer a variety of glass options, including clear, frosted, and
              decorative designs, ensuring the perfect balance between openness
              and privacy. Our moveable glass wall systems also provide
              flexibility for spaces that require adaptable layouts.
            </p>
          </>
        }
      />
    </>
  );
}
