const movieSchema = require('../Models/MovieSchema.js');

const addMovieDetails = async (req,res)=>{
    console.log(req.body);
    const {movie_name, language, release_date, poster_url,budget, collections} = req.body;
    console.log(movie_name);
    const movieDetails = new movieSchema({
        movie_name:movie_name,
        language:language,
        release_year:release_date,
        budget:budget,
        poster_url:poster_url,
        total_collection:collections,
    });
    const result = await movieDetails.save();
    console.log(result);
    res.send(result);
}
module.exports = addMovieDetails;