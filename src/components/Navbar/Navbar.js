import Navigation from "../Navigation/Navigation";
import "./Navbar.css";

function Navbar({ isNavbarOpen }) {
  return (
    <div className={`navbar ${isNavbarOpen ? "navbar_opened" : ""}`}>
      <div className={"navbar__container"}>
        <Navigation />
      </div>
    </div>
  );
}

export default Navbar;
