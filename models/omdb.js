const db = require('../db/db');

// get all movies from movies table
function getAllMovies(req, res, next) {
  console.log('in get all movies function');
  db.any(`SELECT *
          FROM movies;`)
  .then(movies => {
    res.movies = movies;
    next();
  })
  .catch(err => next(err));
}

// save a movie to database
function saveToDB(req, res, next) {
  // console.log('in saveToDB function');
  // console.log(req.body);
  db.none(`INSERT INTO movies (title, imdbRating, runtime, poster)
           VALUES ($/title/, $/imdbRating/, $/runtime/, $/poster/);`, req.body)
  .then(movies => {
    // movies is null
    res.results = movies;
    next();
  })
  .catch(err => next(err));
}

// delete a movie from database
function deleteFromDB(req, res, next) {
  db.result(`DELETE FROM movies
             WHERE movie_id = $1`, [req.params.movie_id])
  .then(movies => {
    // console.log('deleteFromDB', movies);
    res.results = movies;
    next();
  })
  .catch(err => next(err));
}

// update info of a specified movie
function editMovie(req, res, next) {
  console.log('in editMovie server side');
  console.log(req.body);
  db.none(`UPDATE movies
           SET title = $1, imdbrating = $2, runtime = $3
           WHERE movie_id = $4`, [req.body.title, req.body.imdbRating, req.body.runtime, req.body.movie_id])
  .then(() => {
    // console.log('edit success')
    next();
  })
  .catch(err => {
    // console.log('edit error')
    next(err);
  });
}

module.exports = {
  getAllMovies,
  saveToDB,
  deleteFromDB,
  editMovie,
};
