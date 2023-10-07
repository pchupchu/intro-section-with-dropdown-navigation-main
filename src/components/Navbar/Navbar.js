import Navigation from "../Navigation/Navigation";
import "./Navbar.css";

function Navbar({ isNavbarOpen, isOpen, onOpen, onOptionClick }) {
  return (
    <div className={`navbar ${isNavbarOpen ? "navbar_opened" : ""}`}>
      <div className={"navbar__container"}>
        <nav className="navbar__navigation">
          <Navigation
            isOpen={isOpen}
            onOpen={onOpen}
            onOptionClick={onOptionClick}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
