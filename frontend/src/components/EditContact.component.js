import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const EditContact = (props) => {
  const location = useLocation();
  const { id } = location.state.contact;
  const [name, setName] = useState(location.state.contact.name);
  const [email, setEmail] = useState(location.state.contact.email);
  const navigate = useNavigate();
  const update = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("All fields are mandatory!");
      return;
    }
    console.log(name, email);
    props.updateContactHandler({ id, name, email });
    setName("");
    setEmail("");
    navigate("/");
  };
  return (
    <div className='ui main' style={{ marginTop: "5.5em" }}>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={update}>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='ui button blue'>Done</button>
      </form>
    </div>
  );
};

export default EditContact;
