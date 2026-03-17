import "./header.css";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import UserActions from "./UserActions";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="oc-container">
        <Logo />

        <div className={`nav-wrapper ${menuOpen ? "open" : ""}`}>
          <NavMenu />
          <UserActions />
        </div>

        {/* Mobile Toggle */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
      </div>
    </header>
  );
}