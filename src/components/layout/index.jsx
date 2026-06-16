// src/components/layout/Layout.jsx
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <div className="main-content">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />
        <main className="p-4 flex-grow-1">
          <Outlet /> {/* Dashboard or Properties or Details */}
        </main>
      </div>

      <Footer />
    </div>
  );
}
