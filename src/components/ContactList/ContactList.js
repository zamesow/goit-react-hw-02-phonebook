import React from 'react';
import mc from './ContactList.module.css';

function ContactList({ contacts, onDelete, children }) {
  return (
    <div className={mc.ContactList}>
      {children}
      <ul className={mc.ContactList__form}>
        {contacts.map(({ id, number, name }) => {
          return (
            <li key={id} className={mc.contact}>
              {name}: {number}
              <button
                className={mc.deleteBtn}
                type="button"
                onClick={() => onDelete(id)}
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
