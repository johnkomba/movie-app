import React, { useState } from 'react';

function Watchlist() {
  const [watchlist, setWatchlist] = useState([]);

  const handleAddToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const handleRemoveFromWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((m) => m.imdbID !== movie.imdbID));
  };

  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <button onClick={() => handleRemoveFromWatchlist(movie)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Search Results</h2>
      <ul>
        {/* Example of how to add movies to watchlist */}
        <li>
          Movie 2
          <button onClick={() => handleAddToWatchlist({ Title: 'Movie 2', Year: '2022', imdbID: 'tt789012' })}>
            Add to Watchlist
          </button>
        </li>
        {/* Add more movies as needed */}
      </ul>
    </div>
  );
}

export default Watchlist;
