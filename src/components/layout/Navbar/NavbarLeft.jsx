// src/components/layout/Navbar/NavbarLeft.jsx

export default function NavbarLeft({ onMenuClick }) {
  return (
    <div className="d-flex align-items-center gap-3">
      {/* Mobile menu button */}
      <button
        className="btn btn-outline-secondary d-md-none"
        onClick={onMenuClick}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Page title */}
      <div>
        <h5 className="mb-0 fw-bold">Real Estate Dashboard</h5>
        <small className="text-muted">Manage properties & clients</small>
      </div>
    </div>
  );
}
