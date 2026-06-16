import { NavLink } from "react-router-dom";

export default function SidebarNavItem({ path, icon, label, onClose }) {
  return (
    <NavLink
      to={path}
      end={path === "/"}
      className={({ isActive }) =>
        `nav-link d-flex align-items-center gap-2 ${isActive ? "active" : ""}`
      }
      onClick={onClose}
    >
      <i className={`bi ${icon}`}></i>
      <span>{label}</span>
    </NavLink>
  );
}
