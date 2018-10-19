const Film = require('../models/film');

module.exports.getAllFilms = async function(req, res) {

        const filmQueryArray = Object.keys(req.query)
        const film = {}

        filmQueryArray.map(elem => {
            if(elem === 'title') {
                film[elem] = {$regex: req.query[elem], $options: 'i'}
            } else {
                film[elem] = req.query[elem]
            }
        })
        let films = await Film.find(film)
        res.status(200).json(films);

}

module.exports.addFilm = async function(req, res) {
    try {

        // await film.save()
        // res.status(201).json(film);
        
    } catch(error) {
        console.log(error);
    }
}