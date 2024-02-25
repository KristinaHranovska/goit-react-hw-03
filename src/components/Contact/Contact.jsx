import PropTypes from "prop-types";

const Contact = ({ data: { number, name } }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{number}</p>
      <button type="button">Delete</button>
    </div>
  );
};

Contact.propTypes = {
  numberContact: PropTypes.string,
  nameContact: PropTypes.string,
};

export default Contact;
