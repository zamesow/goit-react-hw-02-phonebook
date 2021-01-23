import React, { Component } from 'react';

const Filter = ({ value, filterProp }) => (
  <label className="ContactForm">
    Find contacts by name
    <input
      className="ContactForm__text"
      type="text"
      value={value}
      onChange={filterProp}
    />
  </label>
);

export default Filter;
