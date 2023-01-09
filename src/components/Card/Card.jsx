import React, { Component } from "react";
import { format } from "date-fns";

import "./Card.css";

export default class Card extends Component {
  _imgPath = "https://image.tmdb.org/t/p/w500";
  posterPath = (poster_path, availabilityPoster) =>
    poster_path === null ? Image : availabilityPoster;

  mainText = (text) => text.split(" ").slice(0, 50).join(" ");

  render() {
    const { poster_path, title, release_date, overview } = this.props;
    const availabilityPoster = `${this._imgPath}${poster_path}`;
    return (
      <li className="card-container">
        <div className="card">
          <img
            className="poster"
            src={this.posterPath(poster_path, availabilityPoster)}
            alt="poster"
          />
          <div className="movie-info">
            <h2 className="title">{title}</h2>
            <div className="data-of-release">
              {format(new Date(release_date), "PPP")}
            </div>
            <ul className="genre-list">
              <li className="genre-item">Action</li>
              <li className="genre-item">Adventure</li>
              <li className="genre-item">Family</li>
            </ul>
            <div className="overview">{this.mainText(overview)}..</div>
          </div>
        </div>
      </li>
    );
  }
}
