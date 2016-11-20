// import the libs we need
import React, { Component } from 'react';
import './normalize.css';
import style from './App.css';
import MovieContainer from './MovieContainer/MovieContainer.jsx';
import SearchForm from './SearchForm/SearchForm.jsx';
import SearchContainer from './SearchContainer/SearchContainer.jsx';

// create a React Component called _App_
class App extends Component {
  constructor() {
    super();

    this.state = {
      allMovies   : [],
      titleInput  : '',
      omdbTitle   : '',
      omdbPoster  : '',
      searched    : false,
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
    this.setState({
      searched : true,
    })

    fetch(`http://www.omdbapi.com/?t=${this.state.titleInput}`)
    .then(r => r.json())
    .then(movie => {
      console.log('in fetch movie', movie)
      this.setState({
        omdbTitle   : movie.Title,
        omdbPoster  : movie.Poster,
      });
      console.log('in fetch states', this.state)
    })
    .catch(err => console.log('searchOmdb frontend', err));

    // console.log('in searchOmdb', this.state)
  }
  // update input 
  handleInput(e) {
    // console.log('handleInput', e.target.value);
    this.setState({
      titleInput : e.target.value,
    });
  }
  
  render(){
    return (
      <div id="app-container">
        <header>
          <h1>Welcome to Movie House 3!</h1>
          <h2>Showing Now</h2>
        </header>

        <SearchForm
          handleInput={event => this.handleInput(event)} 
          handleClick={() => this.searchOmdb()}
        />
        <div>
          <MovieContainer 
            getAllMovies={this.getAllMovies.bind(this)}
            showing={this.state.allMovies} 
          />
        </div>

        <div>
          <SearchContainer
            searched={this.state.searched} 
            title={this.state.omdbTitle}
            poster={this.state.omdbPoster}
          />
        </div>

        <footer>
          <p>Ain't nobody got time for copyright</p>
        </footer>
      </div>
    );
  }
}

export default App;
