import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header.component";
import AddContact from "./AddContact.component";
import ContactList from "./ContactList.component";
import ContactDetails from "./ContactDetails.component";

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
      <Router>
        <Header />
        <Routes>
          <Route
            path='/add'
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            exact
            path='/'
            element={
              <ContactList
                contacts={contacts}
                getContactID={removeContactHandler}
              />
            }
          />
          <Route exact path='/contact/:id' element={<ContactDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
