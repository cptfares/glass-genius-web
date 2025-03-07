
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import StickyPhoneButton from "../common/StickyPhoneButton";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Adding padding-top to account for the fixed header */}
      <main className="flex-grow pt-[148px] md:pt-[144px]">{children}</main>
      <Footer />
      <StickyPhoneButton />
    </div>
  );
};

export default Layout;
