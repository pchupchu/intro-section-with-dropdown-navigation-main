import "./Features.css";
import DropDown from "../DropDown/DropDown";
import features from "../../utils/features";

function Features({ isOpen, onOpen, onOptionClick }) {
  const options = features;
  return (
    <div className="features">
      <DropDown
        title="Features"
        options={options}
        isOpen={isOpen}
        onOpen={onOpen}
        onOptionClick={onOptionClick}
      />
    </div>
  );
}

export default Features;
