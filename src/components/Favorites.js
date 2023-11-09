import React, { useState } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const handleRemoveFromFavorites = (movie) => {
    setFavorites((prevFavorites) => prevFavorites.filter((m) => m.imdbID !== movie.imdbID));
  };

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((movie) => (
          <li key={movie.imdbID}>
            {movie.Title} ({movie.Year})
            <button onClick={() => handleRemoveFromFavorites(movie)}>Remove</button>
          </li>
        ))}
      </ul>

      <h2>Search Results</h2>
      <ul>
        {/* Example of how to add movies to favorites */}
        <li>
          Movie 1
          <button onClick={() => handleAddToFavorites({ Title: 'Movie 1', Year: '2022', imdbID: 'tt123456' })}>
            Add to Favorites
          </button>
        </li>
        {/* Add more movies as needed */}
      </ul>
    </div>
  );
}

export default Favorites;
