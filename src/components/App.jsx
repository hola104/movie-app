import React, { Component } from "react";

import "./App.css";
import getResource from "../service/apiRequest";

import MoviesList from "./MovieList/MovieList";

// import Movies from "./Movies/Movies";

export default class App extends Component {
  state = {
    films: [],
  };
  componentDidMount() {
    getResource().then((movies) => {
      this.setState({ films: movies.results });
    });
  }
  render() {
    const { films } = this.state;

    return (
      <div className="movieApp">
        <MoviesList films={films} />
      </div>
    );
  }
}
