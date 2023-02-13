import {useState} from 'react';
import axios from 'axios';

const MovieForm = () => {
    const[movieName, setMovieName] = useState("");
    const[movieYear, setMovieYear] = useState();
    const[movieDescription, setMovieDescription] = useState("");


    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        axios.post('http://localhost:8000/api/movies', {
            movieName,
            movieYear,
            movieDescription
        })
            .then(res=> {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label htmlFor="">Movie Name</label>
                    <input type="text" name="movieName" id="" onChange={(e)=> setMovieName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Release Year</label>
                    <input type="number" onChange={(e)=> setMovieYear(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="">Description</label>
                    <textarea name="description" id="" cols="30" rows="10" onChange={(e)=> setMovieDescription(e.target.value)}></textarea>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default MovieForm;
