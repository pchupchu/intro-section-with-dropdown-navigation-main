import "./Company.css";
import DropDown from "../DropDown/DropDown";

function Company({ isOpen, onOpen, onOptionClick }) {
  const options = ["History", "Our Team", "Blog"];
  return (
    <div className="company">
      <DropDown
        title="Company"
        itemClassname=""
        options={options}
        isOpen={isOpen}
        onOpen={onOpen}
        onOptionClick={onOptionClick}
      />
    </div>
  );
}

export default Company;
