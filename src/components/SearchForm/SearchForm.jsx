import React, { Component } from 'react';
import style from './SearchForm.css';

export default class SearchForm extends Component {
  render() {
    return(
      <div >
        <input 
          type="text" 
          placeholder="Movie Title"
          onChange={this.props.handleInput}  />

        <button onClick={this.props.handleClick} >Search</button>
      </div>
    )
  }
}