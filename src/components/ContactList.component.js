import React from "react";
import { Link } from "react-router-dom";

import ContactCard from "./ContactCard.component";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactID(id);
  };
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  return (
    <div className='main' style={{ marginTop: "3.5em" }}>
      <h2>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h2>
      <div className='ui celled list'>{renderContactList}</div>
    </div>
  );
};

export default ContactList;
