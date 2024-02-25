import PropTypes from "prop-types";

const Contact = ({ data: { id, number, name }, onDelete }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

Contact.propTypes = {
  numberContact: PropTypes.string,
  nameContact: PropTypes.string,
};

export default Contact;
