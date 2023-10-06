import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__menu">
        <li className="navigation__item">Features</li>
        <li className="navigation__item">Company</li>
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
