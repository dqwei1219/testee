import React, { useEffect } from "react";

import './App.css';
import SearchIcon from './search.svg';

const API_URL = "http://www.omdbapi.com?apikey=362b4302";

const App = () => {

  const movie1 = {
    Title: "Superman, Spiderman or Batman",
    Type: "movie",
    Year: "2011",
    imdbID: "tt2084949"
  };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input placeholder="Search for Movies" value="Superman" onChange={() => {}}/>
        <img alt="search" src={SearchIcon} onClick={()=>{}}/>
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p></p>
          </div>
        </div>
      </div>


    </div>
  )

};

export default App;
