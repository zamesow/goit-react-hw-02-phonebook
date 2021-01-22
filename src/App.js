import React, { Component } from 'react';
import shortid from 'shortid';
import PhoneBookEditor from './components/PhoneBookEditor';
import Contacts from './components/Contacts';

import './App.css';

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [{ ...data, id: shortid.generate() }, ...prevState.contacts],
    }));
    console.log(data);
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <PhoneBookEditor onSubmitProp={this.formSubmitHandler} />
        <Contacts title="Contacts" contactsProp={contacts} />
      </>
    );
  }
}

export default App;
