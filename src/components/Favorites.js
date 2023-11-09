
import React from 'react';

function Favorites({ favorites, removeFromFavorites }) {
  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <button onClick={() => removeFromFavorites(movie)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
