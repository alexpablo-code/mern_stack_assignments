import React, {useState} from 'react';

const Movies = (props) => {
    const [movieSales, setMovieSales] = useState(props.movieSales)

    const ticketSold = () => {
        setMovieSales(movieSales + 1)
    }

    return(
        <div>
            <h1>{props.movieTitle}</h1>
            <p>{props.movieGenre}</p>
            <p>{props.movieRelease}</p>
            <p>{movieSales}</p>
            <button onClick= {ticketSold}>Sale</button>
        </div>
    )
}

export default Movies