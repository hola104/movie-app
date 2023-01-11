import React, { Component } from "react";
import { Pagination } from "antd";

import "./App.css";
import apiService from "../service/apiRequest";
import apiDiscover from "../service/apiDiscover";

import MoviesList from "./MovieList/MovieList";
// import Loader from "./Loader/Loader";
import Search from "./Search/Search";

export default class App extends Component {
  state = {
    films: [],
    loading: true,
    value: "",
    totalPage: null,
    currentPage: 1,
  };

  componentDidMount() {
    apiDiscover().then((movies) => {
      this.setState({
        films: movies.results,
        loading: false,
        // currentPage: pageNumber,
        totalPage: movies.total_pages,
      });
    });
  }

  searchMovie = (value) => {
    apiService(value).then((movies) => {
      this.setState({
        films: movies.results,
        loading: false,
        totalPage: movies.total_pages,
        // currentPage: movies.page,
      });
    });
  };

  nextPage = (pageNumber) => {
    apiService(pageNumber).then((movies) => {
      this.setState({
        movies: movies.results,
        currentPage: pageNumber,
      });
    });
  };

  render() {
    const { films, loading, currentPage, totalPage } = this.state;

    // if (loading) {
    //   return <Loader />;
    // }

    return (
      <div className="movieApp">
        <Search searchMovie={this.searchMovie} />
        <MoviesList films={films} />
        <Pagination
          current={currentPage}
          onChange={this.nextPage}
          total={totalPage}
          hideOnSinglePage
          pageSize={20}
          showSizeChanger={false}
        />
      </div>
    );
  }
}
