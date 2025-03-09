import React from "react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import { CheckCircle2, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Seo from "@/components/seo/Seo";

const CommercialGlass = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Commercial Glass Services",
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
    },
    serviceType: "Commercial Glass Installation and Repair",
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 38.9586,
        longitude: -77.357,
      },
      geoRadius: "32000",
    },
    description:
      "Expert commercial glass solutions for businesses in Reston and surrounding areas including storefront glass, office partitions, glass doors, and more.",
  };

  return (
    <Layout>
      <Seo
        title="Commercial Glass Services | Glass Genius Reston VA"
        description="Expert commercial glass solutions for businesses in Reston and surrounding areas including storefront glass, office partitions, glass doors, and more."
        canonicalUrl="/commercial"
        schema={schema}
      />

      <HeroSection
        title="Commercial Glass Solutions"
        subtitle="Expert glass solutions for your business - from storefronts to interior glass partitions"
        imageUrl="/IMG_8564.png"
      />

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Commercial Glass Services
            </h2>
            <p className="text-gray-600">
              Glass Genius provides expert commercial glass solutions for
              businesses in Reston and surrounding areas. We understand that
              your business's appearance and functionality matter, which is why
              we offer high-quality glass solutions tailored to your specific
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/IMG_8608.png"
                alt="Commercial glass installation for storefront"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Storefront Glass Solutions
              </h3>
              <p className="text-gray-600 mb-4">
                Make a lasting impression with our custom storefront glass
                solutions. We design and install attractive, durable, and secure
                storefront systems that enhance your business's visibility and
                appeal.
              </p>
              <p className="text-gray-600 mb-6">
                Our storefront services include tempered glass, insulated glass,
                aluminum framing, and custom entrance systems.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/services/storefront-glass">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div className="order-2 md:order-1">
              <h3 className="text-2xl font-bold mb-4">
                Office Glass Partitions
              </h3>
              <p className="text-gray-600 mb-4">
                Create modern, open, and functional office spaces with our glass
                partition systems. Glass partitions allow natural light to flow
                throughout your office while providing acoustic privacy and
                defined workspace boundaries.
              </p>
              <p className="text-gray-600 mb-6">
                We offer frameless glass walls, sliding door systems, and
                decorative glass options to match your office aesthetic.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/services/glass-partitions">Learn More</Link>
              </Button>
            </div>
            <div className="order-1 md:order-2">
              <img
                src="/office.jpeg"
                alt="Glass office partitions in modern workspace"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="/IMG_6549.png"
                alt="Commercial glass door installation"
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Commercial Glass Doors
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance your business entrance with our stylish and secure
                commercial glass doors. We offer a variety of options including
                automatic doors, manual doors, sliding systems, and
                ADA-compliant solutions.
              </p>
              <p className="text-gray-600 mb-6">
                All our commercial doors are built with safety, durability, and
                aesthetics in mind.
              </p>
              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/services/glass-doors">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Our Commercial Services</h2>
            <p className="text-gray-600">
              We offer a comprehensive range of commercial glass solutions to
              meet your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Storefront Glass Installation",
              "Emergency Glass Repair",
              "Glass Office Partitions",
              "Commercial Glass Doors",
              "Security Glass Solutions",
              "Energy-Efficient Glass",
              "Glass Railings",
              "Glass Curtain Walls",
              "Tempered & Safety Glass",
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-brand-blue h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span className="font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-brand-dark text-white">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">
                Why Choose Glass Genius?
              </h2>
              <p className="text-white/80 mb-6">
                We're committed to providing exceptional commercial glass
                services with a focus on quality, reliability, and customer
                satisfaction.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-brand-blue shrink-0 mt-1"
                    size={18}
                  />
                  <span>Expert Commercial Installers</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-brand-blue shrink-0 mt-1"
                    size={18}
                  />
                  <span>Quality Materials</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-brand-blue shrink-0 mt-1"
                    size={18}
                  />
                  <span>Fast Response Times</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-brand-blue shrink-0 mt-1"
                    size={18}
                  />
                  <span>Competitive Pricing</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-brand-blue shrink-0 mt-1"
                    size={18}
                  />
                  <span>Fully Insured & Licensed</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2
                    className="text-brand-blue shrink-0 mt-1"
                    size={18}
                  />
                  <span>Satisfaction Guaranteed</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+12409685060"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-brand-dark rounded-md font-medium hover:bg-gray-100 transition-colors"
                >
                  <Phone size={18} />
                  <span>+1 240-968-5060</span>
                </a>

                <Button
                  asChild
                  className="bg-brand-blue hover:bg-brand-blue/90"
                >
                  <Link to="/contact">Request a Quote</Link>
                </Button>
              </div>
            </div>

            <div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="text-brand-blue h-8 w-8" />
                  <h3 className="text-xl font-bold">
                    Commercial Glass Experts
                  </h3>
                </div>
                <p className="mb-6">
                  Glass Genius has been serving commercial clients in Reston and
                  surrounding areas for years. We understand the unique
                  challenges and requirements of commercial glass installations
                  and repairs.
                </p>
                <p className="mb-6">
                  Our team works efficiently to minimize disruption to your
                  business operations while delivering exceptional results that
                  enhance your property's appearance, functionality, and
                  security.
                </p>
                <p>
                  Contact us today to discuss your commercial glass needs and
                  receive a free, no-obligation quote.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CommercialGlass;
