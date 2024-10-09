"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar'ın tamamen gizlenmesi */}
      <div className={`${isSidebarOpen ? "block" : "hidden"}`}>
        <Sidebar isOpen={isSidebarOpen} />
      </div>
      <div className="flex-1">
        <Header toggleSidebar={toggleSidebar} />
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
