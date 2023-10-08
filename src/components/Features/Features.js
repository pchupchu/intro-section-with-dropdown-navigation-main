import "./Features.css";
import DropDown from "../DropDown/DropDown";
import features from "../../utils/features";

function Features({ isFeaturesOpen, onFeaturesOpen, onOptionClick }) {
  const options = features;
  return (
    <div className="features">
      <DropDown
        title="Features"
        dropdownClassName="dropdown__options_features"
        options={options}
        isOpen={isFeaturesOpen}
        onOpen={onFeaturesOpen}
        onOptionClick={onOptionClick}
      />
    </div>
  );
}

export default Features;
