import "./Header.css";
import logo from "../../images/logo.svg";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isBurger, setIsBurger] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  const handleFeaturesOpen = () => {
    setIsFeaturesOpen(!isFeaturesOpen);
  };

  const handleCompanyOpen = () => {
    setIsCompanyOpen(!isCompanyOpen);
  };

  const handleOptionClick = () => {
    setIsNavbarOpen(false);
    setIsFeaturesOpen(false);
    setIsCompanyOpen(false);
  };

  const closeNavbar = () => {
    setIsNavbarOpen(false);
  };

  const handleBurgerMenu = () => {
    setIsBurger(!isBurger);
    setIsNavbarOpen(!isNavbarOpen);
    if (!isBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <nav className="header__navigation">
        <Navigation
          isFeaturesOpen={isFeaturesOpen}
          isCompanyOpen={isCompanyOpen}
          onFeaturesOpen={handleFeaturesOpen}
          onCompanyOpen={handleCompanyOpen}
          onOptionClick={handleOptionClick}
        />
      </nav>
      <div
        className={`header__burger ${
          isNavbarOpen ? "header__burger_active" : ""
        }`}
        onClick={handleBurgerMenu}
      ></div>
      <Navbar
        isFeaturesOpen={isFeaturesOpen}
        isCompanyOpen={isCompanyOpen}
        onFeaturesOpen={handleFeaturesOpen}
        onCompanyOpen={handleCompanyOpen}
        onOptionClick={handleOptionClick}
        isNavbarOpen={isNavbarOpen}
        onClose={closeNavbar}
        setIsNavbarOpen={setIsNavbarOpen}
      />
    </header>
  );
}

export default Header;
