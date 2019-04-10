const Film = require('../models/film');


module.exports.getSortedMovies = async function (req, res) {

  const filmQueryArray = []
  for(let prop in req.query) {
    if(req.query[prop] !== "null") {
      filmQueryArray.push(prop)
    }
  }
  
  const film = {};
  filmQueryArray.map((elem) => {
    if (elem === 'title') {
      film[elem] = { $regex: req.query[elem], $options: 'i' };
    } else {
      film[elem] = req.query[elem];
    }
  });

  const films = await Film.find(film);
  res.status(200).json(films);
}

module.exports.getFilms = async function (req, res) {
  const films = await Film.find({});
  const shuffleArray = shuffle(films);
  res.status(200).json(shuffleArray.slice(0, 10));
};

module.exports.getTabsFilms = async function (req, res) {

  let film = {};

  const objTabs = [
    {
      latests: {
        created_at: -1,
      },
    },
    {
      topRated: {
        rating: -1,
      },
    },
    {
      resentlyReleased: {
        year: -1,
      },
    },
  ];


  for (let i = 0; i < objTabs.length; i++) {
    const tabName = Object.keys(objTabs[i])[0];
    const tabFilm = await Film.find({}).sort(objTabs[i][tabName]).limit(4);
    film = Object.assign({}, film , { [tabName]: tabFilm });
  }

  res.status(200).json(film);
};

module.exports.getFilterFields = async function (req, res) {

  const filters = {
    country: [],
    genre: [],
  };
  const allFilms = await Film.find({});

  Object.keys(filters).map((filter) => {
    allFilms.map((film) => {
      if (Array.isArray(film[filter])) {
        filters[filter] = filters[filter].concat(film[filter]);
      } else {
        filters[filter].push(film[filter]);
      }
    });
    filters[filter] = [...new Set(filters[filter])];
  });
  res.status(200).json(filters);
};

module.exports.getFilmByName = async function (req, res) {
  const film = await Film.findOne({title: req.query.title});
  res.status(200).json(film);
}

module.exports.addReview = async function (req, res) {

  const review = [{
    comment: req.body.comment,
    name: req.body.name,
    email: req.body.email,
    date: new Date()
  }] 
  await Film.findOneAndUpdate(
    {title: req.body.title},
    {$push: {review }}
  )
  res.status(201).json(review)
}


function shuffle(a) {
  let j; var x; var i;
  for (i = a.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
  }
  return a;
}
