import React, { Component } from "react";

import Card from "../Card/Card";
import Warning from "../Warning/Warning";
import "./MovieList.css";

export default class MovieList extends Component {
  render() {
    const { films } = this.props;

    if (films) {
      const filmsList = films.map((film) => {
        const { id, ...allProps } = film;
        return <Card key={id} id={id} {...allProps} />;
      });
      return <ul className="cardList">{filmsList}</ul>;
    }
    // return <Warning />;
  }
}
