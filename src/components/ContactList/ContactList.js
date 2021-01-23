import React from 'react';
import './ContactList.css';

function ContactList({ title, contactsProp, children }) {
  return (
    <div className="ContactForm">
      {children}
      <ul className="ContactList__form">
        {contactsProp.map(contact => {
          return (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
