// src/components/layout/Sidebar/SidebarUser.jsx
export default function SidebarUser() {
  return (
    <div
      className="position-absolute bottom-0 start-0 end-0 p-3"
      style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
    >
      <div className="d-flex align-items-center gap-2">
        <div
          className="rounded-circle d-flex align-items-center 
          justify-content-center text-white fw-bold"
          style={{
            width: 36,
            height: 36,
            backgroundColor: "var(--secondary-color)",
            fontSize: 14,
          }}
        >
          A
        </div>
        <div>
          <div className="text-white" style={{ fontSize: 13 }}>
            Admin User
          </div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,0.5)" }}>
            admin@realestate.com
          </div>
        </div>
      </div>
    </div>
  );
}
