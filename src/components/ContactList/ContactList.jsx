import Contact from "../Contact/Contact";

const ContactList = ({ contactList }) => {
  return (
    <ul>
      {contactList.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
