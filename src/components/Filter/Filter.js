import React, { Component } from 'react';

const Filter = ({ value, filterProp }) => (
  <label className="PhoneBookEditor">
    Find contacts by name
    <input
      className="PhoneBookEditor__text"
      type="text"
      value={value}
      onChange={filterProp}
    />
  </label>
);

export default Filter;
