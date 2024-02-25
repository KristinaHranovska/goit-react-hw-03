import { useState } from "react";
import contactsArray from "../../contacts.json";

import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  const [contacts, setContacts] = useState(contactsArray);
  const [search, setSearch] = useState("");

  const filterContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={search} onFilter={setSearch} />
      <ContactList contactList={filterContacts} />
    </>
  );
}

export default App;
