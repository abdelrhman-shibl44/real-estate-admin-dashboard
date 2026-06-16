// src/components/layout/Sidebar/Sidebar.jsx
import SidebarLogo from "./SidebarLogo";
import SidebarNav from "./SidebarNav";
import SidebarUser from "./SidebarUser";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="d-md-none position-fixed top-0 start-0 w-100 h-100"
          style={{ background: "rgba(0,0,0,0.5)", zIndex: 999 }}
          onClick={onClose}
        />
      )}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <SidebarLogo onClose={onClose} />
        <SidebarNav onClose={onClose} />
        <SidebarUser />
      </div>
    </>
  );
}
