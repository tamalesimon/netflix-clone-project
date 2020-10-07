import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import instance  from '../helpers/axios';
import movieTrailer from 'movie-trailer';

import '../styles/rows.css';

const base_imgUrl = "https://image.tmdb.org/t/p//original/";

function Rows({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

      async function fetchData() { 
          const req = await instance.get(fetchUrl);
          console.log(req.data.results);
          setMovies(req.data.results);            
          return req;          
        } fetchData();
    }, [fetchUrl]);

    const opts = {
        height:"390",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
          },
    };

    const handleClick = (movie) => {
        if(trailerUrl) {
            setTrailerUrl('');
        } else {
            movieTrailer(movie?.name || '')
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl (urlParams.get('v'));

            }).catch((error) => console.log(error));
        }
    }

    //console.log(movies.id);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map( movie => (                    
                    <img 
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_imgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Rows
