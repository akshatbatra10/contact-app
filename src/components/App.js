import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import Header from "./Header.component";
import AddContact from "./AddContact.component";
import ContactList from "./ContactList.component";

import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ?? []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuid(), ...contact }]);
  };

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  // useEffect(() => {
  //   const retrivedContacts = JSON.parse(
  //     localStorage.getItem(LOCAL_STORAGE_KEY)
  //   );
  //   if (retrivedContacts) setContacts(retrivedContacts);
  // }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactID={removeContactHandler} />
    </div>
  );
}

export default App;
