import { Link } from "react-router-dom";
import "./Navigation.css";
import Features from "../Features/Features";
import Company from "../Company/Company";

function Navigation({ isOpen, onOpen, onOptionClick }) {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item">
          <Features
            isOpen={isOpen}
            onOpen={onOpen}
            onOptionClick={onOptionClick}
          />
        </li>
        <li className="navigation__item">
          <Company
            isOpen={isOpen}
            onOpen={onOpen}
            onOptionClick={onOptionClick}
          />
        </li>
        <li className="navigation__item">
          <Link to="/careers" className="navigation__link">
            Careers
          </Link>
        </li>
        <li className="navigation__item">
          <Link to="/careers" className="navigation__link">
            About
          </Link>
        </li>
      </ul>
      <div className="navigation__links">
        <Link to="/signin" className="navigation__link">
          Login
        </Link>
        <Link
          to="/signup"
          className="navigation__link navigation__link_sign-up"
        >
          Register
        </Link>
      </div>
    </nav>
  );
}

export default Navigation;
