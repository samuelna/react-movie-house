import React, { Component } from 'react';
import style from './MovieContainer.css';
import Movie from '../Movie/Movie.jsx';

export default class MovieContainer extends Component {

  componentWillMount() {
    this.props.getAllMovies();
  }

  renderAllMovies() {
    return this.props.showing.map((movie, index) => 
      <Movie 
        key={index}
        title={movie.title}
        poster={movie.poster} 
      />
    );
  }

  render() {
    return(
      <div id={style['movie-list-container']}>
        {this.renderAllMovies()}
      </div>
    )
  }
}