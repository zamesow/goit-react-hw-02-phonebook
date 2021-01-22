import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookEditor from './components/PhoneBookEditor';
import Contacts from './components/Contacts';
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
    name: '',
    number: '',
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [
        {
          ...data,
          id: shortid.generate(),
        },
        ...prevState.contacts,
      ],
    }));
    console.log(data);
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
        <PhoneBookEditor onSubmitProp={this.formSubmitHandler} />
        <Contacts title="Contacts" contactsProp={this.getVisibleContacts()}>
          <Filter value={filter} filterProp={this.changeFilter} />
        </Contacts>
      </>
    );
  }
}

export default App;
