import "./DropDown.css";

const Dropdown = ({
  title,
  itemClassname,
  options,
  isOpen,
  onOpen,
  onOptionClick,
}) => {
  return (
    <div className="dropdown">
      <p className="dropdown__header" onClick={onOpen}>
        {title}
      </p>
      {isOpen && (
        <ul className="dropdown__options">
          {options.map((option, index) => (
            <li
              key={index}
              className={`dropdown__option ${itemClassname}`}
              onClick={() => onOptionClick(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
