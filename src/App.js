import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=362b4302";

const App = () => {
  const movie1 = {
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    Title: "Superman, Spiderman or Batman",
    Type: "movie",
    Year: "2011",
    imdbID: "tt2084949",
  };

  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Movie Land</h1>

      <div className="search">
        <input
          placeholder="Search for Movies"
          value="Superman"
          onChange={() => {}}
        />
        <img alt="search" src={SearchIcon} onClick={() => {}} />
      </div>

      <div className="container">
        <MovieCard movies={movie1} />
      </div>
    </div>
  );
};

export default App;
