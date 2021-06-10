const movieSchema = require("../Models/MovieSchema")

const deleteMovie = (req,res) =>{
    const {id} = req.body;
    console.log(id); 
    movieSchema.findOneAndRemove({_id:id},(err)=>{
        if(err){
            res.send(err)
        }else{
            res.send({status:"deleted successfully"});
        }
    })
}

module.exports = deleteMovie;