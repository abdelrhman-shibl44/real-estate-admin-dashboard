// SidebarNav.jsx - import from data file
import { menuItems } from "../../../data/menuItems";
import SidebarNavItem from "./SidebarNavItem";

export default function SidebarNav({ onClose }) {
  return (
    <nav>
      {menuItems.map((item) => (
        <SidebarNavItem key={item.path} {...item} onClose={onClose} />
      ))}
    </nav>
  );
}
