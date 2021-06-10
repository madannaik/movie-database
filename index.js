const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const putDetails = require('./Routes/putDetails.js');
const getMovieDetails = require('./Routes/getDetails.js');
const deleteMovie = require('./Routes/deleteMovie.js');
const updateMovie = require('./Routes/updateMovie.js');
dotenv.config({path:"./config.env"})
const uri = process.env.DATABASE;

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/putDetails",putDetails);
app.use("/getDetails",getMovieDetails);
app.use("/deleteMovie",deleteMovie);
app.use("/updateMovie",updateMovie);
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log("server started at",PORT);
});
mongoose.connect(uri,{useNewUrlParser: true,useUnifiedTopology:true}).then(()=>{
    console.log("database connected");
})
mongoose.set('useFindAndModify', false);