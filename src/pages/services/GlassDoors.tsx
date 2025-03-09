
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function GlassDoors() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Door Installation",
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
        title="Custom Glass Door Installation | Glass Genius"
        description="Premium glass door installation services for residential and commercial properties throughout the DMV (D.C., Maryland, Virginia) region. Enhance your space with our custom glass door solutions."
        canonicalUrl="/services/glass-doors"
        schema={schema}
      />
      <ServiceTemplate
        title="Glass Door Installation"
        imageUrl="/slidingdoor.jpg"
        description="Elevate your property with custom glass door installations across the DMV region."
        features={[
          "Frameless glass doors",
          "Sliding glass door systems",
          "French-style glass doors",
          "Pivot glass doors",
          "Tempered safety glass options",
          "Custom hardware selections",
          "Interior and exterior applications",
        ]}
        content={
          <>
            <p>
              Glass Genius offers premium glass door installation services for both 
              residential and commercial properties throughout Washington D.C., Maryland, 
              and Northern Virginia. Our glass doors combine stunning aesthetics with 
              practical functionality, creating a seamless flow between spaces while 
              maximizing natural light.
            </p>
            <p className="mt-4">
              We offer a wide variety of glass door options, including sliding doors, 
              pivot doors, and frameless designs. All our glass doors are crafted using 
              high-quality tempered safety glass and precision hardware for smooth operation 
              and long-term durability in any DMV property.
            </p>
            <p className="mt-4">
              Our installation process begins with a thorough consultation to understand 
              your specific needs and space requirements. Our expert team then handles the 
              entire installation with precision and care, ensuring perfect alignment and 
              functionality. We also provide maintenance services to keep your glass doors 
              operating smoothly for years to come.
            </p>
          </>
        }
      />
    </>
  );
}
