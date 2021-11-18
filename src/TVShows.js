import React, { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import { useParams } from "react-router-dom";
import moment from 'moment'
export default function TVShows(props) {
  const [showList, setshowList] = useState();
  console.log("TVSHOWS", props);
  const { queryString } = useParams();
  
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=" + queryString)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setshowList(res);
      });
  }, []);
  return (
    <React.Fragment>
      <div>
        <header className="header">
          <h1>Shows </h1>
        </header>
        <div className="container">
          {showList?.map((show) => {
            return (
              <Card
                key={show.show.id}
                name={show.show.name}
                language={show.show.language}
                genres={show.show.genres}
                runtime={show.show.runtime}
                premiered={moment(Date(show.show.premiered)).format("Do MMM YY")}
                ratings={show.show.rating.average}
                countryName={show.show.dvdCountry}
                thumbnail={show.show.image?.medium}
                id={show.show.id}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}
