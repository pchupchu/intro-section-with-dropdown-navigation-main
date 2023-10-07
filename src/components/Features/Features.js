import "./Features.css";
import DropDown from "../DropDown/DropDown";

function Features({ isOpen, onOpen, onOptionClick }) {
  const options = ["Todo List", "Calendar", "Reminders", "Planning"];
  return (
    <div className="features">
      <DropDown
        title="Features"
        itemClassname="dropdown__options_features"
        options={options}
        isOpen={isOpen}
        onOpen={onOpen}
        onOptionClick={onOptionClick}
      />
    </div>
  );
}

export default Features;
