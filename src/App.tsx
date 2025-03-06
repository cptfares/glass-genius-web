
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Preload from "@/components/seo/Preload";
import Index from "./pages/Index";
import About from "./pages/About";
import EmergencyServices from "./pages/EmergencyServices";
import Residential from "./pages/Residential";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

// Import service pages
import GlassRepair from "./pages/services/GlassRepair";
import WindowReplacement from "./pages/services/WindowReplacement";
import ShowerEnclosures from "./pages/services/ShowerEnclosures";

// Import the ServiceTemplate to create other service pages
import ServiceTemplate from "./pages/services/ServiceTemplate";

const queryClient = new QueryClient();

// Define content for other service pages
const servicePages = [
  {
    path: "storefront-glass",
    props: {
      title: "Storefront Glass Solutions",
      description: "Professional storefront glass installation and repair for businesses in Reston and surrounding areas.",
      features: [
        "Custom storefront design and installation",
        "Emergency storefront glass repair",
        "Safety and security glass options",
        "ADA-compliant door systems",
        "Energy-efficient glass solutions",
        "Aluminum framing systems",
        "Professional installation and service"
      ],
      content: (
        <>
          <p>
            Make a strong first impression with high-quality storefront glass solutions from Glass Genius. We provide custom storefront systems designed to enhance your business's visibility, security, and energy efficiency.
          </p>
          <p className="mt-4">
            Our storefront services include new installations, renovations, and emergency repairs. We work with various glass types and framing systems to create the perfect storefront for your commercial property.
          </p>
          <p className="mt-4">
            Whether you need a single door replaced or a complete storefront system installed, our team delivers exceptional results with minimal disruption to your business operations.
          </p>
        </>
      )
    }
  },
  {
    path: "glass-doors",
    props: {
      title: "Glass Door Installation & Repair",
      description: "Beautiful and functional glass doors for residential and commercial properties by Glass Genius.",
      features: [
        "Sliding glass door systems",
        "Hinged glass doors",
        "Folding and stacking door systems",
        "Interior glass office doors",
        "Custom hardware options",
        "Energy-efficient glass",
        "Expert installation and service"
      ],
      content: (
        <>
          <p>
            Enhance your property with elegant glass doors that combine functionality, durability, and style. Glass Genius offers a wide range of glass door solutions for homes and businesses throughout Reston and surrounding areas.
          </p>
          <p className="mt-4">
            Our glass door services include sliding doors, hinged doors, folding systems, and custom designs. We work with various glass types, hardware options, and framing materials to create doors that perfectly complement your space.
          </p>
          <p className="mt-4">
            From initial consultation to final installation, our team ensures a smooth process and exceptional results. Trust Glass Genius for beautiful glass doors that transform your property.
          </p>
        </>
      )
    }
  },
  // Add more service pages here as needed
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Preload />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/emergency" element={<EmergencyServices />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Service pages */}
            <Route path="/services/glass-repair" element={<GlassRepair />} />
            <Route path="/services/window-replacement" element={<WindowReplacement />} />
            <Route path="/services/shower-enclosures" element={<ShowerEnclosures />} />
            
            {/* Generate routes for other service pages */}
            {servicePages.map(({ path, props }) => (
              <Route 
                key={path} 
                path={`/services/${path}`} 
                element={<ServiceTemplate {...props} />} 
              />
            ))}
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
