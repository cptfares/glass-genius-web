
import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function TableTops() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Table Tops",
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
        title="Custom Glass Table Tops | Glass Genius"
        description="Protect and beautify your furniture with custom glass table tops from Glass Genius. Serving the DMV (D.C., Maryland, Virginia) region with quality glass solutions."
        canonicalUrl="/services/table-tops"
        schema={schema}
      />
      <ServiceTemplate
        title="Custom Glass Table Tops"
        imageUrl="/placeholder.svg"
        description="Protect and enhance your furniture with custom glass table tops designed and installed throughout the DMV region."
        features={[
          "Custom cut to any size or shape",
          "Variety of glass thicknesses available",
          "Beveled, polished, or flat edge options",
          "Clear, frosted, or tinted glass options",
          "Tempered glass for safety and durability",
          "Protection for wood furniture",
          "Easy cleaning and maintenance",
        ]}
        content={
          <>
            <p>
              Add elegance and protection to your furniture with custom glass 
              table tops from Glass Genius. We design and fabricate glass tops 
              for dining tables, coffee tables, end tables, desks, and more 
              across Washington D.C., Maryland, and Northern Virginia.
            </p>
            <p className="mt-4">
              Our glass table tops are available in a variety of thicknesses, 
              with different edge treatments including flat polished, beveled, 
              and pencil polish. We can create custom shapes, including round, 
              oval, rectangular, or even irregular designs to match your 
              specific furniture.
            </p>
            <p className="mt-4">
              Each glass table top is precisely measured and cut to ensure a 
              perfect fit. We offer tempered glass options for added safety 
              and durability. A custom glass top not only enhances the appearance 
              of your furniture but also provides protection against spills, 
              scratches, heat marks, and other damage, extending the life of 
              your valuable pieces throughout the DMV area.
            </p>
          </>
        }
      />
    </>
  );
}
