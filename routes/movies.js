const router        = require('express').Router();
// initialize omdb   model and its functions
const db            = require('../models/omdb');
// const path          = require('path');
const jsonResults   = (req, res) => res.json(res.movies || []);

router.route('/movies/edit')
  .put(db.editMovie, jsonResults);

router.route('/movies/:movie_id')
  .delete(db.deleteFromDB, jsonResults);

router.route('/movies')
  .get(db.getAllMovies, jsonResults)
  .post(db.saveToDB, jsonResults);

module.exports = router;
