import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles.css';

function Home() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiKey = 'fa82ab71';
    axios.get(`http://www.omdbapi.com/?apikey=${apiKey}&s=movie&page=${page}&per_page=12`)
      .then(response => {
        setMovies(response.data.Search);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }, [page]);

  const handleNextPage = () => {
    setPage(prevPage => prevPage + 1);
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
      window.scrollTo(0, 0); // Scroll to the top of the page
    }
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to My Movie App</h1>
        <p>Discover and explore a wide range of movies.</p>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.map(movie => (
          <div key={movie.imdbID} className="col">
            <div className="card">
              <img src={movie.Poster} className="card-img-top img-fluid" alt={movie.Title} />
              <div className="card-body">
                <h5 className="card-title">{movie.Title}</h5>
                <p className="card-text">Year: {movie.Year}</p>
              </div>
            </div>
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
