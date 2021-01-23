import React, { Component } from 'react';
import './Filter.module.css';

const Filter = ({ value, filterProp }) => (
  <label className="ContactForm">
    Find contacts by name
    <input
      className="FeilterForm__text"
      type="text"
      value={value}
      onChange={filterProp}
    />
  </label>
);

export default Filter;
