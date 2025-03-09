import ServiceTemplate from "./ServiceTemplate";
import Seo from "@/components/seo/Seo";

export default function WindowReplacement() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Repair",
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
      description: "Free estimates for glass repair services",
    },
  };

  return (
    <>
      <Seo
        title="Window Glass Repair in Washington DC, Maryland & Virginia"
        description="Same day residential and commercial window glass repair services. Get a free estimate today!"
        canonicalUrl="/services/glass-repair"
        schema={schema}
      />
      <ServiceTemplate
        title="Window Glass Repair & Replacement"
        description="Fast, reliable, and affordable glass repair services for residential and commercial properties. Call now for a free estimate!"
        imageUrl="/img1.jpeg"
        features={[
          "Same Day Glass Replacement",
          "Cracked & Foggy Glass Repair",
          "Double & Single Pane Glass Replacement",
          "24/7 Emergency Services",
          "Experienced & Local Glaziers",
          "Affordable Pricing & Free Estimates",
          "Serving Arlington, Alexandria, Springfield, Washington DC, & Fairfax",
        ]}
        content={
          <>
            <section>
              <h2 className="text-xl font-bold mt-6">
                Expert Glass Repair Services
              </h2>
              <p className="mt-4">
                Do you have cracked or fogged window glass in your home or
                business? Our skilled and local glaziers are available 24/7 to
                replace and repair your glass efficiently and affordably.
              </p>
            </section>

            <section className="mt-6">
              <h2 className="text-xl font-bold">Our Specialties</h2>
              <ul className="list-disc pl-5 mt-2">
                <li>Residential Window Glass Replacement</li>
                <li>Commercial Window Glass Replacement</li>
                <li>Cracked & Fogged Glass Repair</li>
                <li>Single Pane Glass Replacement</li>
                <li>Double Pane Glass Replacement</li>
                <li>Storefront Window Glass Replacement</li>
                <li>Safety Glass Installation</li>
              </ul>
            </section>

            <section className="mt-6">
              <h2 className="text-xl font-bold">Why Choose Us?</h2>
              <p className="mt-4">
                A small crack in your window glass can quickly escalate into a
                shattered mess. At Liberty Glass and Doors, we provide
                high-quality glass repair and replacement services to keep your
                property safe and looking great.
              </p>
              <p className="mt-4">
                Our team has earned a reputation as the most reliable emergency
                glass repair service in Virginia, Maryland, and Washington DC.
                With fast response times and affordable rates, we ensure
                customer satisfaction with every project.
              </p>
            </section>
          </>
        }
      />
    </>
  );
}
