// Watchlist.js
import React from 'react';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div>
      <h1>Watchlist</h1>
      <ul>
        {watchlist.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <button onClick={() => removeFromWatchlist(movie)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Watchlist;
