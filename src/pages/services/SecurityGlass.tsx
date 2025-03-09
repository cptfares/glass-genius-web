import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function SecurityGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Foggy Glass Replacement",
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
        title="Foggy Glass Replacement | Liberty Glass and Doors"
        description="Affordable foggy glass repair and replacement services in Washington D.C., Maryland, and Virginia. Call now for a free quote! (202) 550-1101."
        canonicalUrl="/services/foggy-glass-replacement"
        schema={schema}
      />
      <ServiceTemplate
        title="Foggy Glass Replacement"
        imageUrl="/IMG_7398.png"
        description="Liberty Glass and Doors provides expert foggy glass repair and replacement services, restoring clarity and efficiency to your windows."
        features={[
          "Foggy window glass replacement",
          "Sliding window glass repair",
          "Dual and triple-pane glass restoration",
          "Sealed unit failure repair",
          "Energy-efficient glass solutions",
          "Residential and commercial services",
          "Custom glass replacement",
          "Professional installation and quick turnaround",
        ]}
        content={
          <>
            <p>
              Got foggy windows? Window seal failure is a common issue for aging
              insulated glass (dual or triple pane) in residential and
              commercial buildings. When the seal breaks, moisture seeps in,
              causing condensation and a foggy appearance.
            </p>
            <p className="mt-4">
              Liberty Glass and Doors specializes in restoring clarity and
              energy efficiency by replacing failed insulated glass units.
              Whether you need foggy glass repair for a sliding window or a full
              replacement for your home or office, our expert team provides
              top-tier service.
            </p>
            <p className="mt-4">
              We offer durable and energy-efficient glass replacement solutions
              tailored to your needs. Contact us today to restore the clarity of
              your windows!
            </p>
          </>
        }
      />
    </>
  );
}
