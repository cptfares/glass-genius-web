import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import Seo from "@/components/seo/Seo";

const portfolioProjects = [
  {
    title: "Custom Storefront Installation",
    category: "Commercial",
    description:
      "Complete storefront glass installation for a retail business in Reston, featuring tempered safety glass and aluminum framing.",
    image: "/storefront.jpeg",
  },
  {
    title: "Frameless Shower Enclosure",
    category: "Residential",
    description:
      "Elegant frameless shower enclosure with custom glass doors for a master bathroom renovation in Vienna.",
    image: "/shower.jpeg",
  },
  {
    title: "Office Partition Walls",
    category: "Commercial",
    description:
      "Glass partition walls for a modern office space in Tysons, creating separate meeting rooms while maintaining an open feel.",
    image: "/office.jpeg",
  },
  {
    title: "Sliding Glass Door System",
    category: "Residential",
    description:
      "Energy-efficient sliding glass door system installed for a patio entrance in McLean.",
    image: "/slidingdoor.jpg",
  },
  {
    title: "Restaurant Storefront Renovation",
    category: "Commercial",
    description:
      "Complete glass storefront renovation for a restaurant in Fairfax, enhancing curb appeal and energy efficiency.",
    image: "/restofront.jpg",
  },
  {
    title: "Custom Mirror Wall",
    category: "Residential",
    description:
      "Custom-designed mirror wall for a home gym in Great Falls, creating a sense of spaciousness and functionality.",
    image: "/gymmirror.jpg",
  },
];

const Portfolio = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: portfolioProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        image: project.image,
        creator: {
          "@type": "Organization",
          name: "Glass Genius",
        },
      },
    })),
  };

  return (
    <Layout>
      <Seo
        title="Glass Project Portfolio | Glass Genius in Reston, VA"
        description="Explore our completed glass projects for both residential and commercial clients throughout Reston and surrounding areas."
        canonicalUrl="/portfolio"
        schema={schema}
      />

      {/* Hero Section */}
      <div className="relative bg-brand-dark">
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            src="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png"
            alt="Showcase of completed glass installation projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-dark/50"></div>
        </div>

        <div className="container relative z-10 px-4 py-20 mx-auto text-center text-white">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Explore our completed glass projects for both residential and
            commercial clients throughout Reston and surrounding areas.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="container px-4 py-16 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Below are some of our recent glass installation and repair
              projects. Each represents our commitment to quality craftsmanship
              and customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-brand-blue/10 text-brand-blue rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonials Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "The Glass Genius team was extremely professional and
                  efficient. They replaced our storefront glass ahead of
                  schedule and with impeccable quality. Highly recommend their
                  services!"
                </p>
                <div>
                  <p className="font-semibold">Robert Johnson</p>
                  <p className="text-sm text-gray-500">
                    Business Owner, Reston
                  </p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic mb-4">
                  "We love our new shower enclosure! The design consultation was
                  helpful, and the installation was quick and clean. Glass
                  Genius transformed our bathroom."
                </p>
                <div>
                  <p className="font-semibold">Lisa Carpenter</p>
                  <p className="text-sm text-gray-500">Homeowner, Vienna</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-brand-blue/10 p-8 rounded-lg text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-8">
              Contact us today to discuss your glass needs and get a free
              estimate.
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
      </div>
    </Layout>
  );
};

export default Portfolio;
