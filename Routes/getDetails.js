const movieSchema = require("../Models/MovieSchema");

const getMovieDetails = async (req,res) =>{
    movieSchema.find({},(err,docs)=>{
        res.send(docs);
    })
}

module.exports = getMovieDetails;