// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import MovieContainer from './MovieContainer/MovieContainer.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';

// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      allMovies   : [],
      titleInput  : '',
      omdbTitle   : '',
      omdbPoster  : '',
    };
  }

  // get all movies that's stored in the database and set returned array to state
  getAllMovies() {
    fetch('/api/movies')
    .then(r => r.json())
    .then(results => {
      this.setState({
        allMovies : results,
      });
      // console.log(this.state)
    })
    .catch(err => console.log('getAllMovies frontend', err))
  }
  // calls external api => omdbapi.com
  // search using titleInput and save title and poster information to state
  searchOmdb() {
    fetch(`http://www.omdbapi.com/?${this.state.titleInput}`)
    .then(r => r.json())
    .then(movie => {
      this.setState({
        omdbTitle   : movie.Title,
        omdbPoster  : movie.Poster,
      });
    })
    .catch(err => console.log('searchOmdb frontend', err));
  }
  
  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to Movie House 3!</h1>
          <h2>Showing Now</h2>
        </header>

        <SearchForm />

        <MovieContainer 
          getAllMovies={this.getAllMovies.bind(this)}
          showing={this.state.allMovies} 
        />

        <footer>
          <p>Ain't nobody got time for copyright</p>
        </footer>
      </div>
    );
  }
}

export default App;
