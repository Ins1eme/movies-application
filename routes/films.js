const express = require('express');
const controller = require('../controllers/films');
const router = express.Router();

router.get('/films/sort', controller.getSortedMovies);

router.post('/films/review', controller.addReview);

router.get('/films', controller.getFilms);

router.get('/films/tabs', controller.getTabsFilms);

router.get('/films/filter', controller.getFilterFields)

router.get('/films/film', controller.getFilmByName)

module.exports = router;