
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-[72px] md:pt-[128px]">
        {children}
      </main>
      <Footer />

      {/* Sticky Phone Button */}
      <a 
        href="tel:+12409685060" 
        className="fixed bottom-6 right-6 bg-brand-blue text-white p-3 rounded-full shadow-lg z-50 hover:bg-brand-blue/90 transition-all duration-200"
        aria-label="Call us now"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      <style>{`
        .nav-link {
          font-weight: 500;
          font-size: 14px;
          color: #1d2737;
          position: relative;
          transition: color 0.2s;
          padding: 0.5rem 0;
        }
        
        .nav-link:hover, .nav-link.active {
          color: #4a9fd8;
        }
        
        .nav-link.active:after {
          content: '';
          position: absolute;
          bottom: -3px;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #4a9fd8;
        }
      `}</style>
    </div>
  );
};

export default Layout;
