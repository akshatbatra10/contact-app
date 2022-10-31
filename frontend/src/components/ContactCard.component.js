import React from "react";
import { Link } from "react-router-dom";

import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, name, email } = props.contact;
  return (
    <div className='ui items'>
      <div className='item'>
        <img className='ui avatar image' src={user} alt='user' />
        <div className='content'>
          <Link to={`/contact/{id}`} state={{ contact: props.contact }}>
            <div className='header'>{name}</div>
            <div>{email}</div>
          </Link>
        </div>
        <i
          className='trash alternate outline icon'
          style={{ color: "red", marginTop: "7px", cursor: "pointer" }}
          onClick={() => props.clickHandler(id)}></i>
      </div>
    </div>
  );
};

export default ContactCard;