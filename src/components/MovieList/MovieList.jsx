import React, { Component } from "react";

import Card from "../Card/Card";
import "./MovieList.css";

export default class MovieList extends Component {
  render() {
    const { films } = this.props;
    console.log(films);
    if (films.length) {
      const filmsList = films.map((film) => {
        const { id, ...allProps } = film;
        return <Card key={id} id={id} {...allProps} />;
      });
      return <ul className="cardList">{filmsList}</ul>;
    }
  }
}
