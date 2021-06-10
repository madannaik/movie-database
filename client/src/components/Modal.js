import React,{useRef,useState} from 'react'

export default function Modal({Open,toggle,data,refresh}) {

    const [editData, seteditData] = useState(data);


    const onSave = ()=>{
        fetch("http://127.0.0.1:5000/updateMovie", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id:editData._id,
                movie_name: editData.movie_name,
                language: editData.language,
                release_date: editData.release_date,
                poster_url: editData.poster_url,
                budget: editData.budget,
                collections: editData.total_collection,
            })
        })
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(err=>console.log(err));
        toggle();
        refresh();
    }

    
    const modal = useRef(null);
    const style = {
        display:`${Open?'block':'none'}`
    }
    
    const onClose = ()=>{
       toggle();
    }
    const handleFormChange = (event) => {
        seteditData({ ...editData, [event.target.name]: event.target.value });
    }

    return (
        <div className="edit-modal" ref={modal} style={style}>
             <div className="form-content">
                    <input className="movie-title"
                        placeholder="Enter movie title"
                        name="movie_name" type="text"
                        value={editData.movie_name}
                        onChange={handleFormChange}
                        
                    />

                    <input className="movie-title"
                        placeholder="Enter movie Language"
                        name="language" type="text"
                        value={editData.language}
                        onChange={handleFormChange}
                         />

                    <input className="movie-title"
                        placeholder="Enter release year"
                        name="release_date" type="text"
                        value={editData.release_year}
                        onChange={handleFormChange}
                         />

                    <input className="movie-title"
                        placeholder="Budget"
                        name="budget" type="text"
                        value={editData.budget}
                        onChange={handleFormChange}
                         />

                    <input className="movie-title"
                        placeholder="Image poster Url"
                        name="poster_url" type="text"
                        value={editData.poster_url}
                        onChange={handleFormChange}
                         />

                    <input className="movie-title"
                        placeholder="total Collection"
                        name="total_collection" type="text"
                        value={editData.total_collection}
                        onChange={handleFormChange}
                         />

                </div> 
                <button className="btn" type="submit" onClick={onSave}>Save</button> 
                <button onClick={onClose} className="btn" type="submit" style={{backgroundColor:"rgb(212, 88, 88)",marginLeft:"5px"}}>Cancel</button> 
        </div>
    )
}
