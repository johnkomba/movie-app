
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import Watchlist from './components/Watchlist';
import NotFound from './components/NotFound';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Komba Movies App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search">Search</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/favorites">Favorites</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/watchlist">Watchlist</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function App() {
  const [favorites, setFavorites] = useState([]);
  const [watchlist, setWatchlist] = useState([]);

  const addToFavorites = (movie) => {
    setFavorites((prevFavorites) => [...prevFavorites, movie]);
  };

  const removeFromFavorites = (movie) => {
    setFavorites((prevFavorites) => prevFavorites.filter((m) => m.imdbID !== movie.imdbID));
  };

  const addToWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => [...prevWatchlist, movie]);
  };

  const removeFromWatchlist = (movie) => {
    setWatchlist((prevWatchlist) => prevWatchlist.filter((m) => m.imdbID !== movie.imdbID));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home addToFavorites={addToFavorites} addToWatchlist={addToWatchlist} />} />
        <Route path="/search" element={<Search addToFavorites={addToFavorites} addToWatchlist={addToWatchlist} />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} removeFromFavorites={removeFromFavorites} />}
        />
        <Route
          path="/watchlist"
          element={<Watchlist watchlist={watchlist} removeFromWatchlist={removeFromWatchlist} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
