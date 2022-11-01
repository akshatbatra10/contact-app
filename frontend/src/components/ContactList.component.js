import React, { useRef } from "react";
import { Link } from "react-router-dom";

import ContactCard from "./ContactCard.component";

const ContactList = (props) => {
  const deleteContactHandler = (id) => {
    props.getContactID(id);
  };
  const inputEl = useRef("");
  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHandler={deleteContactHandler}
        key={contact.id}
      />
    );
  });
  const getSearchTerm = () => {
    props.searchKeyword(inputEl.current.value);
  };
  return (
    <div className='main' style={{ marginTop: "5.5em" }}>
      <h2>
        Contact List
        <Link to='/add'>
          <button className='ui button blue right floated'>Add Contact</button>
        </Link>
      </h2>
      <div className='ui fluid category search'>
        <div className='ui icon input' style={{ width: "100%" }}>
          <input
            ref={inputEl}
            type='text'
            className='prompt'
            placeholder='Search Contact'
            value={props.term}
            onChange={getSearchTerm}
          />
          <i className='search icon'></i>
        </div>
      </div>
      <div className='ui celled list'>
        {renderContactList.length > 0
          ? renderContactList
          : "No Contacts Available"}
      </div>
    </div>
  );
};

export default ContactList;
