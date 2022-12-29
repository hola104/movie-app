import React, { Component } from "react";
import "./App.css";

import Movies from "./Movies/Movies";

export default class App extends Component {
  render() {
    return (
      <div className="movieApp">
        MoviesList
        <Movies />
      </div>
    );
  }
}
