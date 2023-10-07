import { Link } from "react-router-dom";
import "./Option.css";

function Option({ title, image, itemClassname, link, onClick }) {
  return (
    <li
      className={`option ${itemClassname}`}
      style={{ backgroundImage: `url(${image})` }}
      onClick={onClick}
    >
      <Link to={link} className="option__link">
        {title}
      </Link>
    </li>
  );
}

export default Option;
