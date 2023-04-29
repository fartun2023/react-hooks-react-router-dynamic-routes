import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import MoviesPage from "./MoviesPage";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios.get(
        "https://jsonmock.hackerrank.com/api/movies"
      );
      setMovies(response.data.data);
    };
    fetchMovies();
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Home Page</h1>
          </Route>
          <Route exact path="/movies/:movieId">
            <MoviesPage movies={movies} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;