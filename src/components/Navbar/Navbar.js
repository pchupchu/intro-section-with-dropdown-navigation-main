import Navigation from "../Navigation/Navigation";
import "./Navbar.css";

function Navbar({
  isNavbarOpen,
  isFeaturesOpen,
  isCompanyOpen,
  onFeaturesOpen,
  onCompanyOpen,
  onOptionClick,
}) {
  return (
    <div className={`navbar ${isNavbarOpen ? "navbar_opened" : ""}`}>
      <div className={"navbar__container"}>
        <nav className="navbar__navigation">
          <Navigation
            isFeaturesOpen={isFeaturesOpen}
            onFeaturesOpen={onFeaturesOpen}
            isCompanyOpen={isCompanyOpen}
            onCompanyOpen={onCompanyOpen}
            onOptionClick={onOptionClick}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
