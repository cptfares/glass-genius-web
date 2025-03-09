import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function GlassRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Commercial Door Repair & Replacement",
    provider: {
      "@type": "LocalBusiness",
      name: "Liberty Glass and Doors",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Washington DC, Maryland & Virginia",
        addressRegion: "DC, MD, VA",
        addressCountry: "US",
      },
      telephone: "(202) 550-1101",
    },
    offers: {
      "@type": "Offer",
      price: "0.00",
      priceCurrency: "USD",
      description: "Free estimates for commercial door repair and replacement",
    },
  };

  return (
    <>
      <Seo
        title="Commercial Door Repair & Replacement | Liberty Glass and Doors"
        description="Expert commercial door repair and replacement services in Washington DC, Maryland, and Virginia. Call now for a free estimate!"
        canonicalUrl="/services/commercial-door-repair"
        schema={schema}
      />
      <ServiceTemplate
        title="Commercial Door Repair & Replacement"
        description="Reliable repair and replacement services for storefront doors, office glass doors, and automatic sliding & swing doors. Call now for a free estimate!"
        imageUrl="/IMG_6549.png"
        features={[
          "Storefront Door Repair & Replacement",
          "Office Glass Doors",
          "Automatic Sliding & Swing Doors",
          "Storefront System Installation",
          "Door Closures, Hinges, Panic Exit Devices",
          "Fire Rated Metal Doors",
          "Same-Day Glass Replacement",
        ]}
        content={
          <>
            <section>
              <h2 className="text-xl font-bold mt-6">
                Professional Commercial Door Services
              </h2>
              <p className="mt-4">
                At Liberty Glass and Doors, we specialize in commercial door
                repair and replacement services for businesses across the DMV
                region. Whether you need a quick glass replacement or a full
                storefront system installation, our team is here to help.
              </p>
              <p className="mt-4">
                Our highly trained installers ensure each door is perfectly
                aligned and secure, offering safety, energy efficiency, and
                aesthetic appeal. We handle everything from broken hinges and
                pivots to full glass panel replacements.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-xl font-bold">Our Specialties</h2>
              <ul className="list-disc pl-5 mt-2">
                <li>Commercial Doors Repair/Replacement</li>
                <li>Storefront System Installation</li>
                <li>Entrance Doors Repairs & Installation</li>
                <li>Fire Rated Metal Doors</li>
                <li>Automatic & Swing Doors</li>
                <li>Door Closers & Panic Exit Devices</li>
                <li>Door Hinges/Pivot Repair</li>
                <li>Same-Day Door Glass Replacement</li>
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-xl font-bold">Get a Free Estimate</h2>
              <p className="mt-4">
                If your storefront door is cracked, shattered, or needs urgent
                repair, our experienced technicians provide 24/7 emergency glass
                replacement services to keep your business secure.
              </p>
            </section>
          </>
        }
      />
    </>
  );
}
