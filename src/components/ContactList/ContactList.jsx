import Contact from "../Contact/Contact";

const ContactList = ({ contactList, onDelete }) => {
  return (
    <ul>
      {contactList.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
