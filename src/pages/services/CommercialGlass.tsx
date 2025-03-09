import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function CommercialGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Glass Replacement & Installation Services",
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
        title="Commercial Glass Replacement & Installation | Liberty Glass and Doors"
        description="Professional commercial glass replacement and installation services, including high-rise window glass replacement, storefront installation, and emergency glass repair."
        canonicalUrl="/services/commercial-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Commercial Glass Replacement & Installation Services"
        imageUrl="/IMG_8564.png"
        description="Liberty Glass and Doors provides top-tier commercial glass replacement and installation services, ensuring security and aesthetic appeal for businesses across Washington D.C., Maryland, and Virginia."
        features={[
          "High-rise window glass replacement",
          "Storefront installation",
          "Bullet-proof glass installation",
          "Curtain wall glass glazing",
          "Same-day glass replacement",
          "Tempered glass installation",
          "Emergency commercial glass repair",
          "Commercial window installation",
        ]}
        content={
          <>
            <p>
              Liberty Glass and Doors offers comprehensive commercial glass
              repair and installation services. Our team specializes in
              high-rise window replacements, storefront glass installations, and
              emergency repairs to maintain the security and aesthetics of your
              business.
            </p>
            <p className="mt-4">
              We understand that well-maintained doors and glass are crucial for
              any commercial building. From enhancing security to leaving a
              positive first impression, our services ensure your business
              remains safe and visually appealing.
            </p>
            <p className="mt-4">
              Our expert glaziers provide 24/7 emergency commercial glass
              replacement, ensuring fast and reliable service when you need it
              most. Whether it’s a cracked storefront window or a shattered
              glass door, we are here to help with prompt solutions.
            </p>
          </>
        }
      />
    </>
  );
}
