import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css'; 

function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1>Welcome to My Movie App</h1>
        <p>Discover and explore a wide range of movies.</p>
      </div>
      <ul className="nav-links">
        <li><Link to="/search">Search</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        <li><Link to="/watchlist">Watchlist</Link></li>
      </ul>
    </div>
  );
}

export default Home;
