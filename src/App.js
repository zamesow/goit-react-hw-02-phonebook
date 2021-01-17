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

    console.log(contact);
  };

  render() {
    return (
      <>
        <PhoneBookEditor onSubmitProp={this.formSubmitHandler} />
        <Contacts />
      </>
    );
  }
}

export default App;
