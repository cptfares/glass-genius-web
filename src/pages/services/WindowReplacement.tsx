
import ServiceTemplate from "./ServiceTemplate";

export default function WindowReplacement() {
  return (
    <ServiceTemplate
      title="Window Replacement & Installation"
      description="Upgrade your property with energy-efficient window replacement and installation services from Glass Genius."
      imageUrl="/img2.jpeg"
      features={[
        "Energy-efficient window options",
        "Variety of styles and designs available",
        "Professional installation by certified technicians",
        "Improved insulation and noise reduction",
        "Enhanced security features",
        "Potential energy cost savings",
        "Manufacturer warranties on products and installation",
      ]}
      content={
        <>
          <p>
            Glass Genius offers complete window replacement and installation
            services for homes and businesses throughout Reston, VA and
            surrounding areas. Whether you're looking to upgrade for energy
            efficiency, enhance your property's appearance, or replace damaged
            windows, our team delivers exceptional results.
          </p>
          <p className="mt-4">
            We provide a wide range of window options, including double-hung,
            casement, sliding, bay, and specialty windows. Our experts will help
            you select the perfect windows for your specific needs, considering
            factors like energy efficiency, style, and budget.
          </p>
          <p className="mt-4">
            Our professional installation ensures proper fit and function,
            maximizing the benefits of your new windows. With Glass Genius, you
            can count on improved comfort, reduced energy costs, and enhanced
            curb appeal for your property.
          </p>
        </>
      }
    />
  );
}
