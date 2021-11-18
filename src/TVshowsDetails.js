import React, { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
export default function TVshowsDetails() {
  const { id } = useParams();
  const [showDetails, setshowDetails] = useState();
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows/" + id)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setshowDetails(res);
      });
  }, []);
  return (
    <div>
      <header className="header">
        <h1>Show Details </h1>
      </header>
      <div className="details">
        <div className="div">
          <img
            src={showDetails?.image?.medium}
            alt=""
            srcset=""
            className="detailsImage"
          />
        </div>
        <div className="infoDetails">
          <div className="name">
            <h2>{showDetails?.name}</h2>
          </div>
          <h4 className="language">Language : {showDetails?.language}</h4>
          <h4 className="genres">Genres: {showDetails?.genres.toString()}</h4>
          <h4 className="runtime">Runtime : {showDetails?.runtime}</h4>
          <h4 className="premiered">Premiered: {showDetails?.premiered}</h4>
          <h4 className="rating">Ratings: {showDetails?.rating.average}</h4>
          <h4 className="countryName">Country : {showDetails?.countryName}</h4>
        </div>
      </div>
    </div>
  );
}
