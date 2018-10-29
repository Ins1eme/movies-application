const express = require('express');
const controller = require('../controllers/films');
const router = express.Router();

router.get('/films/sort', controller.getSortedMovies);

router.get('/films', controller.getFilms);

router.get('/films/tabs', controller.getTabsFilms);
module.exports = router;