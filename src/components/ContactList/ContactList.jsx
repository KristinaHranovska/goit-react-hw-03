import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul className={css.listContacts}>
      {contactList.map((contact) => (
        <li className={css.itemContact} key={nanoid()}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contactList: PropTypes.array,
  onDelete: PropTypes.func,
};

export default ContactList;
