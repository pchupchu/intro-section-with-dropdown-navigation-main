import { useEffect } from "react";
import Navigation from "../Navigation/Navigation";
import "./Navbar.css";

function Navbar({
  isNavbarOpen,
  isFeaturesOpen,
  isCompanyOpen,
  onFeaturesOpen,
  onCompanyOpen,
  onClose,
  onOptionClick,
}) {
  useEffect(() => {
    if (!isNavbarOpen) return;
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", closeByEscape);
    return () => document.removeEventListener("keydown", closeByEscape);
  }, [isNavbarOpen, onClose]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`navbar ${isNavbarOpen ? "navbar_opened" : ""}`}
      onClick={handleOverlay}
    >
      <div className={"navbar__container"}>
        <nav className="navbar__navigation">
          <Navigation
            isFeaturesOpen={isFeaturesOpen}
            onFeaturesOpen={onFeaturesOpen}
            isCompanyOpen={isCompanyOpen}
            onCompanyOpen={onCompanyOpen}
            onOptionClick={onOptionClick}
            onClose={onClose}
          />
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
