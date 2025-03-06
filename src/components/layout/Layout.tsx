
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

      {/* Global styles */}
      <style jsx global>{`
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
