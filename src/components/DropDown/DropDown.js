import Option from "../Option/Option";
import "./DropDown.css";

const Dropdown = ({ title, options, isOpen, onOpen, onOptionClick }) => {
  return (
    <div className="dropdown">
      <p className="dropdown__header" onClick={onOpen}>
        {title}
      </p>
      {isOpen && (
        <ul className="dropdown__options">
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
