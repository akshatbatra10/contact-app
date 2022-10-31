import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import shin from "../images/shin.jpg";

const ContactDetails = (props) => {
  const location = useLocation();
  const { name, email } = location.state.contact;
  return (
    <div className='main'>
      <div className='ui card centered'>
        <div className='image'>
          <img src={shin} alt='user' />
        </div>
        <div className='content'>
          <div className='header'>{name}</div>
          <div className='description'>{email}</div>
        </div>
      </div>
      <div className='center-div'>
        <Link to='/'>
          <button
            className='ui button blue'
            style={{ margin: "0 auto", display: "block" }}>
            Back to contact list
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactDetails;
