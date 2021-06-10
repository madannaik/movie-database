import React, { useState } from 'react'
import "../css/form.css";
import { Link } from "react-router-dom";

export default function Movieform() {



    const [formData, setformData] = useState({
        movieTitle: "",
        language: "",
        releaseYear: "",
        budget: "",
        imageURl: "",
        collection: ""
    })


    const submit = async (e) => {
        e.preventDefault();
        await fetch("http://127.0.0.1:5000/putDetails", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                movie_name: formData.movieTitle,
                language: formData.language,
                release_date: formData.releaseYear,
                poster_url: formData.imageURl,
                budget: formData.budget,
                collections: formData.collection,
            }),
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(err => console.log(err));
        console.log(formData);

    }

    const handleFormChange = (event) => {
        setformData({ ...formData, [event.target.name]: event.target.value });
    }

    return (
        <div className="form" >

            <Link to="/movies" style={{
                position:'absolute',
                right: "0",
            }}> 
            <button className="show-movie-list">
               Show Movie List
            </button>
            </Link>

           
           
            <form className="form-data" onSubmit={submit}>
                <h1 className="form-data_title">Upload Movie</h1>
                <div className="form-content">
                    <input className="movie-title"
                        placeholder="Enter movie title"
                        name="movieTitle" type="text"
                        onChange={handleFormChange}
                    />

                    <input className="movie-title"
                        placeholder="Enter movie Language"
                        name="language" type="text"
                        onChange={handleFormChange} />

                    <input className="movie-title"
                        placeholder="Enter release year"
                        name="releaseYear" type="text"
                        onChange={handleFormChange} />

                    <input className="movie-title"
                        placeholder="Budget"
                        name="budget" type="text"
                        onChange={handleFormChange} />

                    <input className="movie-title"
                        placeholder="Image poster Url"
                        name="imageURl" type="text"
                        onChange={handleFormChange} />

                    <input className="movie-title"
                        placeholder="total Collection"
                        name="collection" type="text"
                        onChange={handleFormChange} />

                </div>
                <button className="btn" type="submit">Submit</button>
            </form>
        </div>
    )
}
