import React, { Component } from "react";
import { Tabs, Alert, Space, Pagination } from "antd";
import { Offline, Online } from "react-detect-offline";

import "./App.css";
import apiService from "../service/apiRequest";
import genresRequest from "../service/genresRequest";
import guestSessionRequest from "../service/guestSession";
import getRequest from "../service/getRequest";

import MoviesList from "./MovieList/MovieList";
import Search from "./Search/Search";
import { Provider } from "./GenresContext/genresContext";

// import apiDiscover from "../service/apiDiscover";
export default class App extends Component {
  state = {
    films: [],
    loading: false,
    value: "",
    totalPage: null,
    currentPage: 1,
    searchRequest: "",
  };

  // componentDidMount(page) {
  //   apiDiscover().then((movies) => {
  //     this.setState({
  //       films: movies.results,
  //       loading: false,
  //       totalPage: movies.total_pages,
  //       currentPage: page,
  //     });
  //   });
  // }

  componentDidMount() {
    genresRequest().then((genresMovies) =>
      this.setState({ genresMovies: genresMovies.genres })
    );
    guestSessionRequest().then((guestSession) => {
      !localStorage.getItem("guest") &&
        localStorage.setItem("guest", `${guestSession.guest_session_id}`);
    });
  }

  onChangeTabs = () => {
    getRequest().then((dataRate) => {
      this.setState({
        ratedMovies: dataRate.results,
      });
    });
  };

  searchMovie = (value) => {
    this.setState(() => ({ loading: true }));
    apiService(value).then((movies) => {
      this.setState(() => ({
        films: movies.results,
        loading: false,
        totalPage: movies.total_pages,
        currentPage: 1,
      }));
    });
  };

  nextPage = (value, page) => {
    this.setState(() => ({ loading: true }));
    apiService(value, page).then((movies) => {
      this.setState(() => ({
        films: movies.results,
        totalPage: movies.total_pages,
        currentPage: movies.page,
        loading: false,
      }));
    });
  };

  searchToState = (inputText) => {
    this.setState({ searchRequest: inputText });
  };

  render() {
    const {
      films,
      loading,
      currentPage,
      totalPage,
      searchRequest,
      genresMovies,
      ratedMovies,
    } = this.state;

    return (
      <Tabs
        centered
        defaultActiveKey="1"
        onChange={this.onChangeTabs}
        items={[
          {
            label: "Search",
            key: "1",
            children: (
              <>
                <Online>
                  <Provider value={genresMovies}>
                    <div className="movieApp">
                      <Search
                        searchMovie={this.searchMovie}
                        searchToState={this.searchToState}
                      />
                      <MoviesList films={films} loading={loading} />

                      <Pagination
                        defaultCurrent={1}
                        current={currentPage}
                        total={totalPage * 20}
                        onChange={(value) =>
                          this.nextPage(searchRequest, value)
                        }
                        hideOnSinglePage
                        pageSize={20}
                        showSizeChanger={false}
                      />
                    </div>
                  </Provider>
                </Online>
                <Offline>
                  <Space
                    direction="vertical"
                    style={{
                      width: "100%",
                    }}
                  >
                    <Alert
                      message="Warning!"
                      description="No internet connection..."
                      type="error"
                      showIcon
                    />
                  </Space>
                </Offline>
              </>
            ),
          },
          {
            label: "Rated",
            key: "2",
            children: (
              <Provider value={genresMovies}>
                <div className="movies-app">
                  <MoviesList films={ratedMovies} loading={loading} />
                </div>
              </Provider>
            ),
          },
        ]}
      />
    );
  }
}
