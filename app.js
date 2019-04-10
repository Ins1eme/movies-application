const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const filmsRoutes = require('./routes/films')

const app = express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

mongoose
  .connect(
    "mongodb://Bogdan:qwerty1@ds135786.mlab.com:35786/films-application",
    {
      useNewUrlParser: true
    }
  )
  .then(_ => {
    console.log("mongoDB connected");
  });
    
mongoose.set('useFindAndModify', false);   

app.use('/api', filmsRoutes)
    
module.exports = app