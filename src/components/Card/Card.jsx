import React, { Component } from "react";
import { format } from "date-fns";

import Genre from "../Genre/Genre";
import Stars from "../Stars/Stars";

import Image from "./noposter.jpg";
import "./Card.css";

export default class Card extends Component {
  _imgPath = "https://image.tmdb.org/t/p/w500";
  posterPath = (poster_path, availabilityPoster) =>
    poster_path === null ? Image : availabilityPoster;

  mainText = (text) => text.split(" ").slice(0, 29).join(" ");

  releaseData = (release_date) => {
    if (release_date) {
      return format(new Date(release_date), "PPP");
    }
    return "Release date unknown";
  };

  render() {
    const {
      id,
      poster_path,
      title,
      genre_ids,
      release_date,
      overview,
      rating,
    } = this.props;
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
              {this.releaseData(release_date)}
              {/* {format(new Date(release_date), "PPP")} */}
            </div>

            <ul className="category-list">
              <Genre genre_ids={genre_ids} key={id} />
            </ul>
            <div className="overview">{this.mainText(overview)}..</div>
            <Stars id={id} rating={rating} />
          </div>
        </div>
      </li>
    );
  }
}
