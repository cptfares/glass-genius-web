import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function GlassRepair() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Storefront Glass Installation",
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
      description: "Free estimates for storefront glass installation",
    },
  };

  return (
    <>
      <Seo
        title="Storefront Glass Installation | Liberty Glass and Doors"
        description="Professional storefront glass installation services for businesses in Washington DC, Maryland, and Virginia. Call now for a free estimate!"
        canonicalUrl="/services/storefront-glass"
        schema={schema}
      />
      <ServiceTemplate
        title="Storefront & Entrances Installation"
        description="Expert installation of storefront doors, windows, and curtain wall systems across the DMV region. Call now for a free estimate!"
        imageUrl="/IMG_8610.png"
        features={[
          "Storefront Doors & Windows",
          "Exterior Curtain Wall System Installation",
          "Office Glass Doors",
          "Automatic Sliding & Swing Doors",
          "Door Closures, Hinges, Panic Exit Device & Automatic Operators",
          "Bullet Proof Glass & Security Glass Installation",
          "Custom Aluminum Framing Systems",
        ]}
        content={
          <>
            <section>
              <h2 className="text-xl font-bold mt-6">
                High-Quality Storefront Glass Solutions
              </h2>
              <p className="mt-4">
                Liberty Glass and Doors provides top-notch glass door
                installations for various businesses in Virginia, Washington DC,
                and Maryland. Our professional installers ensure that each glass
                panel is perfectly fitted within its frame, offering both
                aesthetic appeal and functional durability.
              </p>
              <p className="mt-4">
                Our storefront glass installations not only enhance business
                visibility but also provide security and weather resistance. We
                specialize in aluminum-framed glass solutions, automatic doors,
                and energy-efficient glass options tailored to your needs.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-xl font-bold">Our Specialties</h2>
              <ul className="list-disc pl-5 mt-2">
                <li>Aluminum Storefront Installation</li>
                <li>Commercial Glass Doors & Entrances</li>
                <li>Bifold Doors</li>
                <li>Curtain Wall Glazing</li>
                <li>Bullet Proof Glass</li>
                <li>Metal Doors Replacement</li>
                <li>Automatic Door Installation</li>
                <li>Storefront Doors Replacement</li>
                <li>Door Hinges, Pivots, Closers & Panic Exit Devices</li>
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-xl font-bold">Get a Free Estimate</h2>
              <p className="mt-4">
                If you have a cracked, broken, or outdated glass storefront, our
                experienced team is ready to assist you. We offer 24/7 emergency
                glass replacement services to ensure your business remains
                secure and visually appealing.
              </p>
            </section>
          </>
        }
      />
    </>
  );
}
