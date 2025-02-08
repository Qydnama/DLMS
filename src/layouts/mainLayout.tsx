import React from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer"; 

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-goodGray">
      {/* Header */}
      <Header className="w-full h-13 bg-white"  />

      {/* Main Content */}
      <main className="w-full px-4 flex-grow pt-[80px] pb-[40px] max-w-screen-xl mx-auto">{children}</main>

      {/* Footer*/}
      <Footer className="px-4 max-w-screen-xl" />
    </div>
  );
};
