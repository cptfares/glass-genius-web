
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
      <main className="flex-grow">{children}</main>
      <Footer />
      <StickyPhoneButton />
    </div>
  );
};

export default Layout;
