import { Link } from "react-router-dom";
import "./Navigation.css";
import Features from "../Features/Features";
import Company from "../Company/Company";

function Navigation({
  isFeaturesOpen,
  isCompanyOpen,
  onFeaturesOpen,
  onCompanyOpen,
  onOptionClick,
}) {
  return (
    <div className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item">
          <Features
            isFeaturesOpen={isFeaturesOpen}
            onFeaturesOpen={onFeaturesOpen}
            onOptionClick={onOptionClick}
          />
        </li>
        <li className="navigation__item">
          <Company
            isCompanyOpen={isCompanyOpen}
            onCompanyOpen={onCompanyOpen}
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
        <Link to="/signin" className="navigation__auth-link">
          Login
        </Link>
        <Link
          to="/signup"
          className="navigation__auth-link navigation__auth-link_register"
        >
          Register
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
