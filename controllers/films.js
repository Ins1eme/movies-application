const Film = require('../models/film');

module.exports.getSortedMovies = async function(req, res) {

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

module.exports.getFilms = async function(req, res) {
    let films = await Film.find({});
    let shuffleArray = shuffle(films)
    res.status(200).json(shuffleArray.slice(0, 10))
}

module.exports.getTabsFilms = async function(req, res) {

    let film = {};
    
    let objTabs = [
        {
            latests:  {
                created_at:  -1
            }
        }, 
        { 
            topRated: {
                rating: -1
            }
        },
        {
            resentlyReleased: {
                year: -1
            }
        }
    ];

    for(let i = 0; i < objTabs.length; i++) {
        let tabName = Object.keys(objTabs[i])[0];
        let tabFilm = await Film.find({}).sort(objTabs[i][tabName]).limit(4);
        film = Object.assign({}, film ,{[tabName]: tabFilm});
    }

    res.status(200).json(film);
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}