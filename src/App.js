import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookEditor from './components/PhoneBookEditor';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  formSubmitHandler = sabmitName => {
    const contact = {
      name: sabmitName,
      id: shortid.generate(),
    };

    // FIXME: не понимаю как заполнить массив контактов для отображения
    this.setState(({ contacts }) => ({
      contacts: [contact, ...contacts],
    }));
    console.log(contact);
    console.log(this.state);
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <PhoneBookEditor onSubmitProp={this.formSubmitHandler} />
        <Contacts title="Contacts" contacts={contacts} />
      </>
    );
  }
}

export default App;
