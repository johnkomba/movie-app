
import React, { useState } from 'react';

function Search({ addToFavorites, addToWatchlist }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=fa82ab71&s=${searchTerm}`);
      const data = await response.json();
      setSearchResults(data.Search || []);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };

  return (
    <div>
      <h1>Search Movies</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies..."
        />
        <button type="submit">Search</button>
      </form>

      <ul>
        {searchResults.map((movie) => (
          <li key={movie.imdbID}>
            <h3>{movie.Title}</h3>
            <p>Year: {movie.Year}</p>
            <button onClick={() => addToFavorites(movie)}>Add to Favorites</button>
            <button onClick={() => addToWatchlist(movie)}>Add to Watchlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
