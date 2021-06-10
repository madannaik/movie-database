import React, { useState, useEffect } from 'react';
import Modal from '../components/Modal';
import "../css/movieList.css";


export default function MovieList() {
    const [movieData, setmovieDatastate] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [editData, seteditData] = useState();
    useEffect(() => {
        fetchDetails();
    }, [])

    const fetchDetails = () => {
        fetch("http://127.0.0.1:5000/getDetails", {
            method: "POST"
        })
            .then(response => response.json())
            .then(data => setmovieDatastate(data))
            .catch(err => console.log(err));
    }

    const deleteCard = (id) => {
        fetch("http://127.0.0.1:5000/deleteMovie", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: id
            })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
        fetchDetails(); 
    }
    const editCard = (data) =>{
        seteditData(data);
        console.log(data);
        setIsOpen(true);
        
    }

    const onClose = () =>{
        setIsOpen(false);
    }

    return (
        <div className="movies">
            {isOpen ?<Modal Open={isOpen} toggle={onClose} data={editData} refresh={fetchDetails}/>:<></>}
            {movieData.map((data) => {
                return <div className="movie-card">

                    <div className="movie-card_poster">
                        <img src={data.poster_url} alt={"movie-poster"} />
                    </div>
                    <div className="movie-card_content">
                        <span>{data.movie_name}</span>
                        <span>{data.language}</span>
                        <span>{data.budget}</span>
                        <span>{data.total_collection}</span>
                        <span>Total collection:1000cr</span>
                        <span onClick={()=>editCard(data)}>Edit</span>
                        <span onClick={() => deleteCard(data._id)}>Delete</span>
                    </div>
                </div>
            })}

        </div>
    )
}
