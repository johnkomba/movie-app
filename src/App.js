import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Search from './components/Search';
import MovieDetail from './components/MovieDetail';
import Favorites from './components/Favorites';
import Watchlist from './components/Watchlist';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
     <Routes>
  <Route exact path="/" element={<Home />} />
  <Route path="/search" element={<Search />} />
  <Route path="/movie/:id" element={<MovieDetail />} />
  <Route path="/favorites" element={<Favorites />} />
  <Route path="/watchlist" element={<Watchlist />} />
  <Route path="*" element={<NotFound />} />
</Routes>

    </Router>
  );
}

export default App;
