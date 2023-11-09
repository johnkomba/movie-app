import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiKey = 'fa82ab71';
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${page}`)
      .then(response => {
        setMovies(response.data.Search);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to My Movie App</h1>
        <p>Discover and explore a wide range of movies.</p>
      </div>

      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.imdbID} className="movie-card">
            <img src={movie.Poster} alt={movie.Title} />
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={page === 1}>Previous</button>
        <button onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
}

export default Home;
