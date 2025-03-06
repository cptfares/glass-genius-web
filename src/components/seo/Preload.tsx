
import { Helmet } from "react-helmet-async";

// This component preloads key resources to improve page load performance
const Preload = () => {
  return (
    <Helmet>
      {/* Preload critical fonts */}
      <link 
        rel="preload" 
        href="/fonts/inter-var.woff2" 
        as="font" 
        type="font/woff2" 
        crossOrigin="anonymous" 
      />
      
      {/* Preload critical images */}
      <link 
        rel="preload" 
        href="/lovable-uploads/97a20b32-0b00-444e-9b32-f920104ba35c.png" 
        as="image" 
        type="image/png" 
      />
      
      {/* DNS Prefetch */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      
      {/* Preconnect */}
      <link rel="preconnect" href="//fonts.googleapis.com" />
      <link rel="preconnect" href="//fonts.gstatic.com" />
    </Helmet>
  );
};

export default Preload;
