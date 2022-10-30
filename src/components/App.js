import React, { useState } from "react";

import Header from "./Header.component";
import AddContact from "./AddContact.component";
import ContactList from "./ContactList.component";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
