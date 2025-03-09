import { Check, Building2, Home, Clock, Phone, PlayCircle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ServiceCard from "@/components/home/ServiceCard";
import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Seo from "@/components/seo/Seo";
import VideoSection from "@/components/home/VideoSection";

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Glass Genius",
    image: "/og-image.png",
    url: "https://glassgenius.com",
    telephone: "+12409685060",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Reston",
      addressRegion: "VA",
      postalCode: "20190",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.9586,
      longitude: -77.357,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/glassgenius",
      "https://twitter.com/glassgenius",
    ],
    priceRange: "$$",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 38.9586,
        longitude: -77.357,
      },
      geoRadius: "80000",
    },
  };

  return (
    <Layout>
      <Seo
        title="Glass Genius | Professional Glass Repair & Installation in DMV Region"
        description="Glass Genius provides expert glass repair and installation services throughout the DMV (D.C., Maryland, Virginia) region. Commercial and residential solutions with free estimates."
        canonicalUrl="/"
        schema={schema}
      />

      {/* Hero Section */}
      <HeroSection
        title="Professional Glass Repair & Installation"
        subtitle="Glass Genius provides expert glass repair and installation services throughout the DMV (D.C., Maryland, Virginia) region. Commercial and residential solutions with free estimates."
      />

      {/* Services Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Glass Services
            </h2>
            <p className="text-gray-600">
              We offer a comprehensive range of glass repair and installation
              services for both commercial and residential properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Commercial Glass"
              description="Expert solutions for storefronts, office partitions, entry systems, and more for your business."
              icon={<Building2 size={24} />}
              link="/commercial"
            />

            <ServiceCard
              title="Residential Glass"
              description="Custom glass solutions for homes including windows, doors, shower enclosures, and mirrors."
              icon={<Home size={24} />}
              link="/residential"
            />

            <ServiceCard
              title="24/7 Emergency Services"
              description="Immediate response for glass emergencies any time of day or night."
              icon={<Clock size={24} />}
              link="/emergency"
            />
          </div>

          <div className="text-center mt-10">
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* About Preview */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 animate-fade-up">
              <h2 className="text-3xl font-bold mb-4">About Glass Genius</h2>
              <p className="text-gray-600 mb-6">
                Glass Genius provides an excellent mobile service to meet all
                your glass doors and windows needs. Our continued dedication to
                providing quality services with the highest level of workmanship
                and customer service is what sets us apart in today's
                competitive glass industry.
              </p>
              <p className="text-gray-600 mb-6">
                No job is too big or too small for us.
              </p>
              <p className="text-gray-700 font-medium mb-8">
                Our mission is to create happiness through our services.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Quality Workmanship</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Expert Technicians</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Mobile Service</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Prompt Response</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Free Estimates</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="text-brand-blue shrink-0 mt-1" size={18} />
                  <span className="text-gray-700">Competitive Pricing</span>
                </div>
              </div>

              <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/img1.jpeg"
                alt="Glass repair technicians working on a window installation project"
                className="rounded-lg shadow-md w-full h-full object-cover max-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-dark relative">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png"
            alt="Glass repair service background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/70"></div>
        </div>

        <div className="container px-4 mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Need Expert Glass Services?
              </h2>
              <p className="text-white/80 mb-8">
                Contact us today for a free estimate. We provide professional
                glass repair and installation services for both commercial and
                residential properties throughout the DMV (D.C., Maryland, Virginia) region.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="tel:+12409685060"
                  className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-white text-brand-dark rounded-md font-medium hover:bg-gray-100 transition-all-200"
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

              <p className="text-white/80">
                Serving throughout the DMV region, including Washington D.C., Northern Virginia (Arlington, Alexandria, Fairfax, Loudoun, Prince William), 
                and Maryland (Montgomery, Prince George's, Howard). We also serve Reston, Herndon, Vienna, Tysons, Falls Church, Ashburn, Sterling, Chantilly, and more.
              </p>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
