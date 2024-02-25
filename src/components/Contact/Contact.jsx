import { BsPhone, BsPerson, BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";
import css from "./Contact.module.css";

const Contact = ({ data: { id, number, name }, onDelete }) => {
  return (
    <div className={css.containerContac}>
      <div className={css.thumbContact}>
        <h2 className={css.nameContact}>
          <BsPerson size="22" />
          {name}
        </h2>
        <p className={css.numberContact}>
          <BsPhone size="22" />
          {number}
        </p>
      </div>
      <button className={css.buttonDelete} onClick={() => onDelete(id)}>
        <BsTrash size="15" />
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  onDelete: PropTypes.func,
};

export default Contact;
