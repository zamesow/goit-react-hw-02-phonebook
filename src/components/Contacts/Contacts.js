import React from 'react';
import './Contacts.css';

const Contacts = ({ title, contacts }) => (
  <div>
    <h2>{title}</h2>
    <p>{contacts}</p>
  </div>
);

export default Contacts;
