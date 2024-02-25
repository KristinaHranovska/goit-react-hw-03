import { BsPhone, BsPerson, BsTrash } from "react-icons/bs";
import PropTypes from "prop-types";

const Contact = ({ data: { id, number, name }, onDelete }) => {
  return (
    <div>
      <h2>
        <BsPerson />
        {name}
      </h2>
      <p>
        <BsPhone />
        {number}
      </p>
      <button onClick={() => onDelete(id)}>
        <BsTrash />
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  numberContact: PropTypes.string,
  nameContact: PropTypes.string,
};

export default Contact;
