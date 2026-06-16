// src/components/layout/Navbar/Navbar.jsx
import NavbarLeft from "./NavbarLeft";
import NavbarRight from "./NavbarRight";

export default function Navbar({ onMenuClick }) {
  return (
    <div className="top-navbar d-flex align-items-center justify-content-between">
      <NavbarLeft onMenuClick={onMenuClick} />
      <NavbarRight />
    </div>
  );
}
