
import React from "react";
import Layout from "@/components/layout/Layout";
import { servicesList } from "@/components/layout/ServicesDropdown";
import ServiceCard from "@/components/home/ServiceCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import Seo from "@/components/seo/Seo";

// Map of service paths to their respective icons
const serviceIcons: Record<string, React.ReactNode> = {
  "/services/glass-repair": <i className="w-6 h-6 fas fa-tools" />,
  "/services/window-replacement": <i className="w-6 h-6 fas fa-window-maximize" />,
  "/services/storefront-glass": <i className="w-6 h-6 fas fa-store" />,
  "/services/glass-doors": <i className="w-6 h-6 fas fa-door-open" />,
  "/services/mirror-installation": <i className="w-6 h-6 fas fa-mirror" />,
  "/services/shower-enclosures": <i className="w-6 h-6 fas fa-shower" />,
  "/services/table-tops": <i className="w-6 h-6 fas fa-table" />,
  "/services/glass-railings": <i className="w-6 h-6 fas fa-grip-lines" />,
  "/services/window-tinting": <i className="w-6 h-6 fas fa-film" />,
  "/services/insulated-glass": <i className="w-6 h-6 fas fa-snowflake" />,
  "/services/emergency-repair": <i className="w-6 h-6 fas fa-exclamation-triangle" />,
  "/services/commercial-glass": <i className="w-6 h-6 fas fa-building" />,
  "/services/residential-glass": <i className="w-6 h-6 fas fa-home" />,
  "/services/security-glass": <i className="w-6 h-6 fas fa-shield-alt" />,
  "/services/glass-partitions": <i className="w-6 h-6 fas fa-columns" />,
};

// Service descriptions
const serviceDescriptions: Record<string, string> = {
  "/services/glass-repair": "Professional repair for all types of glass damage, from small cracks to complete replacements.",
  "/services/window-replacement": "Enhance energy efficiency and aesthetics with our premium window replacement services.",
  "/services/storefront-glass": "Custom storefront solutions designed to make your business stand out and stay secure.",
  "/services/glass-doors": "Beautiful and functional glass door options for residential and commercial properties.",
  "/services/mirror-installation": "Custom mirrors expertly installed to enhance the beauty and functionality of any space.",
  "/services/shower-enclosures": "Custom shower enclosures and doors to transform your bathroom into a luxurious retreat.",
  "/services/table-tops": "Custom glass table tops to protect furniture and add elegance to your space.",
  "/services/glass-railings": "Modern glass railing systems for staircases, balconies, and decks that combine safety and style.",
  "/services/window-tinting": "Window tinting services to reduce glare, increase privacy, and improve energy efficiency.",
  "/services/insulated-glass": "Energy-efficient insulated glass units to keep your property comfortable year-round.",
  "/services/emergency-repair": "24/7 emergency glass repair services when you need immediate assistance.",
  "/services/commercial-glass": "Comprehensive glass solutions for businesses, from storefronts to interior partitions.",
  "/services/residential-glass": "Complete glass services for homes, including windows, doors, showers, and custom projects.",
  "/services/security-glass": "Enhanced security glass options to protect your property and provide peace of mind.",
  "/services/glass-partitions": "Custom glass partitions for offices and commercial spaces to create functional, elegant divisions.",
};

export default function Services() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Glass Services",
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
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 38.9586,
        longitude: -77.3570,
      },
      geoRadius: "50 miles",
    },
  };

  return (
    <>
      <Seo
        title="Our Complete Glass Services | Glass Genius"
        description="Explore our full range of residential and commercial glass services including repair, replacement, custom installations, and emergency solutions."
        canonicalUrl="/services"
        schema={schema}
      />
      <Layout>
        <section className="py-12 bg-brand-light">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Glass Services</h1>
              <p className="text-lg text-gray-700">
                Professional glass solutions for residential and commercial properties in Reston
                and the surrounding areas. From emergency repairs to custom installations, our
                team delivers exceptional results.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container px-4 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesList.map((service) => (
                <ServiceCard
                  key={service.path}
                  title={service.name}
                  description={serviceDescriptions[service.path] || "Professional glass services tailored to your needs."}
                  icon={serviceIcons[service.path] || <i className="w-6 h-6 fas fa-glass" />}
                  link={service.path}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-brand-light">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Need Immediate Assistance?</h2>
                  <p className="mb-6">
                    Our team is available 24/7 for emergency glass repairs and services.
                    Contact us now for prompt, professional assistance.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                      <Link to="/emergency">Emergency Services</Link>
                    </Button>
                    <Button asChild variant="outline" className="gap-2">
                      <a href="tel:+12409685060">
                        <Phone size={16} />
                        <span>Call Now</span>
                      </a>
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Get a Free Quote</h2>
                  <p className="mb-6">
                    Interested in our services? Contact us today for a free,
                    no-obligation quote on your glass project.
                  </p>
                  <Button asChild size="lg" className="w-full bg-brand-blue hover:bg-brand-blue/90">
                    <Link to="/contact" className="flex items-center justify-center gap-2">
                      Request a Quote
                      <ArrowRight size={16} />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
