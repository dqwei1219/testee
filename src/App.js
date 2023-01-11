import React, { useEffect } from "react";

// 362b4302

const API_URL = "http://www.omdbapi.com?apikey=362b4302";

const App = () => {
  const check = "check";

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return <h1>App</h1>;
};

export default App;
