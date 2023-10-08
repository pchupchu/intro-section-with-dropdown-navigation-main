import "./Company.css";
import DropDown from "../DropDown/DropDown";
import company from "../../utils/company";

function Company({ isCompanyOpen, onCompanyOpen, onOptionClick }) {
  const options = company;
  return (
    <div className="company">
      <DropDown
        title="Company"
        dropdownClassName=""
        options={options}
        isOpen={isCompanyOpen}
        onOpen={onCompanyOpen}
        onOptionClick={onOptionClick}
      />
    </div>
  );
}

export default Company;
