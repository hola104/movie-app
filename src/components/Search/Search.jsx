import React, { Component } from "react";
import { debounce } from "lodash";
import { Input } from "antd";

import "./Search.css";

export default class Search extends Component {
  onLabelChange = debounce((event) => {
    const { searchMovie, searchToState } = this.props;
    if (event.target.value.charAt(0) === " ") {
      return "";
    }
    searchToState(event.target.value);
    searchMovie(event.target.value);
  }, 700);

  render() {
    return (
      <form className="search-form">
        {/* <label className="search-label"> */}
        <Input
          type="search"
          className="search-input"
          placeholder="Type to search..."
          onChange={this.onLabelChange}
          autoFocus
        />
        {/* </label> */}
      </form>
    );
  }
}
