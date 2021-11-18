import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Card({
  name,
  language,
  genres,
  runtime,
  premiered,
  rating,
  countryName,
  thumbnail,
  id
}) {
  return (
    <div>
      <div className="card">
        <div>
          <img src={thumbnail} className="cardImg" />
        </div>
        <div className="name">
          <Link to={`/tv-shows/details/${id}`}> {name}</Link>
        </div>
        <div className="details">
          <div className="language">Language : {language}</div>
          <div className="genres">Genres: {genres.toString()}</div>
          <div className="runtime">Runtime : {runtime}</div>
          <div className="premiered">Premiered: {premiered}</div>
          <div className="rating">Ratings: {rating}</div>
          <div className="countryName">Country : {countryName}</div>
        </div>
      </div>
    </div>
  );
}
