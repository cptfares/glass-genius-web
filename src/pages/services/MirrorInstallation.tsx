
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function MirrorInstallation() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Mirror Installation",
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
        title="Custom Mirror Installation Services | Glass Genius"
        description="Enhance your home or business with custom mirrors installed by Glass Genius. We serve the entire DMV (D.C., Maryland, Virginia) region with professional mirror solutions."
        canonicalUrl="/services/mirror-installation"
        schema={schema}
      />
      <ServiceTemplate
        title="Custom Mirror Installation"
        imageUrl="/img6.jpeg"
        description="Enhance your home or business with custom mirrors installed by Glass Genius throughout the DMV region."
        features={[
          "Custom-cut mirrors for any space",
          "Beveled edge options for added elegance",
          "Framed and frameless designs",
          "Wall-to-wall mirrors for gyms and dance studios",
          "Vanity and bathroom mirrors with installation",
          "Antique and tinted mirror options",
          "Safe and secure mounting techniques",
        ]}
        content={
          <>
            <p>
              Glass Genius offers professional mirror installation services for both
              residential and commercial properties across Washington D.C., Northern Virginia, 
              and Maryland. Our custom mirrors are designed to enhance the beauty and 
              functionality of any space, from bathroom vanities to full gym walls.
            </p>
            <p className="mt-4">
              We work with you to select the perfect mirror style, size, and 
              installation method for your specific needs. Our options include 
              beveled edges, custom shapes, antique finishes, and framed or 
              frameless designs to complement your interior decor.
            </p>
            <p className="mt-4">
              Our experienced technicians ensure that every mirror is precisely 
              measured, carefully cut, and professionally installed with proper 
              mounting hardware. We understand the importance of secure installation, 
              especially for larger mirrors, and take every precaution to ensure 
              safety and longevity for homes and businesses throughout the DMV region.
            </p>
          </>
        }
      />
    </>
  );
}
