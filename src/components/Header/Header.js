import "./Header.css";
import logo from "../../images/logo.svg";
import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isBurger, setIsBurger] = useState(false);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Sans Serif");
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  function handleBurgerMenu() {
    setIsBurger(!isBurger);
    setIsNavbarOpen(!isNavbarOpen);
    if (!isBurger) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <Navigation
        isOpen={isOpen}
        onOpen={handleOpen}
        onOptionClick={handleOptionClick}
        selectedOption={selectedOption}
      />
      <div className="header__burger" onClick={handleBurgerMenu}></div>
      <Navbar
        isOpen={isOpen}
        onOpen={handleOpen}
        onOptionClick={handleOptionClick}
        selectedOption={selectedOption}
        isNavbarOpen={isNavbarOpen}
        setIsNavbarOpen={setIsNavbarOpen}
      />
    </header>
  );
}

export default Header;
