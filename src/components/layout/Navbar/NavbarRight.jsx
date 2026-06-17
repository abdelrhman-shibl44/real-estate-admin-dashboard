import NavbarSearch from "./NavbarSearch";

export default function NavbarRight() {
  return (
    <div className="d-flex align-items-center gap-3 gap-md-3">
      {/* Search (hidden on small screens) */}
      <NavbarSearch />
      {/* Notifications */}
      <button className="btn btn-light position-relative">
        <i className="bi bi-bell"></i>
        <span
          className="position-absolute start-100 translate-middle py-0.5 small text-white top-3 rounded-pill bg-danger fw-bold"
          style={{ paddingLeft: "0.7rem", paddingRight: "0.7rem" }}
        >
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
