import ServiceTemplate from "./ServiceTemplate";

export default function ShowerEnclosures() {
  return (
    <ServiceTemplate
      title="Custom Shower Enclosures & Doors"
      imageUrl="/image2.jpeg"
      description="Transform your bathroom with beautiful, custom shower enclosures and doors from Glass Genius."
      features={[
        "Custom designs tailored to your space",
        "Frameless, semi-frameless, and framed options",
        "Wide selection of glass types and hardware",
        "Precise measurements and professional installation",
        "Water-tight seals and proper drainage consideration",
        "Easy maintenance and cleaning",
        "Durable materials for long-lasting beauty",
      ]}
      content={
        <>
          <p>
            Elevate your bathroom's aesthetics and functionality with custom
            shower enclosures and doors from Glass Genius. We design and install
            beautiful shower solutions that transform ordinary bathrooms into
            luxurious retreats.
          </p>
          <p className="mt-4">
            Our shower glass experts work with you to create the perfect
            enclosure for your space, whether you prefer a minimalist frameless
            design, a semi-frameless style, or a traditional framed enclosure.
            We offer various glass options, including clear, frosted, patterned,
            and tinted, along with a selection of hardware finishes to
            complement your bathroom decor.
          </p>
          <p className="mt-4">
            Each shower enclosure is custom-measured, fabricated, and installed
            by our skilled technicians to ensure a perfect fit and proper
            function. With attention to detail and quality craftsmanship, Glass
            Genius delivers shower enclosures that combine beauty, durability,
            and value.
          </p>
        </>
      }
    />
  );
}
