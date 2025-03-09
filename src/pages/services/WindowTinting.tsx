
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function WindowTinting() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Window Tinting",
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
        title="Professional Window Tinting Services | Glass Genius"
        description="Enhance privacy, reduce glare, and improve energy efficiency with professional window tinting by Glass Genius. Serving the DMV (D.C., Maryland, Virginia) region."
        canonicalUrl="/services/window-tinting"
        schema={schema}
      />
      <ServiceTemplate
        title="Professional Window Tinting"
        imageUrl="/placeholder.svg"
        description="Enhance privacy, reduce glare, and improve energy efficiency with professional window tinting services throughout the DMV region."
        features={[
          "Residential and commercial applications",
          "UV protection to prevent fading of furniture and flooring",
          "Heat rejection for improved comfort and energy savings",
          "Glare reduction for better visibility",
          "Enhanced privacy while maintaining views",
          "Security film options for added protection",
          "Professional application with manufacturer warranties",
        ]}
        content={
          <>
            <p>
              Glass Genius provides professional window tinting services for 
              homes and businesses across Washington D.C., Northern Virginia, and Maryland. 
              Our high-quality window films offer multiple benefits, including 
              UV protection, heat rejection, glare reduction, and enhanced privacy.
            </p>
            <p className="mt-4">
              We offer a variety of window film options to suit your specific 
              needs. Our solar control films help reduce heat and energy costs, 
              while decorative films provide privacy without sacrificing natural 
              light. Security films add an extra layer of protection, helping to 
              hold glass together in case of breakage.
            </p>
            <p className="mt-4">
              Our professional installation ensures a perfect fit with no 
              bubbles or peeling. Window films not only improve comfort but can 
              also significantly reduce energy costs by minimizing heat gain in 
              summer and heat loss in winter. With proper installation and 
              maintenance, our window films provide lasting benefits for 
              properties throughout the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
