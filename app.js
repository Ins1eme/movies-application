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

mongoose.connect('mongodb://127.0.0.1:27017/ng-films', {
    useNewUrlParser: true
})
.then(_ => {
        console.log('mongoDB connected')
    })
    
    
    app.use('/api', filmsRoutes)
    
module.exports = app