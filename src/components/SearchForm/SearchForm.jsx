import React, { Component } from 'react';
import style from './SearchForm.css';

export default class SearchForm extends Component {
  render() {
    return(
      <div >
        <input type="text"/>
        <button>Search</button>
      </div>
    )
  }
}