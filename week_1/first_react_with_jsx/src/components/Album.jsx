import React from 'react';

const Album = (props) => {
    return (
        <div className='App'>
            <h2>Album Name:{props.albumName}</h2>
            <h3>Band Name: {props.bandName}</h3>
            <h3>Release Year: {props.releaseYear}</h3>
        </div>
    )
}

export default Album;