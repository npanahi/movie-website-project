import { useEffect, useState } from "react";
import ButtonPrimary from "../Buttons/ButtonPrimary/ButtonPri";
import { Style } from "./HPHeroStyle";
import imgBase from "../../../helpers/globalVariables/img-path/imgBasePath";
import { Link, useParams } from "react-router-dom";
import { Carousel } from "antd";

const contentStyle = {
  dots: false,
  margin: 0,
  height: "100vh",
  color: "#fff",
  lineHeight: "20px",
  background: "#364d79",
  dotActiveWidth: 0,
};
export default function HPHero({ movies, genres }) {
  function renderGenres(arr) {
    let filteredGenres = [];
    genres.forEach((cur, i) => {
      if (arr.includes(cur.id)) filteredGenres.push(cur.name);
    });
    return filteredGenres.map((cur, i) => {
      return <span> {i !== filteredGenres.length - 1 ? cur + "," : cur} </span>;
    });
  }
  function renderFarm() {
    if (movies === null) return "";
    if (movies === undefined) return "";
    console.log(movies);
    return movies.results
      .slice(0, 8)
      .map(
        (
          {
            overview,
            name,
            poster_path,
            backdrop_path,
            id,
            title,
            genre_ids,
            tagline,
          },
          i
        ) => {
          return (
            <div key={id} style={contentStyle}>
              <div className="hero-wrapper  relative">
                <div className="background-wrapper ">
                  <img alt={title} src={`${imgBase.orURL}${backdrop_path}`} />
                  <div className="logo">
                    <img
                      className="logo-img "
                      alt="logo"
                      src="https://is1-ssl.mzstatic.com/image/thumb/oEYYIjc6-3zT0jgpyUiIaw/1x40at.png"
                    />
                  </div>
                </div>
                <div className="container text-wrapper absolute">
                  <div className="flex-box flex-y">
                    <h2 className="title">{title}</h2>
                    <div className="col-5 overview">{overview}</div>
                    <div className="genres">{renderGenres(genre_ids)}</div>
                    <Link className="i-b" to={`movie/${id}`}>
                      <ButtonPrimary text="To the broadcast" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      );
  }

  return (
    <Style className="section section-1 section-Hero">
      <div className="container-full m-b-10 ">
        <Carousel autoplay autoplaySpeed={3000}>
          {renderFarm()}
        </Carousel>
      </div>
    </Style>
  );
}
