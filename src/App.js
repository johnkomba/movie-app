import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Search from './Search';
import MovieDetail from './MovieDetail';
import Favorites from './Favorites';
import Watchlist from './Watchlist';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/watchlist" component={Watchlist} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
