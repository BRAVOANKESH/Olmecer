import NavItem from "./NavItem";

export default function NavMenu() {
  return (
    <nav className="menu-items">
      <NavItem label="Home" />
      <NavItem label="About" />
      <NavItem label="Services" />
      <NavItem label="Contact" />
    </nav>
  );
}