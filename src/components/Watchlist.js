// Watchlist.js
import React from 'react';

function Watchlist({ watchlist, removeFromWatchlist }) {
  return (
    <div className="content">
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
    </div>
  );
}

export default Watchlist;
