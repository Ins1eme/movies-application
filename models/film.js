const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    imageBackgroundUrl: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        require: true
    },
    language: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    genre: {
        type: Array,
        required: true
    },
    review: [
        {
            comment: String,
            name: String,
            email: String,
            date: Date
        }
    ]

})

module.exports = mongoose.model('film', itemSchema);