const mongoose = require('mongoose');
const movie = mongoose.Schema;

const movie_schema = new movie({
    "movie_name":String,
    "language":String,
    "release_year":String,
    "budget":String,
    "poster_url":String,
    "total_collection":String,
},{collection:"Movie_list"});

const movieSchema = mongoose.model("movie_schema",movie_schema);

module.exports = movieSchema;