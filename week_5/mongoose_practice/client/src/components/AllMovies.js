import {useEffect, useState} from 'react';
import axios from 'axios';

const AllMovies = () => {
    const [allMovies, setAllMovies] = useState(["Loading..."])

    useEffect(() => {
        axios.get('http://localhost:8000/api/movies')
        .then(res => setAllMovies(res.data.movies))
        .catch(err => console.log("This is the err",err))
    }, [])

    return ( 
        <>
            <div>
                {
                    allMovies.map((movie) =>(
                        <div>
                            <h2>{movie.movieName}</h2>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default AllMovies;