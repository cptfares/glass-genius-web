import React from "react";
import Layout from "@/components/layout/Layout";
import { Check, Phone, Award, Clock, Users, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Seo from "@/components/seo/Seo";

const About = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Glass Genius",
      description:
        "Expert glass solutions for residential and commercial properties in Reston, Virginia and surrounding areas.",
      logo: "/og-image.png",
      founder: "Glass Genius Team",
      foundingDate: "2010",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Reston",
        addressRegion: "VA",
        postalCode: "20190",
        addressCountry: "US",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+12409685060",
        contactType: "customer service",
        availableLanguage: "English",
      },
      areaServed:
        "The entire DMV (D.C., Maryland, Virginia) region, including Washington, D.C., Arlington, Alexandria, Fairfax, Loudoun County, Prince William, Montgomery County, Prince George's, Howard County, and more.",
    },
  };

  return (
    <Layout>
      <Seo
        title="About Glass Genius | Glass Repair & Installation in Reston, VA"
        description="Learn about Glass Genius, providing expert glass repair and installation services for residential and commercial properties in Reston, VA and surrounding areas."
        canonicalUrl="/about"
        schema={schema}
      />

      {/* Hero Section */}
      <div className="relative bg-brand-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/IMG_8354.png"
            alt="Glass Genius technicians working on a professional glass installation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/50"></div>
        </div>

        <div className="container relative z-10 px-4 py-20 mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            About Glass Genius
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Expert glass solutions for residential and commercial properties in
            Reston, Virginia and surrounding areas.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-16 mx-auto">
        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Story</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                Glass Genius was founded with a simple mission: to provide
                exceptional glass services with the highest level of workmanship
                and customer satisfaction. What began as a small mobile glass
                repair operation has grown into a trusted name in glass
                solutions throughout Reston and the surrounding Virginia areas.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We take pride in our ability to handle projects of all sizes,
                from emergency glass repairs to complex commercial
                installations. Our team of skilled technicians brings years of
                experience and a commitment to quality that sets us apart in
                today's competitive glass industry.
              </p>
              <p className="text-lg font-medium text-gray-800">
                "Our mission is to create happiness through our services."
              </p>
            </div>
            <div>
              <img
                src="/about.jpeg"
                alt="Glass Genius team at work"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Why Choose Glass Genius
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Award className="text-brand-blue h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Quality Craftsmanship
              </h3>
              <p className="text-gray-600">
                We use only premium materials and maintain the highest standards
                in our installations and repairs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Users className="text-brand-blue h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our technicians are highly trained professionals with years of
                experience in the glass industry.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Clock className="text-brand-blue h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Prompt Service</h3>
              <p className="text-gray-600">
                We respect your time and schedule, providing reliable and
                punctual service for every project.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 text-center">
              <div className="flex justify-center mb-4">
                <Smile className="text-brand-blue h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Customer Satisfaction
              </h3>
              <p className="text-gray-600">
                Your satisfaction is our priority, from the initial consultation
                to the completed project.
              </p>
            </div>
          </div>
        </div>

        {/* Our Services Overview */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Services</h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Glass Genius provides a comprehensive range of glass services for
            both residential and commercial properties.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Residential Glass</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Window repair and replacement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Shower doors and enclosures</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Glass doors and entryways</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Mirrors and decorative glass</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Glass tabletops and shelving</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/residential">Learn More</Link>
                </Button>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Commercial Glass</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Storefront glass and doors</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Office partitions and dividers</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Security glass installation</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Display cases and shelving</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="text-brand-blue h-5 w-5 mt-1 flex-shrink-0" />
                  <span>Glass railings and balustrades</span>
                </li>
              </ul>
              <div className="mt-6">
                <Button asChild variant="outline">
                  <Link to="/commercial">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="bg-brand-blue/10 p-6 rounded-lg border border-brand-blue/20">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Clock className="text-brand-blue h-5 w-5 flex-shrink-0" />
              <span>24/7 Emergency Services</span>
            </h3>
            <p className="text-gray-700 mb-4">
              Glass emergencies don't wait for business hours. That's why Glass
              Genius provides 24/7 emergency glass repair services. Whether it's
              a broken storefront window, shattered home glass, or any glass
              emergency, our team is ready to respond quickly.
            </p>
            <Button asChild variant="outline">
              <Link to="/emergency">Learn About Our Emergency Services</Link>
            </Button>
          </div>
        </div>

        {/* Service Areas */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Our Service Areas
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
    We proudly serve the entire DMV (D.C., Maryland, Virginia) region, including:

          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
    <div className="bg-gray-50 p-3 rounded-lg text-center">Washington, D.C.</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Arlington, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Alexandria, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Fairfax, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Loudoun County, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Prince William, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Montgomery County, MD</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Prince George's, MD</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Howard County, MD</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Reston, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Herndon, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Vienna, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Tysons, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Falls Church, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Ashburn, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Sterling, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Chantilly, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">McLean, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Oakton, VA</div>
    <div className="bg-gray-50 p-3 rounded-lg text-center">Great Falls, VA</div>
          </div>

          <p className="text-center text-gray-600">
            Don't see your area listed? Contact us to check if we service your
            location!
          </p>
        </div>

        {/* Call to Action */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">
            Ready to Work with Glass Genius?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today for a free consultation and estimate on your glass
            project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+12409685060"
              className="inline-flex items-center justify-center gap-2 py-3 px-6 bg-brand-blue text-white rounded-md font-medium hover:bg-brand-blue/90 transition-all-200"
            >
              <Phone size={18} />
              <span>+1 240-968-5060</span>
            </a>

            <Button asChild variant="outline">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
