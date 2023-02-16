import React, { useState, useEffect } from "react";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";
import api from "../services/api";
import "./App.css";

function App() {
  const moviesEndpoint = "/movies";
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState();


  const movies2Endpoint = "/movies2";
  const [movies2, setMovies2] = useState([]);
  const [error2, setError2] = useState();

  const search_movie_endpoint = "/evaluate";
  const [search_results, setSearchResults] = useState([]);
  const [error3, setError3] = useState();

  const fetchMovies = async () => {
    try {
      const { data } = await api.get(moviesEndpoint);
      setMovies(data);
    } catch (error) {
      setError("Could not fetch the movies!");
    }
  };

  const handleAddMovie = async (title) => {
    try {
      const movie = { _id: Date.now(), title };
      setMovies([...movies, movie]);

      const { data: savedMovie } = await api.create(moviesEndpoint, movie);

      setMovies([...movies, savedMovie]);
    } catch (error) {
      setError("Could not save the movie!");
      setMovies(movies);
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      setMovies(movies.filter((m) => m !== movie));
      await api.remove(moviesEndpoint + "/" + movie._id);
    } catch (error) {
      setError("Could not delete the movie!");
      setMovies(movies);
    }
  };


  // filmes 2
  const fetchMovies2 = async () => {
    try {
      const { data } = await api.get(movies2Endpoint);
      setMovies2(data);
    } catch (error) {
      setError2("Could not fetch the movies!");
    }
  };

  const handleAddMovie2 = async (title) => {
    try {
      const movie = { _id: Date.now(), title };
      setMovies2([...movies2, movie]);

      const { data: savedMovie } = await api.create(movies2Endpoint, movie);

      setMovies2([...movies2, savedMovie]);
    } catch (error) {
      setError2("Could not save the movie!");
      setMovies2(movies);
    }
  };

  const handleDeleteMovie2 = async (movie) => {
    try {
      setMovies2(movies.filter((m) => m !== movie));
      await api.remove(movies2Endpoint + "/" + movie._id);
    } catch (error) {
      setError2("Could not delete the movie!");
      setMovies2(movies);
    }
  };


  // busca por filme
  const handleAddSearch = async (title) => {
    try {
      const movie = { _id: Date.now(), title };
      
      const { data: savedMovie } = await api.get(search_movie_endpoint + '/' + title);
      console.log(savedMovie);
      setSearchResults([savedMovie]);
      
    } catch (error) {
      setError3("Could not save the movie!");
      setSearchResults([]);
    }
  };

  const handleDeleteSearch = async (movie) => {};

  useEffect(() => {
    fetchMovies();
    fetchMovies2();
  }, []);

  return (
    <div>
      <div className="App">
        <MovieForm onAddMovie={handleAddMovie} />
        {error && (
          <p role="alert" className="Error">
            {error}
          </p>
        )}
        <MovieList movies={movies} onDeleteMovie={handleDeleteMovie} />
      </div>


      <div className="App">
        <MovieForm onAddMovie={handleAddMovie2} />
        {error2 && (
          <p role="alert" className="Error">
            {error2}
          </p>
        )}
        <MovieList movies={movies2} onDeleteMovie={handleDeleteMovie2} />
      </div>


      <div className="App">
        <MovieForm onAddMovie={handleAddSearch} />
        {error2 && (
          <p role="alert" className="Error">
            {error3}
          </p>
        )}
        <MovieList movies={search_results} onDeleteMovie={handleDeleteSearch} />
      </div>
    </div>

  );
}

export default App;
