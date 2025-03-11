
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Preload from "@/components/seo/Preload";
import ScrollToTop from "@/components/common/ScrollToTop";

import Index from "./pages/Index";
import About from "./pages/About";
import EmergencyServices from "./pages/EmergencyServices";
import Residential from "./pages/Residential";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Commercial from "./pages/Commercial";
import Services from "./pages/Services";

import GlassRepair from "./pages/services/GlassRepair";
import WindowReplacement from "./pages/services/WindowReplacement";
import ShowerEnclosures from "./pages/services/ShowerEnclosures";
import StorefrontGlass from "./pages/services/StorefrontGlass";
import GlassDoors from "./pages/services/GlassDoors";
import MirrorInstallation from "./pages/services/MirrorInstallation";
import TableTops from "./pages/services/TableTops";
import GlassRailings from "./pages/services/GlassRailings";
import WindowTinting from "./pages/services/WindowTinting";
import InsulatedGlass from "./pages/services/InsulatedGlass";
import EmergencyRepair from "./pages/services/EmergencyRepair";
import CommercialGlass from "./pages/services/CommercialGlass";
import ResidentialGlass from "./pages/services/ResidentialGlass";
import SecurityGlass from "./pages/services/SecurityGlass";
import GlassPartitions from "./pages/services/GlassPartitions";
import FoggyGlassReplacement from "./pages/services/FoggyGlassReplacement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Preload />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/emergency" element={<EmergencyServices />} />
            <Route path="/residential" element={<Residential />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            
            <Route path="/services/glass-repair" element={<GlassRepair />} />
            <Route path="/services/window-replacement" element={<WindowReplacement />} />
            <Route path="/services/storefront-glass" element={<StorefrontGlass />} />
            <Route path="/services/glass-doors" element={<GlassDoors />} />
            <Route path="/services/mirror-installation" element={<MirrorInstallation />} />
            <Route path="/services/shower-enclosures" element={<ShowerEnclosures />} />
            <Route path="/services/table-tops" element={<TableTops />} />
            <Route path="/services/glass-railings" element={<GlassRailings />} />
            <Route path="/services/window-tinting" element={<WindowTinting />} />
            <Route path="/services/insulated-glass" element={<InsulatedGlass />} />
            <Route path="/services/emergency-repair" element={<EmergencyRepair />} />
            <Route path="/services/commercial-glass" element={<CommercialGlass />} />
            <Route path="/services/residential-glass" element={<ResidentialGlass />} />
            <Route path="/services/security-glass" element={<SecurityGlass />} />
            <Route path="/services/glass-partitions" element={<GlassPartitions />} />
            <Route path="/services/foggy-glass-replacement" element={<FoggyGlassReplacement />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
