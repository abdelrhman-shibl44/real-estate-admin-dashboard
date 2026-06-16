// src/components/layout/Sidebar/SidebarLogo.jsx
export default function SidebarLogo({ onClose }) {
  return (
    <div
      className="d-flex align-items-center gap-2 p-3 mb-2"
      style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div
        className="rounded-2 d-flex align-items-center justify-content-center"
        style={{
          width: 38,
          height: 38,
          backgroundColor: "var(--secondary-color)",
        }}
      >
        <i className="bi bi-building text-white"></i>
      </div>

      <div>
        <div className="text-white fw-bold" style={{ fontSize: 14 }}>
          Real Estate
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
          Admin Dashboard
        </div>
      </div>

      {/* Close button mobile only */}
      <button
        className="btn btn-sm ms-auto d-md-none"
        style={{ color: "rgba(255,255,255,0.7)" }}
        onClick={onClose}
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
}
