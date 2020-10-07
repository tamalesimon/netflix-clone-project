import React from 'react';
import Rows from './components/rows';
import Banner from './components/banner';
import requests from './helpers/requests';
import './App.css';

function App() {

  return (
    <div className="App">
      <Banner />
      <Rows 
      title="Netflix Original" 
      fetchUrl={requests.fetchNetflixOriginals}
      isLargeRow/>
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Rows title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
