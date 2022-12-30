import React, { Component } from "react";

export default class MovieList extends Component {
  render() {
    const { films } = this.props;
    const filmsList = films.map((film) => {
      const { id, ...allProps } = film;
      return <Card key={id} id={id} {...allProps} />;
    });

    return <>{filmsList}</>;
  }
}
