import Option from "../Option/Option";
import "./DropDown.css";

const Dropdown = ({
  title,
  dropdownClassName,
  options,
  isOpen,
  onOpen,
  onOptionClick,
}) => {
  return (
    <div className="dropdown">
      <p
        className={`dropdown__header ${isOpen ? "dropdown__header_close" : ""}`}
        onClick={onOpen}
      >
        {title}
      </p>
      {isOpen && (
        <ul className={`dropdown__options ${dropdownClassName}`}>
          {options.map(
            (option) => {
              return (
                <Option
                  key={option.id}
                  title={option.title}
                  image={option.image}
                  itemClassname={option.itemClassname}
                  link={option.link}
                  onClick={() => onOptionClick(option)}
                />
              );
            }

            //   (<li
            //     key={index}
            //     className={`dropdown__option ${itemClassname}`}
            //     onClick={() => onOptionClick(option)}
            //   >
            //     {option}
            //   </li>
            // )
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
