import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieShow from './MovieShow';

class MoviesPage extends Component {
  render() {
    return (
      <div>
        <h1>Movies Page</h1>
        <Route exact path="/movies" component={MoviesList} />
        <Route path="/movies/:id" component={MovieShow} />
      </div>
    );
  }
}

export default MoviesPage;