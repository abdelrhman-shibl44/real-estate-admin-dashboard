export default function NavbarRight() {
  return (
    <div className="d-flex align-items-center gap-2 gap-md-3">
      {/* Search (hidden on small screens) */}
      <button className="btn btn-light d-none d-md-inline-flex">
        <i className="bi bi-search"></i>
      </button>

      {/* Notifications */}
      <button className="btn btn-light position-relative">
        <i className="bi bi-bell"></i>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          3
        </span>
      </button>

      {/* User: show only avatar on mobile */}
      <div className="d-flex align-items-center gap-2">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
          style={{
            width: 35,
            height: 35,
            backgroundColor: "var(--secondary-color)",
          }}
        >
          A
        </div>

        {/* hide text on mobile */}
        <div className="d-none d-md-block">
          <div className="fw-semibold" style={{ fontSize: 13 }}>
            Admin
          </div>
          <div className="text-muted" style={{ fontSize: 11 }}>
            admin@realestate.com
          </div>
        </div>
      </div>
    </div>
  );
}
