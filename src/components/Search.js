import React, { useState } from 'react';
import '../styles.css';

function Search({ addToFavorites, addToWatchlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://www.omdbapi.com/?apikey=fa82ab71&s=${searchTerm}&plot=full`);
      const data = await response.json();
      setSearchResults(data.Search || []);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div className="content-search">
      <div className="center-content">
        <h1>Search Movies/Series</h1>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies..."
          />
          <button type="submit">Search</button>
        </form>

        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((movie) => (
              <li key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>Year: {movie.Year}</p>
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />
                <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
                <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

export default Search;
