import React, { useState, useEffect } from 'react';
import instance  from '../helpers/axios';

import '../styles/rows.css';

const base_imgUrl = " https://image.tmdb.org/t/p//original/";

function Rows({ title, fetchUrl, isLargeRow }) {

    const [movies, setMovies] = useState([]);

    useEffect(() => {

      async function fetchData() { 
          const req = await instance.get(fetchUrl);
          //console.log(req.data.results);
          setMovies(req.data.results);            
          return req;          
        } fetchData();
    }, [fetchUrl]);

    //console.log(movies);

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map( movie => (                    
                    <img 
                    key={movie.id}
                    className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_imgUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}/>
                ))}
            </div>
        </div>
    )
}

export default Rows
