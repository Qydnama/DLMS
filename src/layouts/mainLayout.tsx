import React from "react";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer"; 

export const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header className="w-full fixed h-13 bg-white"  />

      {/* Main Content */}
      <main className="w-full px-4 flex-grow pt-[55px] max-w-screen-xl mx-auto">{children}</main>

      {/* Footer*/}
      <Footer className="mx-auto px-4 max-w-screen-xl" />
    </div>
  );
};
