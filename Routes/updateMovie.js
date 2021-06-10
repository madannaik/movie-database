
const movieSchema = require('../Models/MovieSchema.js');
const updateMovie = async (req,res) =>{
    const {id,movie_name, language, release_date, poster_url,budget, collections} = req.body;
    await movieSchema.findOneAndUpdate({_id:id},{
        movie_name:movie_name,
        language:language,
        release_year:release_date,
        budget:budget,
        poster_url:poster_url,
        total_collection:collections,
    },(err,docs)=>res.send({"status":"success"}));

}

module.exports = updateMovie;