// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import MovieContainer from './MovieContainer/MovieContainer.jsx';

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

  searchOmdb() {
    fetch()
    .then()
    .then()
    .then()
  }

  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to Movie House 3!</h1>
          <h2>Showing Now</h2>
        </header>

        <MovieContainer 
          getAllMovies={this.getAllMovies.bind(this)}
          showing={this.state.allMovies} 
        />

        <footer>
          <p>Aint nobody got time for copyright</p>
        </footer>
      </div>
    );
  }
}

export default App;
