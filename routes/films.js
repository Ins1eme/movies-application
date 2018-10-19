const express = require('express');
const controller = require('../controllers/films');
const router = express.Router();

router.get('/films', controller.getAllFilms);
router.post('/films', controller.addFilm);


module.exports = router;