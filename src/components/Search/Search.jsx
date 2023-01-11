import React, { Component } from "react";
import { debounce } from "lodash";

import "./Search.css";

export default class Search extends Component {
  onLabelChange = debounce((event) => {
    const { searchMovie } = this.props;
    searchMovie(event.target.value);
  }, 700);

  render() {
    return (
      <form className="search-form">
        <label className="search-label">
          <input
            type="text"
            className="search-input"
            placeholder="Type to search..."
            onChange={this.onLabelChange}
          />
        </label>
      </form>
    );
  }
}
