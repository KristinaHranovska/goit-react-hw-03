import css from "./SearchBox.module.css";
import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";

const SearchBox = ({ value, onFilter }) => {
  const cleanInput = () => {
    onFilter("");
  };
  return (
    <div className={css.container}>
      <p className={css.inputText}>Find contacts by name</p>
      <div className={css.container}>
        <input
          className={css.formInput}
          type="text"
          value={value}
          onChange={(e) => onFilter(e.target.value)}
        />
        <IoCloseOutline
          className={css.iconClean}
          size="20"
          onClick={cleanInput}
        />
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string,
  onFilter: PropTypes.func,
};

export default SearchBox;
