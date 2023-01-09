import React, { Component } from "react";

import "./App.css";
import getResource from "../service/apiRequest";

import MoviesList from "./MovieList/MovieList";
import Loader from "./Loader/Loader";

// import Movies from "./Movies/Movies";

export default class App extends Component {
  state = {
    films: [],
    loading: true,
  };
  componentDidMount() {
    getResource().then((movies) => {
      this.setState({ films: movies.results, loading: false });
    });
  }
  render() {
    const { films, loading } = this.state;

    if (loading) {
      return <Loader />;
    }

    return (
      <div className="movieApp">
        <MoviesList films={films} />
      </div>
    );
  }
}
