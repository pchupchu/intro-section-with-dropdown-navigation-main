import "./Company.css";
import DropDown from "../DropDown/DropDown";
import company from "../../utils/company";

function Company({ isOpen, onOpen, onOptionClick }) {
  const options = company;
  return (
    <div className="company">
      <DropDown
        title="Company"
        options={options}
        isOpen={isOpen}
        onOpen={onOpen}
        onOptionClick={onOptionClick}
      />
    </div>
  );
}

export default Company;
