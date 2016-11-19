import React, { Component } from 'react';
import style from './SearchContainer/SearchContainer.css';
import Movie from './Movie/Movie.jsx';

export default class SearchContainer extends Component {
  render() {
    return(
      <div id={style=["search-container"]}>
        <Movie 
          title={this.props.title}
          poster={this.props.poster}
          imdbrating={this.props.imdbrating}
          runtime={this.props.runtime}
        />
      </div>
    )
  }
}