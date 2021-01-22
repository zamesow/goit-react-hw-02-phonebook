import React from 'react';
import './Contacts.css';

function Contacts({ title, contactsProp, children }) {
  return (
    <div className="PhoneBookEditor">
      <h2 className="PhoneBookEditor__title">{title}</h2>
      {children}
      <ul className="Contacts__form">
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

export default Contacts;
