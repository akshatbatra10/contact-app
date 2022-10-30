import React from "react";

import Header from "./Header.component";
import AddContact from "./AddContact.component";
import ContactList from "./ContactList.component";

import "./App.css";

function App() {
  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList />
    </div>
  );
}

export default App;
