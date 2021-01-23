import React, { Component } from 'react';
import shortid from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import './App.css';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    const { name, number } = data;
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLocaleLowerCase() === name.toLowerCase(),
      )
    ) {
      alert(`${data.name} is already in contacts.`);
    } else if (contacts.find(contact => contact.number === number)) {
      alert(`${number} is already in contacts.`);
    } else {
      this.setState(prevState => ({
        contacts: [
          {
            ...data,
            id: shortid.generate(),
          },
          ...prevState.contacts,
        ],
      }));
    }

    console.log(data);
    console.log(contacts);
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(
      contact =>
        contact.name.toLowerCase().includes(normalizedFilter) ||
        contact.number.includes(filter),
    );
  };

  render() {
    const { filter } = this.state;

    return (
      <>
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmitProp={this.formSubmitHandler} />

        <h2 className="title">Contacts</h2>
        <ContactList contactsProp={this.getVisibleContacts()}>
          <Filter value={filter} filterProp={this.changeFilter} />
        </ContactList>
      </>
    );
  }
}

export default App;
