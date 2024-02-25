import Contact from "../Contact/Contact";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";

function App() {
  return (
    <>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Contact />
    </>
  );
}

export default App;
