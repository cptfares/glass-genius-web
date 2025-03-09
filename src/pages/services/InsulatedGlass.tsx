
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function InsulatedGlass() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Insulated Glass Units",
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
        title="Energy-Efficient Insulated Glass Solutions | Glass Genius"
        description="Improve your property's energy efficiency with insulated glass units from Glass Genius. Serving the DMV (D.C., Maryland, Virginia) region with quality glass solutions."
        canonicalUrl="/services/insulated-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Energy-Efficient Insulated Glass Units"
        imageUrl="/placeholder.svg"
        description="Improve your property's energy efficiency and comfort with high-quality insulated glass units throughout the DMV region."
        features={[
          "Dual and triple-pane insulated glass options",
          "Low-E coatings for enhanced energy efficiency",
          "Gas-filled units for improved insulation",
          "Noise reduction properties",
          "Custom sizes and shapes available",
          "Reduced condensation and improved comfort",
          "Professional installation and replacement services",
        ]}
        content={
          <>
            <p>
              Glass Genius specializes in energy-efficient insulated glass units 
              (IGUs) for residential and commercial properties throughout Washington D.C., 
              Northern Virginia, and Maryland. Our insulated glass solutions help 
              reduce energy costs while improving comfort and reducing outside noise.
            </p>
            <p className="mt-4">
              Insulated glass units consist of two or more panes of glass sealed 
              with a spacer and filled with air or insulating gas. We offer various 
              configurations, including dual and triple-pane options with Low-E 
              coatings that reflect heat while allowing light to pass through. 
              Argon or krypton gas fills further enhance thermal performance.
            </p>
            <p className="mt-4">
              Whether you need to replace failed insulated glass units or are 
              looking to upgrade your windows for better energy efficiency, our 
              team provides expert consultation, precise measurements, and 
              professional installation. Our insulated glass units not only 
              improve comfort but can significantly reduce heating and cooling 
              costs for properties across the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
