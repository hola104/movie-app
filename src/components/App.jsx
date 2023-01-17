import React, { Component } from "react";
import { Tabs, Alert, Space, Pagination } from "antd";
import { Offline, Online } from "react-detect-offline";

import "./App.css";
import apiService from "../service/apiRequest";
import guestSessionRequest from "../service/guestSession";
// import apiDiscover from "../service/apiDiscover";

import MoviesList from "./MovieList/MovieList";
// import Loader from "./Loader/Loader";
import Search from "./Search/Search";

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
    guestSessionRequest().then((guestSession) => {
      !localStorage.getItem("guest") &&
        localStorage.setItem("guest", `${guestSession.guest_session_id}`);
    });
  }

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
    const { films, loading, currentPage, totalPage, searchRequest } =
      this.state;

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
                      onChange={(value) => this.nextPage(searchRequest, value)}
                      hideOnSinglePage
                      pageSize={20}
                      showSizeChanger={false}
                    />
                  </div>
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
              <div className="movies-app">
                <p>111</p>
              </div>
            ),
          },
        ]}
      />
    );
  }
}
