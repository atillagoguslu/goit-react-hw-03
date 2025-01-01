import "./App.css";
import ContactList from "./components/ContactList.jsx";
import { useState } from "react";

const ContactDatabase = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contactsDB, setContacts] = useState(ContactDatabase);

  const handleDelete = (id) => {
    setContacts(contactsDB.filter((contact) => contact.id !== id));
  };

  return (
    <>
      <div className="container">
        <h1>Phonebook</h1>
        <ContactList contacts={contactsDB} onDelete={handleDelete} />
      </div>
    </>
  );
}

export default App;
