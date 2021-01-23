import React from 'react';
import './ContactList.css';

function ContactList({ contactsProp, onDeleteProp, children }) {
  return (
    <div className="ContactForm">
      {children}
      <ul className="ContactList__form">
        {contactsProp.map(({ id, number, name }) => {
          return (
            <li key={id} className="contact">
              {name}: {number}
              <button
                className="deleteBtn"
                type="button"
                onClick={() => onDeleteProp(id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ContactList;
