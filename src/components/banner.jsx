import React, { useState, useEffect } from 'react';
import instance from '../helpers/axios';
import requests from '../helpers/requests';

import '../styles/banner.css';


function Banner () {
    
    const [bannerMovie, setBannerMovie] = useState([]);

    useEffect(() => {
      async function fetchData() {
        const request = await instance.get(requests.fetchNetflixOriginals);
        setBannerMovie(
            request.data.results[
                Math.floor(Math.random() * request.data.results.length)
            ]
        );
        return request;

      } fetchData();
    }, []);

    console.log(bannerMovie);

    function truncate(str, num) {
        return str?.length > num ? str.slice(0, num-1) + " " + "..." : str;
    }

    return (
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p//original/${bannerMovie?.backdrop_path}")`,
          //backgroundPosition: "center center",
          objectFit: "fit",
          objectPosition:"center"
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {bannerMovie?.title ||
              bannerMovie?.name ||
              bannerMovie?.orginal_name}
          </h1>
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">+ My List</button>
          </div>
          <h1 className="banner_description">
                {truncate(bannerMovie?.overview, 150)}
          </h1>
        </div>
        <div className="banner--fadeBottom"/>
      </header>
    );
}

export default Banner 
