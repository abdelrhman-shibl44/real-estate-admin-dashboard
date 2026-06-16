export default function NavbarLeft({ onMenuClick }) {
  return (
    <div className="d-flex align-items-center gap-2">
      {/* Mobile menu button */}
      <button
        className="btn btn-outline-secondary d-md-none"
        onClick={onMenuClick}
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Title (simplified on mobile) */}
      <div>
        <h6 className="mb-0 fw-bold">Dashboard</h6>
        <small className="text-muted d-none d-md-block">
          Manage properties & clients
        </small>
      </div>
    </div>
  );
}
